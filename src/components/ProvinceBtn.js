import React, { memo } from 'react'

const ProvinceBtn = ({ name, image }) => {
    return (
        <div className=' shadow-md rounded-b-[10px] text-blue-700 cursor-pointer hover:text-[#ff5e00]'>
            <img
                src={image}
                alt={name}
                className='w-[220px] h-[110px] object-cover rounded-t-[10px]'
            />
            <div className='font-bold p-2 font-arial text-base text-center '>{name}</div>
        </div>
    )
}

export default memo(ProvinceBtn) 