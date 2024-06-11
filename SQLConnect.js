const mysql = require("mysql");
const MySQLObj = {
    host:"39.97.109.85",
    user:"root",
    password:"910403",
    database:"mpshop"
}

const pool = mysql.createPool(MySQLObj)

function SQLConnect(sql,arr,callback){
    pool.getConnection((err, connection) =>{
        if (err) {
            console.log(err);
            return;
        }
        connection.query(sql, arr, (err, result) => {
            //释放连接
            connection.release();
            if (err) {
                console.log(err);
                return;
            }
            callback(result);
        });
    })
}

module.exports = SQLConnect