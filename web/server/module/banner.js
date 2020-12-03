/*
 * @Author: your name
 * @Date: 2020-11-27 16:49:49
 * @LastEditTime: 2020-11-30 09:49:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\module\banner.js
 */

const express = require('express');
const router = express.Router();
const db = require('../helper/db');

router.get('/get', async(req, res) => {
    try {
        const bannerList = await db('select * from tour_banner');
        res.json({ code: 200, data: bannerList, errorMsg: null, success: true });
    } catch (e) {
        res.json({ code: 0, data: [], errorMsg: '获取数据失败', success: false });
    }
});

module.exports = router;