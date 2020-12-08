/*
 * @Author: your name
 * @Date: 2020-12-08 10:46:50
 * @LastEditTime: 2020-12-08 10:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\setting.js
 */

module.exports = {
    token: {
        // token密钥
        signKey: 'blog_globM_token_key_$$$$',
        // 过期时间
        signTime: 3600 * 24 * 3,
        // 请求头参数
        header: 'authorization',
        // 不用校验的路由
        unRoute: [
            { url: '/login', methods: ['POST'] },
            { url: '/register', methods: ['POST'] }
        ]
    }
}