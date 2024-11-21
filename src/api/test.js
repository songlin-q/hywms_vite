import request from '@/utils/request'
/**
 * 测试
 * @param {*} data 
 * @returns 
 */
export const CreateArticle = (data) => {
    return request({
        url: "/api/Test/test",
        method: "post",
        data,
    });
};