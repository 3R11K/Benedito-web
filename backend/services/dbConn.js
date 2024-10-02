const postgres = require('postgres');
const dotenv = require('dotenv');

dotenv.config();

const connString = process.env.CONNSTRING;
const userRole = process.env.USER_ROLE;
const adminRole = process.env.ADM_ROLE;

class DbConn {

    constructor() {
        this.conn = postgres(connString);
        this.userRole = userRole;
        this.adminRole = adminRole;
    }

    async query(query, params) {
        try {
            return await this.conn.query(query, params);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getUserAndPass(username){
        try {
            const query = this.conn`SELECT email,senha  FROM users WHERE nome = ${username}`;
            return await query;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async addUser(user) {
        if (!user.name || !user.email || !user.password) {
            throw new Error("Invalid user data");
        }
        try {
            const query = this.conn`INSERT INTO users(nome,email,senha, cargo_id) VALUES(${user.name},${user.email},${user.password}, ${this.userRole})`;
            return await query;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    

    async getEvents(){
        try {
            const query = this.conn`SELECT * FROM eventos`;
            return await query;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getEvent(id) {
        try {
            const query = this.conn`SELECT * FROM eventos WHERE id = ${id}`;
            return await query;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createEvent(event){
        try {
            let event_no_image = {
                titulo: event.titulo,
                data_inicio: event.data_inicio,
                data_fim: event.data_fim,
                duracao: event.duracao,
                local: event.local,
                palestrante: event.palestrante,
                sobre: event.sobre
            }

            console.log(event_no_image);
            const query = this.conn`INSERT INTO eventos (titulo, data_inicio, data_fim, duracao, local, palestrante, img, sobre) VALUES(${event.titulo}, ${event.data_inicio}, ${event.data_fim}, ${event.duracao}, ${event.local}, ${event.palestrante}, ${event.img}, ${event.sobre});`;
            return await query;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createIndication(indication){
        try {
            const query = this.conn`INSERT INTO indicacao (titulo, texto, user_id) VALUES(${indication.titulo}, ${indication.texto}, ${indication.user_id});`;
            return await query;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getUser(email) {
        try {
            const query = await this.conn`SELECT id, nome, email, cargo_id FROM users WHERE email = ${email}`;
            return query[0]; // Ensure that query is an array and return the first result.
        } catch (error) {
            console.error(error);
            throw error;
        }
    }    
}

module.exports = DbConn;
