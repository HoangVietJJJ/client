import axiosConfig from '../axiosConfig'

export const apiRegister = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            },

        })
        resolve(response)
    } catch (e) {
        console.error('API Register error:', e); // Log lỗi để dễ dàng debug
        reject(e)
    }
})

export const apiLogin = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            },

        })
        resolve(response)
    } catch (e) {
        console.error('API Login error:', e); // Log lỗi để dễ dàng debug
        reject(e)
    }
})