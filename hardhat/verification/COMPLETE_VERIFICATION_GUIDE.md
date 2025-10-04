# 🔍 Complete Manual Verification Guide

## 🎯 **Solution for OpenZeppelin Import Error**

### ❌ **Problem:**
```
Source "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol" not found: File import callback not supported
```

### ✅ **Solution: Use Flattened Source Code**

## 📋 **Step-by-Step Verification Process:**

### **Step 1: Select Verification Method**
- **Select**: `"Via flattened source code"` ✅
- **Reason**: Flattened source includes all dependencies (OpenZeppelin contracts)

### **Step 2: Upload Flattened Source**
- **File**: `PolygonZkEVMTimelock-flattened.sol`
- **Location**: `/home/user/Desktop/mainnet/hardhat/verification/`
- **Content**: Complete flattened source with all dependencies

### **Step 3: Constructor Arguments**
```json
[0,["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7","0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]
```

### **Step 4: Compiler Settings**
- **Solidity Version**: `0.8.20`
- **Optimization**: `false`
- **Runs**: `200`
- **EVM Version**: `paris`

## 📁 **Files Available:**

### **For PolygonZkEVMTimelock:**
- ✅ `PolygonZkEVMTimelock-flattened.sol` - Complete flattened source
- ✅ Constructor arguments provided
- ✅ Compiler settings specified

### **For All Other Contracts:**
- ✅ `contract1-PolygonZkEVMGlobalExitRootL2.json`
- ✅ `contract2-PolygonZkEVMBridge.json`
- ✅ `contract3-PolygonZkEVMGlobalExitRoot.json`
- ✅ `contract4-PolygonZkEVM.json`
- ✅ `contract5-PolygonZkEVMTimelock.json`

## 🚀 **Quick Commands to Flatten Other Contracts:**

```bash
# Flatten all contracts
npx hardhat flatten contracts/PolygonZkEVMGlobalExitRootL2.sol > verification/PolygonZkEVMGlobalExitRootL2-flattened.sol
npx hardhat flatten contracts/PolygonZkEVMBridge.sol > verification/PolygonZkEVMBridge-flattened.sol
npx hardhat flatten contracts/PolygonZkEVMGlobalExitRoot.sol > verification/PolygonZkEVMGlobalExitRoot-flattened.sol
npx hardhat flatten contracts/PolygonZkEVM.sol > verification/PolygonZkEVM-flattened.sol
```

## 📋 **Constructor Arguments for All Contracts:**

### **1. PolygonZkEVMGlobalExitRootL2**
```json
["0x0000000000000000000000000000000000000000"]
```

### **2. PolygonZkEVMBridge**
```json
[]
```

### **3. PolygonZkEVMGlobalExitRoot**
```json
["0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"]
```

### **4. PolygonZkEVM**
```json
["0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288",1,0]
```

### **5. PolygonZkEVMTimelock**
```json
[0,["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7","0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]
```

## 🎯 **Recommended Approach:**

1. **Use "Via flattened source code"** for all contracts
2. **Upload flattened .sol files** (includes all dependencies)
3. **Provide constructor arguments** as JSON
4. **Set compiler version**: `0.8.20`
5. **Set optimization**: `false`

## ✅ **Why Flattened Source Works:**

- ✅ **Includes all dependencies** (OpenZeppelin, interfaces, libs)
- ✅ **No import issues** - everything in one file
- ✅ **Standard verification method** - widely supported
- ✅ **Complete source code** - all dependencies included

## 🎉 **Result:**

**All contracts can be verified using flattened source code!**

**Files ready for verification:**
- ✅ Flattened source files
- ✅ Constructor arguments
- ✅ Compiler settings
- ✅ Complete guide

**🎉 Ready for manual verification on any block explorer!**
