var abi = require('ethereumjs-abi')

var parameterTypes = ["address"];
var parameterValues = ["0x745792e0da578acd32d85e275031837ce0a9916f"];

var encoded = abi.rawEncode(parameterTypes, parameterValues);

console.log(encoded.toString('hex'));

