const crypto = require('crypto');
console.log(crypto.randomBytes(256).toString('base64'));


// this file is used to create jwt tokens and verify them