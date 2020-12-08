/*
 * @Author: your name
 * @Date: 2020-12-03 15:12:42
 * @LastEditTime: 2020-12-08 09:45:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\services\login.js
 */
import request from '@/utils/request';

export async function fakeAccountLogin(params) {
    return request('/tour/user/login', {
        method: 'post',
        data: params,
    });
}
export async function getFakeCaptcha(mobile) {
    return request(`/api/login/captcha?mobile=${mobile}`);
}