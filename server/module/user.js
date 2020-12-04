/**
 * 用户相关
 * @author: zhaoyiming
 * @since:  2017/9/29
 * @update: 2019/9/13
 */
const express = require('express');
const router = express.Router();
const db = require('../helper/db');
const multer = require('../helper/multer');
// const { putFile } = require('../helper/qiniu-oss');


//获取用会列表
router.get('/list', async(req, res, next) => {
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
        const data = await db(`SELECT * FROM tour_user limit ${(current_page -1)*pageSize},${pageSize}`);
        if (!data[0]) {
            res.json({ code: 200, data: [], errorMsg: '已到最后一页,请返回', success: true });
        } else {
            res.json({
                code: 200,
                last_page: last_page,
                next_page: next_page,
                current_page: current_page,
                data: data,
                success: true
            });
        }
    } catch (e) {
        res.json({ code: 0, data: [], errorMsg: '数据查询有误', success: false });
    }
});


/**
 * 注册
 */
router.post('/register', async(req, res) => {
    let _user = req.body;
    let { username, password, telphone } = _user;
    if (!username || !password || !telphone) {
        res.json({ code: -1, data: null, message: '参数有误' });
    }
    try {
        const data = await db(`select * from tour_user where username=${username}`);
        if (data.length !== 0) {
            res.json({ code: 200, data: [], errorMsg: '该用户已注册,请直接登录', success: false });
        } else {
            const interinfo = await db(`insert into tour_user (id,username,password,telphone) VALUES (0,${username},${password},${telphone})`);
            res.json({ code: 200, errorMsg: '注册成功', success: true });
        }
    } catch (e) {
        res.json({ code: 0, data: [], errorMsg: '获取数据失败', success: false });
    }
});

/**
 * 注册
 */
router.post('/list', async(req, res) => {
    let _user = req.body;
    let { username, password, telphone } = _user;
    if (!username || !password || !telphone) {
        res.json({ code: -1, data: null, message: '参数有误' });
    }
    try {
        const data = await db(`select * from tour_user where username=${username}`);
        if (data.length !== 0) {
            res.json({ code: 200, data: [], errorMsg: '该用户已注册,请直接登录', success: false });
        } else {
            const interinfo = await db(`insert into tour_user (id,username,password,telphone) VALUES (0,${username},${password},${telphone})`);
            res.json({ code: 200, errorMsg: '注册成功', success: true });
        }
    } catch (e) {
        res.json({ code: 0, data: [], errorMsg: '获取数据失败', success: false });
    }
});

/**
 * 登录
 */
router.post('/login', async(req, res) => {
    let _user = req.body;
    let { username, password, telphone } = _user;
    if (!username || !password) {
        res.json({ code: -1, data: null, message: '参数有误' });
    }
    try {
        const data = await db(`select * from tour_user where username =${username} and password=${password}`);
        if (!data.length) {
            res.json({ code: 200, data: [], errorMsg: '账号或密码错误', success: false });
        } else {
            res.json({ code: 200, data: data[0], errorMsg: '登录成功', success: true });
        }
    } catch (e) {
        res.json({ code: 0, data: [], errorMsg: '获取数据失败', success: false });
    }
});


/**
 * 获取用户基本信息
 */

router.get('/info', async(req, res) => {
    try {
        const { id } = req.query;
        const [data] = await db('select * from tour_user where id="' + id + '"');
        if (data) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '用户不存在' });
        }
    } catch (e) {
        res.json({ code: -1, data: null, message: e });
    }
});

// /**
//  * 修改头像
//  */
// router.post('/changeUserHeadpic', multer.array('file'), async(req, res) => {
//     try {
//         const cwd = process.cwd();
//         const file = req.files[0];
//         const userId = req.body.id;
//         const filePath = `${cwd}/tmp/${file.filename}`;
//         const fileUrl = await putFile(filePath);
//         const data = await db('update tour_user set user_headpic="' + fileUrl + '" where id="' + userId + '"');
//         if (data) {
//             // 后期要换成oss地址
//             res.json({ code: 0, data: fileUrl, message: 0 });
//         } else {
//             res.json({ code: -1, data: null, message: '修改修改失败，请重新操作' });
//         }
//     } catch (e) {
//         res.json({ code: -1, data: null, message: e });
//     }
// });

/*
 * 修改用户名
 */
router.post('/changeUserName', async(req, res) => {
    try {
        const msg = req.body;
        const userId = msg.userId;
        const userName = msg.userName;
        const data = await db('update tour_user set user_name="' + userName + '" where id="' + userId + '"');
        if (data) {
            res.json({ code: 0, data: null, message: '修改成功' });
        } else {
            res.json({ code: -1, data: null, message: '用户名修改失败，请重新操作' });
        }
    } catch (e) {
        res.json({ code: -1, data: null, message: e });
    }
});

/*
 * 修改性别
 */
router.post('/changeUserSex', async(req, res) => {
    try {
        const msg = req.body;
        const userId = msg.userId;
        const sex = msg.sex;
        const data = db('update tour_user set user_sex="' + sex + '" where id="' + userId + '"');
        if (data) {
            res.json({ code: 0, data: null, message: '修改成功' });
        } else {
            res.json({ code: -1, data: null, message: error });
        }
    } catch (e) {
        res.json({ code: -1, data: null, message: e });
    }
});

/**
 * 重置密码
 */
router.post('/resetPassword', async(req, res) => {
    try {
        const md5 = crypto.createHash('md5');
        const msg = req.body;
        const phone = msg.phone;
        const pwd = md5.update(msg.pwd).digest('hex');
        const data = await db('update tour_user set user_pwd="' + pwd + '" where user_phone="' + phone + '"');
        if (data) res.json({ code: 0, data: null, message: '' });
        else res.json({ code: -1, data: null, message: '密码重置失败，请重新操作' });
    } catch (e) {
        res.json({ code: -1, data: null, message: e });
    }
});

module.exports = router;