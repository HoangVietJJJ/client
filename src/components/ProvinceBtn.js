import React, { memo } from 'react'

const ProvinceBtn = ({ name, image }) => {
    return (
        <div className=' shadow-md rounded-b-[10px]'>
            <img
                src={image}
                alt={name}
                className='w-[220px] h-[110px] object-cover rounded-t-[10px]'
            />
            <div className='font-bold p-2 text-blue-700 font-arial text-base text-center hover:text-[#ff5e00]'>{name}</div>
        </div>
    )
}

export default memo(ProvinceBtn) 