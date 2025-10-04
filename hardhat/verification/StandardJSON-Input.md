# 📋 Standard JSON Input for Manual Verification

## 🎯 **Select: "Via Standard Input JSON"**

### 📋 **Step-by-Step Process:**

#### **Step 1: Select "Via Standard Input JSON"**

#### **Step 2: Upload Standard JSON Input File**
Use the file: `PolygonZkEVMTimelock-StandardJSON.json`

#### **Step 3: Constructor Arguments**
```json
[0,["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7","0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]
```

#### **Step 4: Compiler Settings**
- **Solidity Version**: `0.8.20`
- **Optimization**: `false`
- **Runs**: `200`
- **EVM Version**: `paris`

### 🔧 **Alternative: Flattened Source Code**

Agar Standard JSON Input kaam nahi kare to:

#### **Select: "Via flattened source code"**

#### **Create Flattened Source:**
```bash
# Flatten the contract
npx hardhat flatten contracts/PolygonZkEVMTimelock.sol > PolygonZkEVMTimelock-flattened.sol
```

#### **Upload Flattened Source:**
1. Copy the flattened source code
2. Paste in the verification form
3. Provide constructor arguments
4. Set compiler version: `0.8.20`

### 📋 **Constructor Arguments for All Contracts:**

#### **PolygonZkEVMTimelock:**
```json
[0,["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],["0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7"],"0xaf2fB6b29468B5bd2cB9D3Bec0385Cd4fccfE9D7","0x67Eb0Ab3392B2ef973Bc4A719a92C156210cEbc5"]
```

#### **PolygonZkEVM:**
```json
["0xA9676618Fb23CE5c006b2E87dF98702Af3326b3A","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288",1,0]
```

#### **PolygonZkEVMGlobalExitRoot:**
```json
["0x0000000000000000000000000000000000000000","0xaE3Df5BDfE3A3A075b17fE190fCfE29699fc0288"]
```

#### **PolygonZkEVMBridge:**
```json
[]
```

#### **PolygonZkEVMGlobalExitRootL2:**
```json
["0x0000000000000000000000000000000000000000"]
```

### 🎯 **Recommended Approach:**

1. **First try**: "Via Standard Input JSON"
2. **If fails**: "Via flattened source code"
3. **Last resort**: "Via Sourcify"

### 📁 **Files Available:**
- `PolygonZkEVMTimelock-StandardJSON.json` - Standard JSON Input
- `contract5-PolygonZkEVMTimelock.json` - Contract details
- `MANUAL_VERIFICATION_FILES.md` - Complete guide

**🎉 Ready for manual verification!**
