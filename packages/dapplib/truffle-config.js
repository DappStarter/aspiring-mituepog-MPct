require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember pudding inner private foster term'; 
let testAccounts = [
"0x726d7764dad862f56f0f71ba965a6c08a3971363b2a23e6f4d4ac3501a89a584",
"0xdd69a421ac215bb5a95b381649e96dc3aed9b0744b37a272bcda3f59875aa45e",
"0xeb5a2a7ac63ed62c0715879c22d023e119a347ba89a4bd127e1777f7937a11bb",
"0x662560df6653efc8d943e250ee2823f5a41dd927a0e5c9ab14256f0ca43bb0bf",
"0x0b9330e7e7e37c8a3a13ca6f3d6a049dad933c798739d4689124c47c079803c5",
"0x422c507c24b14e9908f9cb6d5007eba9f29cf2a50b3d30257c9c08ed40aba231",
"0xb23521294a4781287532cec830f3e0028f109876c34a06f8c3d174f323bbd3ea",
"0xdc066597ad7c4ebbec9e5bb276c40c00f4da34d3761a0b848da42ca97e5be496",
"0xae41d0fa68ae03686b04cfbba4a0035aebb9add7e3695662038ec846dac424e1",
"0x398292e752513db8f2b8f293baae31af3ae8dbcbb8e5ff204451be55bb0eb5c9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

