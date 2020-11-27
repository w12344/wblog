/*
 * @Author: WZQ
 * @Date: 2020-11-27 16:49:49
 * @LastEditTime: 2020-11-27 17:27:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\helper\db.js
 */

const mysql = require('mysql');

const db = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: 'admin',
    database: 'tour'
});
db.connect();

module.exports = (sql, callback) => {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};