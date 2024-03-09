// Install ethers.js if you haven't already: npm install --save ethers
import { ethers } from 'ethers';


// Initialize provider for Ethereum mainnet
const provider  = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/cf4bc7d418504b3d8b5df3e8d58589e5');

// Function to fetch and display the last block number
async function displayLastBlockNumber() {
    try {
        const blockNumber = await provider.getBlockNumber();
        document.getElementById('blockNumber').innerText = blockNumber.toString();
    } catch (error) {
        console.error('Error fetching block number:', error);
        document.getElementById('blockNumber').innerText = 'Error';
    }
}

// Call the function to display the last block number when the page loads
window.onload = () => {
    displayLastBlockNumber();
};
