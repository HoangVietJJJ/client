import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { apiGetCategories } from '../../services/category'
import { formatVietnameseToString } from '../../utils/Common/formatVietNameseToString'

const notActive = 'hover:bg-secondary2 h-full flex items-center px-4'
const active = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary2'
const Navigation = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await apiGetCategories()
            if (response?.data.err === 0) {
                setCategories(response.data.response)
            }
        }
        fetchCategories()
    }, [])


    return (
        <div className='w-screen flex justify-center items-center h-[40px] bg-secondary1 text-white'>
            <div className='w-3/5 flex items-center h-full text-[0.95rem] font-bold font-arial'>
                <NavLink
                    className={({ isActive }) => isActive ? active : notActive}
                    to={`/`}
                >
                    Trang chủ
                </NavLink>
                {categories?.length > 0 && categories.map(item => {
                    return (
                        <div key={item.code} className='h-full flex justify-center items-center'>
                            <NavLink
                                className={({ isActive }) => isActive ? active : notActive}
                                to={`${formatVietnameseToString(item.value)}`}
                            >
                                {item.value}
                            </NavLink>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Navigation
