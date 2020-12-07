/*
 * @Author: your name
 * @Date: 2020-11-27 16:49:49
 * @LastEditTime: 2020-12-07 17:05:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\server\module\article.js
 */

const express = require('express');
const router = express.Router();
const db = require('../helper/db');


//文章列表
router.get('/list', async(req, res) => {
    const { current, pageSize = 10, title } = req.query;
    if (current) {
        current_page = parseInt(current);
    }
    let last_page = current_page - 1;
    if (current_page <= 1) {
        last_page = 1;
    }
    let next_page = current_page + 1;
    const $query = `select * from tour_blog_content ${title ? 'where title =' + title: ' '}`;
    const $limit = `limit  ${(current_page -1)*pageSize},${pageSize}`;
    try {
        const articleList = await db($query + ' ' + $limit);
        res.json({
            code: 200,
            last_page: last_page,
            next_page: next_page,
            current_page: current_page,
            data: articleList,
            success: true
        });
    } catch (e) {
        res.json({ code: 500, data: [], errorMsg: "查询失败", message: e });
    }
});


/**
 * 新增文章
 */
router.post('/addArticle', async(req, res) => {
    const { title, introduction, content, tag, classify, img } = req.body;
    try {
        await db(`insert into tour_blog_content (id,title,introduction,content,tag,classify,img) VALUES (0,'${title}','${introduction}','${content}','${tag}','${classify}',${img?img:null})`);
        res.json({ code: 200, successMsg: '发表成功', success: true });
    } catch (e) {
        console.log(e)
        res.json({ code: 500, data: [], errorMsg: '新增失败', errorData: e, success: false });
    }
});
module.exports = router;