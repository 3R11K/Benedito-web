import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const connString = process.env.CONNSTRING;

class DbConn {
    conn: any;

    constructor() {
        this.conn = postgres(connString);
    }

    async query(query, params) {
        return this.conn(query, params);
    }

    async getUserAndPass(username){
        const query = `SELECT email,senha  FROM users WHERE nome = $1`;
        return this.conn(query, username);
    }

    async addUser(user){
        const query = `INSERT INTO users(nome,email,senha) VALUES($1,$2,$3)`;
        return this.conn(query, user);
    }
}

module.exports = DbConn;