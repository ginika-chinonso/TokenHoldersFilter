import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    hardhat:{
      forking: {
        enabled: true,
        //@ts-ignore
        url: process.env.MAINNET
      }
    }
  }
};

export default config;
