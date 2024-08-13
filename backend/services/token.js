const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const bcrypt = require('bcrypt');
const { Interface } = require('readline');

const secret = process.env.SECRET;


class GenTokens{
    static newAccessToken(user){
        return jwt.sign({id: user.id, nome: user.nome}, secret, {expiresIn: '2d'});
    }

    static verifyToken(token, name, id){
        return jwt.verify(token, secret, (err, decoded) => {
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