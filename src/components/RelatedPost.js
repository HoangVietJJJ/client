import React from 'react'
import { SubItem } from './index'

const RelatedPost = () => {
    return (
        <div className='w-full bg-white rounded-md p-4'>
            <h3 className='font-semibold text-lg mb-4'>Tin mới đăng</h3>
            <div className='w-full flex flex-col gap-2'>
                <SubItem
                    title='CHO THUÊ PHÒNG TRỌ MỚI CHÍNH CHỦ, GIẢM GIÁ, QUẬN TÂN PHÚ - GẦN BÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THỰC PHẨM'
                    price='2.9 triệu/tháng'
                    createdAt='Hôm nay'
                />
                <SubItem
                    title='CHO THUÊ PHÒNG TRỌ MỚI CHÍNH CHỦ, GIẢM GIÁ, QUẬN TÂN PHÚ - GẦN BÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THỰC PHẨM'
                    price='2.9 triệu/tháng'
                    createdAt='Hôm nay'
                />
                <SubItem
                    title='CHO THUÊ PHÒNG TRỌ MỚI CHÍNH CHỦ, GIẢM GIÁ, QUẬN TÂN PHÚ - GẦN BÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THỰC PHẨM'
                    price='2.9 triệu/tháng'
                    createdAt='Hôm nay'
                />
            </div>
        </div>
    )
}

export default RelatedPost