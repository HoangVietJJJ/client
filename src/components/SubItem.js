import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'

const SubItem = ({ title, price, image, createdAt }) => {

    const formatTime = (createdAt) => {
        return moment(createdAt).fromNow()
    }

    return (
        <div className='w-full flex items-center gap-2 py-2 border-b border-gray-200'>
            <img
                className='w-[65px] h-[65px] flex-none object-cover rounded-sm'
                src={image[0]}
                alt="picture" />
            <div className='w-full flex-auto flex flex-col justify-between gap-1'>
                <h4 className='text-blue-700 text-sm'>{`${title?.slice(0, 45)}...`}</h4>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-semibold font-arial text-green-500 text-[13px]'>{price}</span>
                    <span className='text-gray-300 font-arial text-[12px]'>{formatTime(createdAt)}</span>
                </div>
            </div>
        </div>
    )
}

export default SubItem