/*
 * @Author: your name
 * @Date: 2020-11-30 09:48:22
 * @LastEditTime: 2020-12-04 14:58:12
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
    const { current, pageSize = 10 } = req.query;
    if (current) {
        current_page = parseInt(current);
    }
    let last_page = current_page - 1;
    if (current_page <= 1) {
        last_page = 1;
    }
    let next_page = current_page + 1;
    try {
        const menuData = await db(`select * from tour_menu limit ${(current_page -1)*pageSize},${pageSize}`);
        if (!menuData[0]) {
            res.json({ code: 200, data: [], errorMsg: '已到最后一页,请返回', success: true });
        } else {
            res.json({
                code: 200,
                last_page: last_page,
                next_page: next_page,
                current_page: current_page,
                data: menuData,
                success: true
            });
        }
    } catch (e) {
        res.json({ code: 0, data: [], errorMsg: '获取数据失败', success: false });
    }
});


/**
 * 新增菜单
 */
router.post('/addMenu', async(req, res) => {
    const { menuName, menuUrl, menuStatus, menuOrder, fileUrl, isHot } = req.body;
    try {
        await db(`insert into tour_menu (id,menuName,menuUrl,menuStatus,menuOrder,isHot,fileUrl) VALUES (0,'${menuName}',${menuUrl},${menuStatus},${menuOrder},${isHot},${fileUrl?fileUrl:null})`);
        res.json({ code: 200, successMsg: '添加成功', success: true });
    } catch (e) {
        res.json({ code: 500, data: [], errorMsg: '新增失败', success: false });
    }
});

/**
 * 删除菜单
 */
router.post('/deleteMenu', async(req, res) => {
    const { id } = req.body;
    try {
        await db(`DELETE FROM tour_menu WHERE id = ${id}`);
        res.json({ code: 200, successMsg: '删除成功', success: true });
    } catch (e) {
        res.json({ code: 500, data: [], errorMsg: '删除失败', success: false });
    }
});

module.exports = router;