const crypto = require('crypto');
const key = Buffer.from(process.env.SECRET, 'hex');
const iv = crypto.randomBytes(16); // Initialization vector

class Encrypt {
    constructor() {
        this.key = key;
        this.iv = iv;
    }

    async encrypt(text) {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    async decrypt(text) {
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv);
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

module.exports = Encrypt;