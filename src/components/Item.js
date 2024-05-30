import React, { memo } from 'react'
import icons from '../utils/icons'

const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/07/27/hanh-lang-1_1690431683.png",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/07/26/img-0859_1690378046.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/07/26/img-0860_1690378047.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/07/26/img-0864_1690378051.jpg",
]

const { GrStar, RiHeart3Line, RiHeart3Fill, BsBookmarkStarFill } = icons

const Item = () => {
    return (
        <div className='w-full flex border-t border-orange-600 p-3'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center'>
                <img className='w-[130px] h-[110px] object-cover' src={images[0]} alt='preview' />
                <img className='w-[130px] h-[110px] object-cover' src={images[1]} alt='preview' />
                <img className='w-[130px] h-[110px] object-cover' src={images[2]} alt='preview' />
                <img className='w-[130px] h-[110px] object-cover' src={images[3]} alt='preview' />
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between gap-4 w-full'>
                    <div className='text-red-500 font-medium'>
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        CHO THUÊ PHÒNG TRỌ GIÁ RẺ HÀ NỘI CÓ MỘT KHÔNG HAI
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill size={24} color='orange' />
                    </div>
                </div>
                <div className='my-3 flex items-center justify-between'>
                    <span className='font-bold text-green-600'>4.5 triệu/tháng</span>
                    <span>28m²</span>
                    <span>Quận Cầu Giấy, Hà Nội</span>
                </div>
                <p className='text-gray-500'>
                    Cho Thuê Căn Hộ Mini Cao Cấp tại Cầu Giấy, Hà NộiVị trí đắc địa ở Nhà 46A, Ngách 28/260 Cầu Giấy, Hà Nộ, đi bộ ra chợ, bến xe buýt, cách Ga tàu trên…
                </p>
                <div className='flex items-center my-5 justify-between'>
                    <div className='flex items-center'>
                        <img
                            className='w-[30px] h-[30px] object-cover rounded-full'
                            src='https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1745180411.jpg'
                            alt='avatar' />
                        <p>Tuệ Thu</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button
                            type='button'
                            className='bg-secondary1 text-white p-1 rounded-md'>
                            Gọi 012312312
                        </button>
                        <button
                            type='button'
                            className='text-blue-700 px-1 rounded-md border border-blue-700 hover:bg-secondary1 hover:text-white'>
                            Nhắn Zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)
