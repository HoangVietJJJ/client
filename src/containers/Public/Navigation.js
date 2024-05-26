import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
    { name: "Trang chủ", path: "home" },
    { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
    { name: "Nhà cho thuê", path: "nha-cho-thue" },
    { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
    { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang" }
]
const notActive = 'hover:bg-secondary2 h-full flex items-center px-4'
const active = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary2'
const Navigation = () => {
    return (
        <div className='w-screen flex justify-center items-center h-[40px] bg-secondary1 text-white'>
            <div className='w-1100 flex items-center h-full text-[0.95rem] font-bold font-arial'>
                {nav?.length > 0 && nav.map((item, index) => {
                    return (
                        <div key={index} className='h-full flex justify-center items-center'>
                            <NavLink
                                className={({ isActive }) => isActive ? active : notActive}
                                to={item.path}
                            >
                                {item.name}
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