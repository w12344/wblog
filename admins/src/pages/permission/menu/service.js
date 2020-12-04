/*
 * @Author: your name
 * @Date: 2020-12-03 16:01:06
 * @LastEditTime: 2020-12-04 14:40:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\pages\permission\list\service.js
 */
import request from '@/utils/request';

//添加菜单
export async function addMenu(params) {
    return request('/tour/menu/addMenu', {
        method: 'POST',
        data: {...params },
    });
}


//菜单列表
export async function queryMenuList(params) {
    return request('/tour/menu/list', {
        params
    });
}

//删除菜单
export async function deleteMenu(params) {
    return request('/tour/menu/deleteMenu', {
        method: 'POST',
        data: {...params },
    });
}