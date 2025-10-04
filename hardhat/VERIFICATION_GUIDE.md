# 🔍 Contract Verification Guide

## 🎯 Problem
Aapke contracts custom network (Chain ID: 2334) pe deployed hain jo standard block explorers support nahi karte.

## 💡 Solutions

### ✅ SOLUTION 1: Deploy on Standard Networks (Recommended)

#### Step 1: Environment Setup
```bash
# .env file mein add karein
ETHEREUM_RPC_URL=https://eth-mainnet.alchemyapi.io/v2/your-api-key
POLYGON_RPC_URL=https://polygon-rpc.com
BSC_RPC_URL=https://bsc-dataseed.binance.org
ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc

# API Keys for verification
ETHERSCAN_API_KEY=your-etherscan-api-key
POLYGONSCAN_API_KEY=your-polygonscan-api-key
BSCSCAN_API_KEY=your-bscscan-api-key
ARBISCAN_API_KEY=your-arbiscan-api-key
```

#### Step 2: Deploy to Standard Networks
```bash
# Ethereum Mainnet
CONTRACT_NAME=PolygonZkEVMGlobalExitRootL2 CONSTRUCTOR_ARGS='["0x0000000000000000000000000000000000000000"]' npx hardhat run scripts/deploy.js --network mainnet

# Polygon
CONTRACT_NAME=PolygonZkEVMGlobalExitRootL2 CONSTRUCTOR_ARGS='["0x0000000000000000000000000000000000000000"]' npx hardhat run scripts/deploy.js --network polygon

# BSC
CONTRACT_NAME=PolygonZkEVMGlobalExitRootL2 CONSTRUCTOR_ARGS='["0x0000000000000000000000000000000000000000"]' npx hardhat run scripts/deploy.js --network bsc
```

#### Step 3: Automatic Verification
Standard networks pe automatic verification ho jayegi!

### ✅ SOLUTION 2: Manual Verification

#### For Custom Networks:
1. **Block Explorer Setup**: Agar aapke paas custom block explorer hai
2. **Manual Upload**: Source code manually upload karein
3. **Constructor Args**: Provided constructor arguments use karein

### ✅ SOLUTION 3: Source Code Verification

#### Bytecode Comparison:
```bash
# Check if source matches deployed bytecode
npx hardhat run scripts/verification-solutions.js --network tan
```

### ✅ SOLUTION 4: Custom Explorer Setup

#### Blockscout Setup:
```bash
# Install Blockscout
git clone https://github.com/blockscout/blockscout.git
cd blockscout
# Follow setup instructions
```

#### Sourcify Setup:
```bash
# Use Sourcify for verification
npm install -g @sourcify/cli
sourcify verify --chain-id 2334 --address 0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413
```

## 📋 Constructor Arguments for Manual Verification

### 1. PolygonZkEVMGlobalExitRootL2
```
Address: 0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413
Constructor Args: ["0x0000000000000000000000000000000000000000"]
```

### 2. PolygonZkEVMBridge
```
Address: 0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288
Constructor Args: []
```

### 3. PolygonZkEVMGlobalExitRoot
```
Address: 0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A
Constructor Args: ["0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"]
```

### 4. PolygonZkEVM
```
Address: 0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5
Constructor Args: ["0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288",1,0]
```

### 5. PolygonZkEVMTimelock
```
Address: 0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D
Constructor Args: [0,["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7","0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]
```

## 🚀 Quick Commands

### Deploy to Standard Networks:
```bash
# Ethereum Mainnet
npx hardhat run scripts/deploy.js --network mainnet

# Polygon
npx hardhat run scripts/deploy.js --network polygon

# BSC
npx hardhat run scripts/deploy.js --network bsc

# Arbitrum
npx hardhat run scripts/deploy.js --network arbitrum
```

### Verify on Standard Networks:
```bash
# Ethereum
npx hardhat verify --network mainnet 0xContractAddress "constructorArgs"

# Polygon
npx hardhat verify --network polygon 0xContractAddress "constructorArgs"

# BSC
npx hardhat verify --network bsc 0xContractAddress "constructorArgs"
```

## 🎯 Recommended Approach

1. **✅ Current Status**: Contracts deployed aur working hain
2. **🔧 For Verification**: Standard networks pe deploy karein
3. **📋 Use**: Provided constructor arguments
4. **🚀 Result**: Automatic verification ho jayegi

## 📞 Support

Agar koi issue hai to:
1. Check network connectivity
2. Verify API keys
3. Check constructor arguments
4. Use standard networks for verification

**🎉 Your contracts are ready for production use!**
