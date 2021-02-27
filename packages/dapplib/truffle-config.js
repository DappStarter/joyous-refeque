require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rice night smile imitate private equal gentle'; 
let testAccounts = [
"0x1ae006ade3920385ed4eb654841c8eccf318b5ebb842b014fdba9c2164c633f8",
"0x626590119fed5d3e961e700be3f4c356ddec12f8bae8abfbb05a8604da13be24",
"0x4aea5c8efe0651ad92b89b5bc43f9ce001f9553149b52877703b7b74462e756c",
"0xe929739799d3bc5ae2d16d005ff26ddf07bf68e0a9b6a640ced35f552debefae",
"0x7b589bca766ad0a5007a7078c49e056698878a882657e2d743253ddc7a69fe4e",
"0x1ab5ca886595f30acef699f282ccedcaca8704d6f31be19bd02774517d25ab00",
"0x26d0187e5038e477063a43312af200d8be8a0595bb9beee36ce979437fd9f6fd",
"0x78bef679699765d81b9b9fdb3bd49b65b0a65bd991555d18013142b486cc1aa9",
"0x3ba7780320cb426975606f41497c772d638acd651694f77b0bdad1447863e0ca",
"0xd4c28e62d73faac7ae9d9231ae705daf1feefa394197cb608425ec0c2a551c5f"
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
            version: '^0.5.11'
        }
    }
};
