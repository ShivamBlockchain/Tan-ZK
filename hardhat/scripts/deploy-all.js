import pkg from "hardhat";
const { ethers, run } = pkg;

async function main() {
  console.log("Starting deployment of all Polygon ZkEVM contracts...");
  
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  const deployedContracts = {};

  try {
    // 1. Deploy PolygonZkEVMGlobalExitRootL2 (only needs bridge address, but we'll use a placeholder for now)
    console.log("\n1. Deploying PolygonZkEVMGlobalExitRootL2...");
    const GlobalExitRootL2Factory = await ethers.getContractFactory("PolygonZkEVMGlobalExitRootL2");
    const globalExitRootL2 = await GlobalExitRootL2Factory.deploy("0x0000000000000000000000000000000000000000"); // Placeholder bridge address
    await globalExitRootL2.waitForDeployment();
    const globalExitRootL2Address = await globalExitRootL2.getAddress();
    deployedContracts.globalExitRootL2 = globalExitRootL2Address;
    console.log("PolygonZkEVMGlobalExitRootL2 deployed at:", globalExitRootL2Address);

    // 2. Deploy PolygonZkEVMBridge (needs global exit root address)
    console.log("\n2. Deploying PolygonZkEVMBridge...");
    const BridgeFactory = await ethers.getContractFactory("PolygonZkEVMBridge");
    const bridge = await BridgeFactory.deploy(globalExitRootL2Address);
    await bridge.waitForDeployment();
    const bridgeAddress = await bridge.getAddress();
    deployedContracts.bridge = bridgeAddress;
    console.log("PolygonZkEVMBridge deployed at:", bridgeAddress);

    // 3. Deploy PolygonZkEVMGlobalExitRoot (needs rollup and bridge addresses)
    console.log("\n3. Deploying PolygonZkEVMGlobalExitRoot...");
    const GlobalExitRootFactory = await ethers.getContractFactory("PolygonZkEVMGlobalExitRoot");
    const globalExitRoot = await GlobalExitRootFactory.deploy("0x0000000000000000000000000000000000000000", bridgeAddress); // Placeholder rollup address
    await globalExitRoot.waitForDeployment();
    const globalExitRootAddress = await globalExitRoot.getAddress();
    deployedContracts.globalExitRoot = globalExitRootAddress;
    console.log("PolygonZkEVMGlobalExitRoot deployed at:", globalExitRootAddress);

    // 4. Deploy PolygonZkEVM (main contract)
    console.log("\n4. Deploying PolygonZkEVM...");
    const PolygonZkEVMFactory = await ethers.getContractFactory("PolygonZkEVM");
    
    const polygonZkEVM = await PolygonZkEVMFactory.deploy(
      globalExitRootAddress, // _globalExitRootManager
      "0x0000000000000000000000000000000000000000", // _matic (placeholder)
      "0x0000000000000000000000000000000000000000", // _rollupVerifier (placeholder)
      bridgeAddress, // _bridgeAddress
      1, // _chainID (test chain ID)
      0 // _forkID
    );
    await polygonZkEVM.waitForDeployment();
    const polygonZkEVMAddress = await polygonZkEVM.getAddress();
    deployedContracts.polygonZkEVM = polygonZkEVMAddress;
    console.log("PolygonZkEVM deployed at:", polygonZkEVMAddress);

    // 5. Deploy PolygonZkEVMTimelock (needs PolygonZkEVM address)
    console.log("\n5. Deploying PolygonZkEVMTimelock...");
    const TimelockFactory = await ethers.getContractFactory("PolygonZkEVMTimelock");
    
    // Timelock constructor parameters
    const minDelay = 0; // 0 delay for testing
    const proposers = [deployer.address];
    const executors = [deployer.address];
    const admin = deployer.address;
    
    const timelock = await TimelockFactory.deploy(
      minDelay,
      proposers,
      executors,
      admin,
      polygonZkEVMAddress
    );
    await timelock.waitForDeployment();
    const timelockAddress = await timelock.getAddress();
    deployedContracts.timelock = timelockAddress;
    console.log("PolygonZkEVMTimelock deployed at:", timelockAddress);

    console.log("\n=== DEPLOYMENT SUMMARY ===");
    console.log("PolygonZkEVMGlobalExitRootL2:", deployedContracts.globalExitRootL2);
    console.log("PolygonZkEVMBridge:", deployedContracts.bridge);
    console.log("PolygonZkEVMGlobalExitRoot:", deployedContracts.globalExitRoot);
    console.log("PolygonZkEVM:", deployedContracts.polygonZkEVM);
    console.log("PolygonZkEVMTimelock:", deployedContracts.timelock);

  } catch (error) {
    console.error("Deployment failed:", error);
    throw error;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
