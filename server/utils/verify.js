/*
 * @Author: your name
 * @Date: 2020-12-08 10:49:04
 * @LastEditTime: 2020-12-08 16:12:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\utils\verify.js
 */

// verify.js
const jwt = require('jsonwebtoken')
const setting = require('./setting')

const verify = {
    // 设置token
    setToken(data, _id) {
        let token = jwt.sign(
            // 存储数据，自定义
            { data, _id },
            // 密钥
            setting.token.signKey,
            // 过期时间
            { expiresIn: setting.token.signTime }
        )
        return token;
    },
    getToken(token) {
        // 判断token是否存在，这里是根据空格分割
        if (!token) {
            return null
        } else {
            // 解密token并返回数据
            let data = jwt.verify(token, setting.token.signKey);
            return data
        }
    }
}

module.exports = verify