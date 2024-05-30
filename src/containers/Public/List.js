import React from 'react'
import { Buttons, Item } from '../../components'

const List = () => {
    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md border'>
            <div className='flex items-center justify-between my-3'>
                <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
                <span>Cập nhật: 20:56 30/5/2024</span>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span>Sắp xếp: </span>
                <Buttons bgColor='bg-gray-200' text='Mặc định' />
                <Buttons bgColor='bg-gray-200' text='Mới nhất' />
            </div>
            <div className=''>
                <Item />
                {/* <Item />
                <Item /> */}
            </div>
        </div>
    )
}

export default List
