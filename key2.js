var Bitcore = require('bitcore-lib');
var EthUtil = require('ethereumjs-util');

// Generate secp256k1 key pair
var privKey = Bitcore.PrivateKey();
var pubKey = privKey.toPublicKey();

console.log(privKey);
console.log(pubKey);

// Generate keccak256 hash(20 bytes)
var addressHash = EthUtil.pubToAddress(pubKey.toBuffer(), true);
console.log(addressHash);

// Generate ethereum address
var etherAddress = '0x' + addressHash.toString('hex')
console.log(etherAddress);

