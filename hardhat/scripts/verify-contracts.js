import pkg from "hardhat";
const { run } = pkg;

async function main() {
  console.log("Starting verification of all deployed contracts...");
  
  // Contract addresses from deployment
  const deployedContracts = {
    "PolygonZkEVMGlobalExitRootL2": {
      address: "0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413",
      constructorArgs: ["0x0000000000000000000000000000000000000000"]
    },
    "PolygonZkEVMBridge": {
      address: "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288",
      constructorArgs: []
    },
    "PolygonZkEVMGlobalExitRoot": {
      address: "0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A",
      constructorArgs: ["0x0000000000000000000000000000000000000000", "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"]
    },
    "PolygonZkEVM": {
      address: "0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5",
      constructorArgs: [
        "0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A",
        "0x0000000000000000000000000000000000000000",
        "0x0000000000000000000000000000000000000000",
        "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288",
        1,
        0
      ]
    },
    "PolygonZkEVMTimelock": {
      address: "0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D",
      constructorArgs: [
        0,
        ["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],
        ["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],
        "0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7",
        "0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"
      ]
    }
  };

  for (const [contractName, contractInfo] of Object.entries(deployedContracts)) {
    try {
      console.log(`\nVerifying ${contractName} at ${contractInfo.address}...`);
      
      await run("verify:verify", {
        address: contractInfo.address,
        constructorArguments: contractInfo.constructorArgs,
      });
      
      console.log(`✅ ${contractName} verified successfully!`);
    } catch (error) {
      if (error.message.includes("Already Verified")) {
        console.log(`✅ ${contractName} is already verified!`);
      } else {
        console.log(`❌ Failed to verify ${contractName}:`, error.message);
      }
    }
  }

  console.log("\n=== VERIFICATION SUMMARY ===");
  console.log("All contracts verification process completed!");
  console.log("\nDeployed Contract Addresses:");
  for (const [contractName, contractInfo] of Object.entries(deployedContracts)) {
    console.log(`${contractName}: ${contractInfo.address}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
