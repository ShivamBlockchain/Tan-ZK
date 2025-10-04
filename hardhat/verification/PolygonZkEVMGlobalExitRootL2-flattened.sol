[dotenv@17.2.2] injecting env (2) from .env -- tip: 🔐 prevent committing .env to code: https://dotenvx.com/precommit
// Sources flattened with hardhat v2.26.3 https://hardhat.org

// SPDX-License-Identifier: AGPL-3.0

// File contracts/interfaces/IBasePolygonZkEVMGlobalExitRoot.sol

// Original license: SPDX_License_Identifier: AGPL-3.0

pragma solidity ^0.8.20;

interface IBasePolygonZkEVMGlobalExitRoot {
    /**
     * @dev Thrown when the caller is not the allowed contracts
     */
    error OnlyAllowedContracts();

    /**
     * @dev Thrown when the caller is not the coinbase neither the globalExitRootUpdater
     */
    error OnlyGlobalExitRootUpdater();

    /**
     * @dev Thrown when the caller is not the globalExitRootRemover
     */
    error OnlyGlobalExitRootRemover();

    /**
     * @dev Thrown when trying to insert a global exit root that is already set
     */
    error GlobalExitRootAlreadySet();

    /**
     * @dev Thrown when trying to remove more global exit roots thank inserted
     */
    error NotEnoughGlobalExitRootsInserted();

    /**
     * @dev Thrown when trying to remove a ger that is not the last one
     */
    error NotLastInsertedGlobalExitRoot();

    function updateExitRoot(bytes32 newRollupExitRoot) external;

    function globalExitRootMap(
        bytes32 globalExitRootNum
    ) external returns (uint256);
}


// File contracts/PolygonZkEVMGlobalExitRootL2.sol

// Original license: SPDX_License_Identifier: AGPL-3.0

pragma solidity 0.8.20;

/**
 * Contract responsible for managing the exit roots for the L2 and global exit roots
 * The special zkRom variables will be accessed and updated directly by the zkRom
 */
contract PolygonZkEVMGlobalExitRootL2 is IBasePolygonZkEVMGlobalExitRoot {
    /////////////////////////////
    // Special zkRom variables
    ////////////////////////////

    // Store every global exit root: Root --> timestamp
    // Note this variable is updated only by the zkRom
    mapping(bytes32 => uint256) public globalExitRootMap;

    // Rollup exit root will be updated for every PolygonZkEVMBridge call
    // Note this variable will be readed by the zkRom
    bytes32 public lastRollupExitRoot;

    ////////////////////
    // Regular variables
    ///////////////////

    // PolygonZkEVM Bridge address
    address public immutable bridgeAddress;

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     */
    uint256[50] private _gap;

    /**
     * @param _bridgeAddress PolygonZkEVMBridge contract address
     */
    constructor(address _bridgeAddress) {
        bridgeAddress = _bridgeAddress;
    }

    /**
     * @notice Update the exit root of one of the networks and the global exit root
     * @param newRoot new exit tree root
     */
    function updateExitRoot(bytes32 newRoot) external {
        if (msg.sender != bridgeAddress) {
            revert OnlyAllowedContracts();
        }

        lastRollupExitRoot = newRoot;
    }
}
