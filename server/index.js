/*
 * @Author: your name
 * @Date: 2020-11-27 16:49:49
 * @LastEditTime: 2020-11-27 18:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\index.js
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, HEAD');
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tour/banner', require(__dirname + '/module/banner'));


app.listen(8091, () => {
    console.log('express listen port 8091');
});