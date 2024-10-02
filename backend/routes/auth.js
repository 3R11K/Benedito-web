const express = require('express');
const DbConn = require('../services/dbConn');
const Encrypt = require('../services/encrypt');
const GenTokens = require('../services/token');
const router = express.Router();
const cookieParser = require('cookie-parser');


const googleUsers = process.env.GOOGLE_USERS_CHECK;

const db = new DbConn();
const genTokens = new GenTokens();
const encrypt = new Encrypt();

router.post("/reg-google", async (req, res) => {
    const {email, name} = req.body;
    console.log("body: ", req.body);
    console.log("email: ", email);
    console.log("name: ", name);

    const user = await db.getUser(email);
    if(user){
        console.log("user: ", user);
        const accessToken = await genTokens.newAccessToken(user);
        //devolver como um token como cookie para ser enviado no header da requisição
        res.json({"accessToken":accessToken,message: "Success"});
    }else{
        const newUser = {
            name: name,
            email: email,
            password: await encrypt.encrypt(googleUsers)
        }
        await db.addUser(newUser);
        const user = await db.getUser(email);
        console.log("user: ", user);
        const accessToken = genTokens.newAccessToken(user);
        res.json({"accessToken":accessToken, message: "Success"});
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
        const accessToken = genTokens.newAccessToken(user);
        res.cookie(
            "accessToken",accessToken,
            {
                httpOnly: true,
                sameSite: "None",
                secure: true,
                maxAge:2*24*60*60*1000
            }
        )
    }
});

router.post("/login", async (req, res) => {
    const {email, senha} = req.body;
    const user = await DbConn.getUserAndPass(email);
    if(user){
        if(encrypt.decrypt(user.senha) === senha){
            if(user.password === googleUsers){
                res.json({"error": "Usuário registrado com o Google, faça login com o Google ou mude a senha"});
            }
            const accessToken = genTokens.newAccessToken(user);
            res.cookie(
                "accessToken",accessToken,
                {
                    httpOnly: true,
                    sameSite: "None",
                    secure: true,
                    maxAge:2*24*60*60*1000
                }
            );
        }else{
            res.json({error: "Senha incorreta"});
        }
    }else{
        res.json({error: "Usuário não encontrado"});
    }
});

router.get("/check" , async (req, res) => {
    const accessToken = req.cookies.accessToken;
    if(!accessToken){
        return res.json({error: "Usuário não logado"});
    }
    const user = genTokens.verifyAccessToken(accessToken);
    console.log("user: ", user);
    if(user){
        res.json({message: "Usuário logado"});
    }else{
        res.json({error: "Usuário não logado"});
    }
});

router.post("/verify", async (req, res) => {
    const accessToken = req.body.accessToken;
    console.log("accessToken: ", accessToken);
    const user = await genTokens.verifyToken(accessToken);
    console.log("user: ", user);
    if(user.cargo === db.adminRole){
        res.json({admin: true});
    }else{
        res.json({admin: false});
    }

});

module.exports = router;