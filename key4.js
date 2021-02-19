var Bitcore = require('bitcore-lib');
var EthUtil = require('ethereumjs-util');

// Generate secp256k1 key pair
var privKey = Bitcore.PrivateKey();
var pubKey = privKey.toPublicKey();

// Generate keccak256 hash(20 bytes)
var addressHash = EthUtil.pubToAddress(pubKey.toBuffer(), true);

// Generate ethereum address
var etherAddress = '0x' + addressHash.toString('hex')
console.log(etherAddress);

// EIP-55's cheksum address
// Convert checksum address
etherAddress = EthUtil.toChecksumAddress(etherAddress);

// Check ethereum address validity
if (EthUtil.isValidAddress(etherAddress) === false) {
				console.log('This is not correct ethereum address!');
}

// Check ethereum cheksum address vailidity
if (EthUtil.isValidChecksumAddress(etherAddress) === false) {
				console.log('This is not correct ethereum cheksum address!');
}

console.log('This is correct ethereum address & checksum address!');


