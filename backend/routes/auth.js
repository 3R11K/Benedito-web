const express = require('express');
const DbConn = require('../services/dbConn');
const encrypt = require('../services/encrypt');
const GenTokens = require('../services/token');
const router = express.Router();

const googleUsers = process.env.GOOGLE_USERS_CHECK;

router.post("/reg-google", async (req, res) => {
    const {email, name} = req.body;

    const user = await DbConn.getUser(email);
    if(user){
        const accessToken = GenTokens.newAccessToken(user);
        res.json({accessToken});
    }else{
        const newUser = {
            nome: name,
            email: email,
            senha: encrypt.encrypt(googleUsers)
        }
        await DbConn.addUser(newUser);
        const user = await DbConn.getUser(email);
        const accessToken = GenTokens.newAccessToken(user);
        res.json({accessToken});
    }
});

router.post("/reg", async (req, res) => {
    const {email, name, senha} = req.body;
    const user = await DbConn.getUser(email);
    if(user){
        res.json({error: "Usuário já registrado"});
    }else{
        const newUser = {
            nome: name,
            email: email,
            senha: encrypt.encrypt(senha)
        }
        await DbConn.addUser(newUser);
        const user = await DbConn.getUser(email);
        const accessToken = GenTokens.newAccessToken(user);
        res.json({accessToken});
    }
});

router.post("/login", async (req, res) => {
    const {email, senha} = req.body;
    const user = await DbConn.getUserAndPass(email);
    if(user){
        if(encrypt.decrypt(user.senha) === senha){
            if(user.password === googleUsers){
                res.json({error: "Usuário registrado com o Google, faça login com o Google ou mudar a senha"});
            }
            const accessToken = GenTokens.newAccessToken(user);
            res.json({accessToken});
        }else{
            res.json({error: "Senha incorreta"});
        }
    }else{
        res.json({error: "Usuário não encontrado"});
    }
});

module.exports = router;