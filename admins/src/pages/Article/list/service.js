/*
 * @Author: your name
 * @Date: 2020-12-07 10:58:50
 * @LastEditTime: 2020-12-07 10:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\pages\Article\list\service.js
 */
import request from '@/utils/request';

export async function queryRule(params) {
    return request('/tour/article/list', {
        params,
    });
}