import request from '@/utils/request'

// 文章
export const gerArticleList = (params) => {
    return request('/v1/article', { params })
}

// 创建
export const setArticle = (data) => {
    return request.post('/v1/article', { data })
}

// 查询详情
export const getArticleInfo = (params) => {
    const { id } = params;
    return request('/v1/article/' + id)
}

// 更新
export const updateArticleInfo = (data) => {
    const { id } = data;
    return request.put('/v1/article/' + id, {data})
}

// 删除
export const delArticle = (data) => {
    const { id } = data;
    return request.delete('/v1/article/' + id)
}