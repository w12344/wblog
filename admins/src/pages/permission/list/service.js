/*
 * @Author: your name
 * @Date: 2020-12-03 16:01:06
 * @LastEditTime: 2020-12-03 16:35:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\pages\permission\list\service.js
 */
import request from '@/utils/request';

export async function queryRule(params) {
    return request('/tour/user/list', {
        params,
    });
}
export async function removeRule(params) {
    return request('/api/rule', {
        method: 'POST',
        data: {...params, method: 'delete' },
    });
}
export async function addRule(params) {
    return request('/api/rule', {
        method: 'POST',
        data: {...params, method: 'post' },
    });
}
export async function updateRule(params) {
    return request('/api/rule', {
        method: 'POST',
        data: {...params, method: 'update' },
    });
}