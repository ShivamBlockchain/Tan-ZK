# 📋 Manual Verification Files

## 🎯 Complete Contract Information for Manual Verification

### 📁 **File Structure for Manual Verification:**
```
contracts/
├── PolygonZkEVMGlobalExitRootL2.sol
├── PolygonZkEVMBridge.sol  
├── PolygonZkEVMGlobalExitRoot.sol
├── PolygonZkEVM.sol
├── PolygonZkEVMTimelock.sol
├── interfaces/
│   ├── IBasePolygonZkEVMGlobalExitRoot.sol
│   ├── IBridgeMessageReceiver.sol
│   ├── IPolygonZkEVMBridge.sol
│   ├── IPolygonZkEVMErrors.sol
│   ├── IPolygonZkEVMGlobalExitRoot.sol
│   └── IVerifierRollup.sol
└── lib/
    ├── DepositContract.sol
    ├── EmergencyManager.sol
    ├── GlobalExitRootLib.sol
    └── TokenWrapped.sol
```

---

## 🔍 **Contract 1: PolygonZkEVMGlobalExitRootL2**

### **Contract Details:**
- **Address**: `0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413`
- **Solidity Version**: `0.8.20`
- **Compiler**: `solc`
- **Constructor Arguments**: `["0x0000000000000000000000000000000000000000"]`

### **Source Files Required:**
1. `contracts/PolygonZkEVMGlobalExitRootL2.sol`
2. `contracts/interfaces/IBasePolygonZkEVMGlobalExitRoot.sol`

### **Constructor Arguments (JSON):**
```json
["0x0000000000000000000000000000000000000000"]
```

---

## 🔍 **Contract 2: PolygonZkEVMBridge**

### **Contract Details:**
- **Address**: `0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288`
- **Solidity Version**: `0.8.20`
- **Compiler**: `solc`
- **Constructor Arguments**: `[]` (No constructor arguments)

### **Source Files Required:**
1. `contracts/PolygonZkEVMBridge.sol`
2. `contracts/lib/DepositContract.sol`
3. `contracts/lib/TokenWrapped.sol`
4. `contracts/lib/EmergencyManager.sol`
5. `contracts/lib/GlobalExitRootLib.sol`
6. `contracts/interfaces/IBasePolygonZkEVMGlobalExitRoot.sol`
7. `contracts/interfaces/IBridgeMessageReceiver.sol`
8. `contracts/interfaces/IPolygonZkEVMBridge.sol`

### **Constructor Arguments (JSON):**
```json
[]
```

---

## 🔍 **Contract 3: PolygonZkEVMGlobalExitRoot**

### **Contract Details:**
- **Address**: `0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A`
- **Solidity Version**: `0.8.20`
- **Compiler**: `solc`
- **Constructor Arguments**: `["0x0000000000000000000000000000000000000000", "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"]`

### **Source Files Required:**
1. `contracts/PolygonZkEVMGlobalExitRoot.sol`
2. `contracts/interfaces/IPolygonZkEVMGlobalExitRoot.sol`
3. `contracts/lib/GlobalExitRootLib.sol`

### **Constructor Arguments (JSON):**
```json
["0x0000000000000000000000000000000000000000", "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"]
```

---

## 🔍 **Contract 4: PolygonZkEVM**

### **Contract Details:**
- **Address**: `0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5`
- **Solidity Version**: `0.8.20`
- **Compiler**: `solc`
- **Constructor Arguments**: `["0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288", 1, 0]`

### **Source Files Required:**
1. `contracts/PolygonZkEVM.sol`
2. `contracts/interfaces/IVerifierRollup.sol`
3. `contracts/interfaces/IPolygonZkEVMGlobalExitRoot.sol`
4. `contracts/interfaces/IPolygonZkEVMBridge.sol`
5. `contracts/interfaces/IPolygonZkEVMErrors.sol`
6. `contracts/lib/EmergencyManager.sol`

### **Constructor Arguments (JSON):**
```json
["0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288", 1, 0]
```

---

## 🔍 **Contract 5: PolygonZkEVMTimelock**

### **Contract Details:**
- **Address**: `0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D`
- **Solidity Version**: `0.8.20`
- **Compiler**: `solc`
- **Constructor Arguments**: `[0, ["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"], ["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"], "0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7", "0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]`

### **Source Files Required:**
1. `contracts/PolygonZkEVMTimelock.sol`
2. `contracts/PolygonZkEVM.sol` (dependency)

### **Constructor Arguments (JSON):**
```json
[0, ["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"], ["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"], "0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7", "0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]
```

---

## 📋 **Manual Verification Steps:**

### **Step 1: Prepare Files**
1. Copy all source files to a folder
2. Ensure all imports are correct
3. Check Solidity version (0.8.20)

### **Step 2: Block Explorer Verification**
1. Go to your block explorer
2. Search for contract address
3. Click "Verify Contract"
4. Select "Solidity (Single file)" or "Solidity (Standard JSON Input)"
5. Upload source code
6. Provide constructor arguments
7. Submit for verification

### **Step 3: Verification Parameters**
- **Compiler Version**: `0.8.20`
- **Optimization**: `false` (or as per your compilation)
- **Runs**: `200` (or as per your compilation)

---

## 🎯 **Quick Reference:**

| Contract | Address | Constructor Args |
|----------|---------|------------------|
| PolygonZkEVMGlobalExitRootL2 | `0x43d0bD3F8DE7Bc9a2A23b9c8b7f47bD2cAd15413` | `["0x0000000000000000000000000000000000000000"]` |
| PolygonZkEVMBridge | `0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288` | `[]` |
| PolygonZkEVMGlobalExitRoot | `0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A` | `["0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"]` |
| PolygonZkEVM | `0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5` | `["0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288",1,0]` |
| PolygonZkEVMTimelock | `0x0C4cecf61ff703b7cD84679016dacCb0Ac7d6D8D` | `[0,["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7","0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]` |

**🎉 All information ready for manual verification!**
