import request from '@/utils/request'

// admin info
export const getAdminInfo = (params) => {
    return request('/v1/admin/auth', { params })
}
