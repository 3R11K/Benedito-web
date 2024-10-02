const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const bcrypt = require('bcrypt');
const { Interface } = require('readline');

require('dotenv').config();


class GenTokens{
    constructor(){
        this.secret = process.env.SECRET
    }
    async newAccessToken(user){
        return jwt.sign({id: user.id, nome: user.nome, cargo: user.cargo_id}, this.secret, {expiresIn: '2d'});
    }

    async verifyToken(token) {
        try {
            const user = jwt.verify(token, this.secret);
            return user;  // Retorna o usuário se a verificação for bem-sucedida
        } catch (err) {
            return false;  // Retorna false se houver erro na verificação
        }
    }    

}

module.exports = GenTokens;