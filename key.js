var Bitcore = require('bitcore-lib');

var privKey = Bitcore.PrivateKey();
console.log(privKey);

var pubKey = privKey.toPublicKey();
console.log(pubKey);

