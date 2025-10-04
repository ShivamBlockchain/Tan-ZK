import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

dotenvConfig({ path: resolve(process.cwd(), ".env") });

const config = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.30",
      },
    ],
  },
  networks: {
    tan: {
      url: process.env.RPC || "http://127.0.0.1:8545",
      accounts: [process.env.PRIVATE_KEY], // must be an array
      chainId: 2334,
    },
    // Standard networks for verification
    mainnet: {
      url: process.env.ETHEREUM_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1,
    },
    polygon: {
      url: process.env.POLYGON_RPC_URL || "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137,
    },
    bsc: {
      url: process.env.BSC_RPC_URL || "https://bsc-dataseed.binance.org",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 56,
    },
    arbitrum: {
      url: process.env.ARBITRUM_RPC_URL || "https://arb1.arbitrum.io/rpc",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 42161,
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      arbitrum: process.env.ARBISCAN_API_KEY,
    },
    customChains: [
      {
        network: "tan",
        chainId: 2334,
        urls: {
          apiURL: "http://161.97.89.79/api", // Replace with actual explorer API
          browserURL: "http://161.97.89.79" // Replace with actual explorer URL
        }
      }
    ]
  },
};

export default config;
