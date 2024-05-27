import axiosConfig from '../axiosConfig'

export const apiGetCategories = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/category/all',
        })
        resolve(response)
    } catch (e) {
        console.error('API Register error:', e); // Log lỗi để dễ dàng debug
        reject(e)
    }
})