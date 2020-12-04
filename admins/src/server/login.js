import request from '@/utils/request'

// 登录

export const UserLogin = (data)=>{
    return request.post('/v1/admin/login',{data})
}