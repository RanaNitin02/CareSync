const crypto = require('crypto');
console.log(crypto.randomBytes(256).toString('base64'));