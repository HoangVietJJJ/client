import React from 'react'

const SubItem = ({ title, price, image, createdAt }) => {
    return (
        <div className='w-full flex items-center gap-2 py-2 border-b border-gray-200'>
            <img
                className='w-[65px] h-[65px] object-cover rounded-sm'
                src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg"
                alt="picture" />
            <div className='w-full flex flex-col justify-between gap-1'>
                <h4 className='text-blue-700 text-sm'>{`${title?.slice(0, 45)}...`}</h4>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-semibold font-arial text-green-500 text-[13px]'>{price}</span>
                    <span className='text-gray-300 font-arial text-[12px]'>{createdAt}</span>
                </div>
            </div>
        </div>
    )
}

export default SubItem