import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { formatVietnameseToString } from '../../utils/Common/formatVietNameseToString'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'

const notActive = 'hover:bg-secondary2 h-full flex items-center px-4'
const active = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary2'
const Navigation = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(actions.getCategories())
    }, [])

    return (
        <div className='w-screen flex justify-center items-center h-[40px] bg-secondary1 text-white'> {/* w-full */}
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
