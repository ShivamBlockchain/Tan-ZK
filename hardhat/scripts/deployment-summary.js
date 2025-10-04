import pkg from "hardhat";
const { ethers } = pkg;
import fs from 'fs';

async function main() {
  console.log("=== POLYGON ZKEVM CONTRACTS DEPLOYMENT SUMMARY ===\n");
  
  // Contract addresses from our deployment
  const deployedContracts = {
    "PolygonZkEVMGlobalExitRootL2": "0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413",
    "PolygonZkEVMBridge": "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288",
    "PolygonZkEVMGlobalExitRoot": "0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A",
    "PolygonZkEVM": "0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5",
    "PolygonZkEVMTimelock": "0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D"
  };

  const [deployer] = await ethers.getSigners();
  console.log(`Deployer Address: ${deployer.address}`);
  console.log(`Network: ${process.env.HARDHAT_NETWORK || 'tan'}`);
  console.log(`Deployment Time: ${new Date().toISOString()}\n`);

  console.log("📋 DEPLOYED CONTRACTS:");
  console.log("=" * 50);
  
  for (const [contractName, address] of Object.entries(deployedContracts)) {
    console.log(`${contractName}:`);
    console.log(`  Address: ${address}`);
    console.log(`  Explorer: https://etherscan.io/address/${address}`);
    console.log("");
  }

  // Create deployment JSON file
  const deploymentData = {
    network: process.env.HARDHAT_NETWORK || 'tan',
    deployer: deployer.address,
    deploymentTime: new Date().toISOString(),
    contracts: deployedContracts
  };

  fs.writeFileSync('deployment-summary.json', JSON.stringify(deploymentData, null, 2));
  console.log("📄 Deployment summary saved to deployment-summary.json");

  // Verification commands
  console.log("\n🔍 VERIFICATION COMMANDS:");
  console.log("=" * 50);
  console.log("To verify all contracts, run:");
  console.log("npx hardhat run scripts/verify-contracts.js --network tan");
  console.log("\nOr verify individually:");
  
  console.log("\n# PolygonZkEVMGlobalExitRootL2");
  console.log(`npx hardhat verify --network tan 0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413 "0x0000000000000000000000000000000000000000"`);
  
  console.log("\n# PolygonZkEVMBridge");
  console.log(`npx hardhat verify --network tan 0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288`);
  
  console.log("\n# PolygonZkEVMGlobalExitRoot");
  console.log(`npx hardhat verify --network tan 0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A "0x0000000000000000000000000000000000000000" "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"`);
  
  console.log("\n# PolygonZkEVM");
  console.log(`npx hardhat verify --network tan 0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5 "0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A" "0x0000000000000000000000000000000000000000" "0x0000000000000000000000000000000000000000" "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288" 1 0`);
  
  console.log("\n# PolygonZkEVMTimelock");
  console.log(`npx hardhat verify --network tan 0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D 0 "[\"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7\"]" "[\"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7\"]" "0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7" "0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"`);

  console.log("\n✅ All contracts deployed successfully!");
  console.log("🎉 Polygon ZkEVM deployment completed!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
