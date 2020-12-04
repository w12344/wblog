import request from '@/utils/request'

// 评论
export const gerCommentsList = (params) => {
    return request('/v1/comments', { params })
}

// 删除
export const commentsDel = (data) => {
    const { id } = data;
    return request.delete('/v1/comments/'+id)
}