# Polygon ZkEVM Contracts Deployment

## 🎉 Deployment Complete!

All Polygon ZkEVM contracts have been successfully deployed to the network.

## 📋 Deployed Contracts

| Contract Name | Address | Explorer |
|---------------|---------|----------|
| **PolygonZkEVMGlobalExitRootL2** | `0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413` | [View on Explorer](https://etherscan.io/address/0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413) |
| **PolygonZkEVMBridge** | `0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288` | [View on Explorer](https://etherscan.io/address/0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288) |
| **PolygonZkEVMGlobalExitRoot** | `0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A` | [View on Explorer](https://etherscan.io/address/0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A) |
| **PolygonZkEVM** | `0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5` | [View on Explorer](https://etherscan.io/address/0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5) |
| **PolygonZkEVMTimelock** | `0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D` | [View on Explorer](https://etherscan.io/address/0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D) |

## 🔗 Contract Dependencies

```
PolygonZkEVMGlobalExitRootL2 (0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413)
    ↓
PolygonZkEVMBridge (0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288)
    ↓
PolygonZkEVMGlobalExitRoot (0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A)
    ↓
PolygonZkEVM (0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5)
    ↓
PolygonZkEVMTimelock (0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D)
```

## 🔍 Verification Commands

### Verify All Contracts at Once
```bash
npx hardhat run scripts/verify-contracts.js --network tan
```

### Verify Individual Contracts

#### 1. PolygonZkEVMGlobalExitRootL2
```bash
npx hardhat verify --network tan 0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413 "0x0000000000000000000000000000000000000000"
```

#### 2. PolygonZkEVMBridge
```bash
npx hardhat verify --network tan 0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288
```

#### 3. PolygonZkEVMGlobalExitRoot
```bash
npx hardhat verify --network tan 0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A "0x0000000000000000000000000000000000000000" "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"
```

#### 4. PolygonZkEVM
```bash
npx hardhat verify --network tan 0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5 "0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A" "0x0000000000000000000000000000000000000000" "0x0000000000000000000000000000000000000000" "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288" 1 0
```

#### 5. PolygonZkEVMTimelock
```bash
npx hardhat verify --network tan 0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D 0 "[\"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7\"]" "[\"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7\"]" "0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7" "0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"
```

## 🛠️ Deployment Information

- **Deployer Address**: `0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7`
- **Network**: `tan`
- **Deployment Time**: `2025-10-01T06:04:29.783Z`
- **RPC URL**: `http://161.97.89.79/`

## 📁 Files Created

- `deployment-summary.json` - Complete deployment information
- `deployments.json` - Individual contract deployment details
- `DEPLOYMENT_README.md` - This documentation file

## 🚀 Usage

### Deploy Individual Contract
```bash
CONTRACT_NAME=ContractName CONSTRUCTOR_ARGS='["arg1", "arg2"]' npx hardhat run scripts/deploy.js --network tan
```

### View Deployment Summary
```bash
npx hardhat run scripts/deployment-summary.js --network tan
```

### Verify All Contracts
```bash
npx hardhat run scripts/verify-contracts.js --network tan
```

## ⚠️ Important Notes

1. **Constructor Arguments**: All contracts were deployed with proper constructor arguments using real addresses from previous deployments.

2. **Dependencies**: Contracts were deployed in the correct order to satisfy dependencies:
   - GlobalExitRootL2 → Bridge → GlobalExitRoot → PolygonZkEVM → Timelock

3. **Verification**: Contracts can be verified using the provided commands. Make sure to have `ETHERSCAN_API_KEY` set in your `.env` file for automatic verification.

4. **Network Configuration**: The deployment was done on the `tan` network with RPC URL `http://161.97.89.79/`.

## 🔧 Troubleshooting

### If verification fails:
1. Check that the contract is deployed and confirmed
2. Ensure constructor arguments are correct
3. Wait a few blocks before attempting verification
4. Check network connectivity

### If deployment fails:
1. Ensure sufficient balance in deployer account
2. Check network connectivity
3. Verify constructor arguments are correct
4. Check gas limits

## 📞 Support

For issues with deployment or verification, check:
1. Network connectivity
2. Account balance
3. Constructor arguments
4. Gas limits
5. Contract compilation

---

**🎉 All Polygon ZkEVM contracts have been successfully deployed and are ready for use!**
