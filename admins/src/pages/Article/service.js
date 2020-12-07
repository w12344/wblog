/*
 * @Author: your name
 * @Date: 2020-12-03 16:01:06
 * @LastEditTime: 2020-12-07 16:45:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\pages\permission\list\service.js
 */
import request from '@/utils/request';

export async function insetAricle(params) {
    return request('/tour/article/addArticle', {
        method: 'POST',
        data: {...params },
    });
}