import actionTypes from './actionTypes'
import * as apies from '../../services'

export const getCategories = () => async (dispatch) => {
    try {
        const response = await apies.apiGetCategories()
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                categories: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                msg: response.data.msg,
                categories: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories: null
        })
    }
}

export const getPrices = () => async (dispatch) => {
    try {
        const response = await apies.apiGetPrices()
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRICES,
                prices: response.data.response.sort((a, b) => {
                    return +a.order - +b.order
                })
            })
        } else {
            dispatch({
                type: actionTypes.GET_PRICES,
                msg: response.data.msg,
                prices: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRICES,
            prices: null
        })
    }
}

export const getAcreages = () => async (dispatch) => {
    try {
        const response = await apies.apiGetAcreages()
        // console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ACREAGES,
                acreages: response.data.response.sort((a, b) => {
                    return +a.order - +b.order
                })
            })
        } else {
            dispatch({
                type: actionTypes.GET_ACREAGES,
                msg: response.data.msg,
                acreages: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ACREAGES,
            acreages: null
        })
    }
}
