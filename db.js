import mysql from "mysql2";

//Mysql Database Connection;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_es6',
    port: 3306
});

export default db;