import { ethers } from "hardhat";
import dotenv from "dotenv";

dotenv.config()

async function main() {
  const token = {"name": "USDT", "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7"};
  const _amount = 10
  const APIKEY = process.env.APIKEY;

  const API = `https://api.ethplorer.io/getTopTokenHolders/${token.address}?apiKey=${APIKEY}&limit=${_amount}`


  console.log(`The Top ${_amount} holders of ${token.name} are: `)

  fetch(API).then(res => res.json()).then(res => console.log(res.holders))


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
