import mysql from "mysql2";
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'db_hw_week3',
        password: 'wldnjs12',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();
const sql = {
    getStudents : async () => {
        const [rows] = await promisePool.query(`
            SELECT * FROM student
        `)
        return rows
    },
}

module.exports = sql
