import request from '@/utils/request'

// 用户信息
export const getUserAuth = (params)=>{
    return request('/v1/admin/auth',{params})
}