import React, { useEffect } from 'react'
import { Buttons, Item } from '../../components'
import { getPosts } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {

    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md border px-4'>
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
                {posts?.length > 0 && posts.map(item => {
                    return (
                        <Item
                            key={item?.id}
                            address={item?.address}
                            attributes={item?.attributes}
                            description={JSON.parse(item?.description)}
                            images={JSON.parse(item?.images?.image)}
                            star={+item.star}
                            title={item.title}
                            user={item.user}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default List
