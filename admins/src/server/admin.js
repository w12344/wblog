/*
 * @Author: your name
 * @Date: 2020-12-03 15:35:13
 * @LastEditTime: 2020-12-07 09:48:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\server\admin.js
 */
import request from '@/utils/request'

// admin info
export const getAdminInfo = (params) => {
    return request('/v1/admin/auth', { params })
}