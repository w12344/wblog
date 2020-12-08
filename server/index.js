/*
 * @Author: your name
 * @Date: 2020-11-27 16:49:49
 * @LastEditTime: 2020-12-08 16:20:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\index.js
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const verify = require('./utils/verify')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, HEAD');
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.all("*", (req, res, next) => {
//     let token = req.headers.token;
//     let userinfo = verify.getToken(token);
//     if (!userinfo && req.path != '/tour/user/login') {
//         return res.json({
//             code: 1,
//             msg: 'token无效'
//         })
//     }
//     next()
// })

app.use('/tour/banner', require(__dirname + '/module/banner'));
app.use('/tour/menu', require(__dirname + '/module/menu'));
app.use('/tour/user', require(__dirname + '/module/user'));
app.use('/tour/article', require(__dirname + '/module/article'));


app.listen(8091, () => {
    console.log('express listen port 8091');
});