import React, { memo, useState } from 'react'
import icons from '../utils/icons'

const indexes = [0, 1, 2, 3]

const { GrStar, RiHeart3Line, RiHeart3Fill, BsBookmarkStarFill } = icons

const Item = ({ images, user, title, star, description, address, attributes }) => {
    // console.log(JSON.parse(images));
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    return (
        <div className='w-full flex border-t border-orange-600 py-3'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
                {images.length > 0 && images.filter((i, index) => indexes.some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} className='w-[120px] h-[110px] object-cover' src={i} alt='preview' />
                    )
                })}
                <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-3'>{`${images.length} ảnh`}</span>
                <span
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}
                    className=' text-white absolute right-8 bottom-1'>
                    {isHoverHeart ? <RiHeart3Fill size={26} color='rgb(247, 56, 89)' /> : <RiHeart3Line size={26} />}
                </span>
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between gap-4 w-full'>
                    <div className='text-red-500 font-medium'>
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        {title}
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill size={24} color='orange' />
                    </div>
                </div>
                <div className='my-2 flex items-center justify-between gap-2'>
                    <span className='font-bold flex-3 text-green-600 whitespace-nowrap overflow-hidden text-ellipsis'>{attributes?.price}</span>
                    <span className='flex-1'>{attributes?.acreage}</span>
                    <span className='flex-3 whitespace-nowrap overflow-hidden text-ellipsis'>
                        {`${address.split(',')[address.split(',').length - 2]},${address.split(',')[address.split(',').length - 1]}`}
                    </span>
                </div>
                <p className='text-gray-500 w-full h-[50px] whitespace-nowrap text-ellipsis overflow-hidden'>
                    {description}
                </p>
                <div className='flex items-center mt-5 justify-between'>
                    <div className='flex items-center'>
                        <img
                            className='w-[30px] h-[30px] object-cover rounded-full'
                            src='https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1745180411.jpg'
                            alt='avatar' />
                        <p className='text-[13px] text-gray-500'>{user?.name}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button
                            type='button'
                            className='bg-secondary1 text-white p-1 rounded-md'>
                            {`Gọi ${user?.phone}`}
                        </button>
                        <button
                            type='button'
                            className='text-blue-700 px-1 rounded-md border border-blue-700 hover:bg-secondary1 hover:text-white h-[32px]'>
                            Nhắn Zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)
