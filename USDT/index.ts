import { ethers } from 'ethers';

// USDT Token Contract Address
const USDT_CONTRACT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7';

// ABI for USDT Token Contract
const USDT_ABI = [
    "function balanceOf(address owner) view returns (uint256)"
];

// Function to get USDT balance of an address
async function getUSDTBalance(address: string): Promise<string> {
    const provider = new ethers.providers.JsonRpcProvider(); // Replace this with your Ethereum provider
    const usdtContract = new ethers.Contract(USDT_CONTRACT_ADDRESS, USDT_ABI, provider);
    const balanceBigNumber = await usdtContract.balanceOf(address);
    return ethers.utils.formatUnits(balanceBigNumber, 6); // Assuming USDT has 6 decimal places
}

// Example usage
const address = '0x123abc...'; // Replace this with the address you want to check
getUSDTBalance(address)
    .then(balance => {
        console.log(`USDT Balance of ${address}: ${balance}`);
        // Display the balance on the webpage or perform any other action here
    })
    .catch(error => {
        console.error('Error fetching USDT balance:', error);
    });
