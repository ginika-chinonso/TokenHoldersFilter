import { ethers } from "hardhat";

async function main() {
  const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"

  const API = `https://api.ethplorer.io/getTopTokenHolders/${USDT}?apiKey=freekey&limit=10`

  console.log(API)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
