import axiosConfig from '../axiosConfig'

export const apiGetPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/all',
        })
        resolve(response)
    } catch (e) {
        console.error('API Register error:', e); // Log lỗi để dễ dàng debug
        reject(e)
    }
})