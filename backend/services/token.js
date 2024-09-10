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
        return jwt.sign({id: user.id, nome: user.nome}, this.secret, {expiresIn: '2d'});
    }

    async verifyToken(token, name, id){
        return jwt.verify(token, this.secret, (err, decoded) => {
            if(err){
                return false;
            }
            else{
                if(decoded.nome === name && decoded.id == id){
                    return true;
                }
                else{
                    return false;
                }
            }
        });
        
    }


}

module.exports = GenTokens;