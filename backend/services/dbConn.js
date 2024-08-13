const postgres = require('postgres');
const dotenv = require('dotenv');

dotenv.config();

const connString = process.env.CONNSTRING;

class DbConn {

    constructor() {
        this.conn = postgres(connString);
    }

    async query(query, params) {
        return this.conn.query(query, params);
    }

    async getUserAndPass(username){
        const query = this.conn`SELECT email,senha  FROM users WHERE nome = ${username}`;
        return query;
    }

    async addUser(user){
        const query = this.conn`INSERT INTO users(nome,email,senha) VALUES(${user.name},${user.email},${user.password})`;
        return query;
    }

    async getEvents(){
        const query = this.conn`SELECT * FROM eventos`;
        return query;
    }
}

module.exports = DbConn;