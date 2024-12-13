import Web3 from 'web3';

import DataSharingContract from './DataSharingContract.json';
import ECRingSignature from './ECRingSignature.json';
import ECSecp256k1 from './ECSecp256k1.json';
import EllipticCurveLib from './EllipticCurveLib.json';
import IdentityKeyContract from './IdentityKeyContract.json';
import ProxyContract from './ProxyContract.json';

// Set up Web3 and the provider (MetaMask or Ganache)
const web3 = new Web3(window.ethereum);

// Replace with deployed addresses of your contracts
const dataSharingContractAddress = '0x25805556f1A3dcA7400D5f799262b6e283A73391';
const ecringSignatureAddress = ' 0x035A9A6e107BF4b70D64Be32D22232207eA4DF65';
const ecsSecp256k1Address = '0x2049EA919Baa0244bB6051241d118a8d3f25a753';
const ellipticCurveLibAddress = '0x65960C7ea3541514ce1aCE9b3a7fbecb81AbC469';
const identityKeyContractAddress = '0x6274BFd462b83C62eEdbdC9B9beF2cae7DC1BEC9'
const proxyContractAddress = ' 0xecf12BAB303BdE62D02d906f41A62075fa046741';

// Initialize contract instances
const dataSharingContract = new web3.eth.Contract(DataSharingContract.abi, dataSharingContractAddress);
const ecringSignatureContract = new web3.eth.Contract(ECRingSignature.abi, ecringSignatureAddress);
const ecsSecp256k1Contract = new web3.eth.Contract(ECSecp256k1.abi, ecsSecp256k1Address);
const ellipticCurveLibContract = new web3.eth.Contract(EllipticCurveLib.abi, ellipticCurveLibAddress);
const identityKeyContract = new web3.eth.Contract(IdentityKeyContract.abi, identityKeyContractAddress);
const proxyContract = new web3.eth.Contract(ProxyContract.abi, proxyContractAddress);

// Request account access
async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
}

// Get the user's current account
async function getAccount() {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
}

// Example: Call a method from the DataSharingContract
async function callDataSharingMethod(methodName, ...args) {
    const account = await getAccount();
    const result = await dataSharingContract.methods[methodName](...args).call({ from: account });
    return result;
}

// You can similarly implement methods for other contracts dynamically:
async function callMethod(contractInstance, methodName, ...args) {
    const account = await getAccount();
    const result = await contractInstance.methods[methodName](...args).call({ from: account });
    return result;
}

// Export all functions and contracts
export {
    requestAccount,
    getAccount,
    callDataSharingMethod,
    callMethod,
    dataSharingContract,
    ecringSignatureContract,
    ecsSecp256k1Contract,
    ellipticCurveLibContract,
    identityKeyContract,
    proxyContract
};
