const crypt = require('crypto');

const key = process.env.SECRET;

class Encrypt {
    static encrypt(text){
        const cipher = crypt.createCipher('aes-256-cbc', key);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    static decrypt(text){
        const decipher = crypt.createDecipher('aes-256-cbc', key);
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

