import pkg from "hardhat";
const { ethers, run } = pkg;

async function main() {
  const contractName = process.env.CONTRACT_NAME || process.argv.find(a => a.startsWith("--contract="))?.split("=")[1] || "PolygonZkEVMDeployer";
  const constructorArgsRaw = process.env.CONSTRUCTOR_ARGS || process.argv.find(a => a.startsWith("--args="))?.split("=")[1] || "";
  const args = constructorArgsRaw ? JSON.parse(constructorArgsRaw) : [];

  console.log(`Deploying ${contractName} with args:`, args);

  const factory = await ethers.getContractFactory(contractName);
  const contract = await factory.deploy(...args);
  await contract.deployed();
  const address = contract.address;

  console.log(`${contractName} deployed at: ${address}`);

  // Save deployment info to file
  const deploymentInfo = {
    contractName,
    address,
    constructorArgs: args,
    deploymentTime: new Date().toISOString(),
    network: process.env.HARDHAT_NETWORK || "tan"
  };

  // Write to deployments file
  const fs = await import('fs');
  const deploymentsFile = 'deployments.json';
  let deployments = {};
  
  try {
    const existingData = fs.readFileSync(deploymentsFile, 'utf8');
    deployments = JSON.parse(existingData);
  } catch (err) {
    // File doesn't exist, start fresh
  }
  
  deployments[contractName] = deploymentInfo;
  fs.writeFileSync(deploymentsFile, JSON.stringify(deployments, null, 2));
  console.log(`Deployment info saved to ${deploymentsFile}`);

  // Attempt verification if ETHERSCAN_API_KEY is available
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Attempting to verify contract...");
    try {
      // Wait a few blocks to ensure the contract is indexed
      const waitBlocks = Number(process.env.VERIFY_WAIT_BLOCKS || 5);
      console.log(`Waiting ${waitBlocks} blocks for contract to be indexed...`);
      
      // Wait for blocks
      const provider = await ethers.getDefaultProvider();
      const currentBlock = await provider.getBlockNumber();
      const targetBlock = currentBlock + waitBlocks;
      
      while (await provider.getBlockNumber() < targetBlock) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      }
      
      await run("verify:verify", {
        address,
        constructorArguments: args,
      });
      console.log("✅ Contract verified successfully!");
    } catch (err) {
      if (err.message.includes("Already Verified")) {
        console.log("✅ Contract is already verified!");
      } else {
        console.log("❌ Verification failed:", err?.message || err);
        console.log("You can verify manually later using:");
        console.log(`npx hardhat verify --network ${process.env.HARDHAT_NETWORK || 'tan'} ${address} ${JSON.stringify(args).replace(/"/g, '\\"')}`);
      }
    }
  } else {
    console.log("⚠️  ETHERSCAN_API_KEY not set. Skipping verification.");
    console.log("To verify manually, run:");
    console.log(`npx hardhat verify --network ${process.env.HARDHAT_NETWORK || 'tan'} ${address} ${JSON.stringify(args).replace(/"/g, '\\"')}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


