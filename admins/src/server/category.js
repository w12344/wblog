import request from '@/utils/request'

// 分类

export const gerCategoryList = (params) => {
    return request('/v1/category', { params })
}

// 创建
export const setCategory = (data) => {
    return request.post('/v1/category', { data })
}

// 查询详情
export const getCategoryInfo = (params) => {
    const { id } = params;
    return request('/v1/category/' + id)
}

// 更新
export const updateCategoryInfo = (data) => {
    const { id, name, key } = data;
    return request.put('/v1/category/' + id, { data: { name, key } })
}

// 删除
export const delCategory = (data) => {
    const { id } = data;
    return request.delete('/v1/category/' + id)
}