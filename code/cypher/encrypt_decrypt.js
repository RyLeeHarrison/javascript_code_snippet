const crypto = require('crypto');

const algorithm      = 'aes192';
const theKey         = 'password';

const cipher   = crypto.createCipher(algorithm, theKey);
const decipher = crypto.createDecipher(algorithm, theKey);

const inputEncoding  = 'utf8';
const outputEncoding = 'hex';

function encrypt(text) {
    let encrypted = cipher.update(text, inputEncoding, outputEncoding);
    encrypted += cipher.final('hex');

    return encrypted;
}

function decrypt(encrypted_text) {
    let decrypted = decipher.update(encrypted_text, outputEncoding, inputEncoding);
    decrypted += decipher.final(inputEncoding);

    return decrypted;
}

const plaintext = 'Hello world';
console.log("PLAIN TEXT: " + plaintext);
// ==> PLAIN TEXT: Hello world

const encrypted_plaintext = encrypt(plaintext)
console.log("encrypted: " + encrypted_plaintext);
// ==> encrypted: 028d5dc7fbae682d276dc9359155a2f0

const encrypted_plaintext_decrypted = decrypt(encrypted_plaintext)
console.log("decrypted: " + encrypted_plaintext_decrypted);
// ==> decrypted: Hello world
