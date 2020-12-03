/*
 * @Author: your name
 * @Date: 2020-11-30 09:48:22
 * @LastEditTime: 2020-12-01 18:57:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\module\menu.js
 */

const express = require('express');
const router = express.Router();
const db = require('../helper/db');

/**
 * 菜单信息列表
 */
router.get('/list', async(req, res) => {
    try {
        const menuData = await db('select * from tour_menu');
        res.json({ code: 200, data: menuData, errorMsg: null, success: true });
    } catch (e) {
        res.json({ code: 0, data: [], errorMsg: '获取数据失败', success: false });
    }
});



module.exports = router;