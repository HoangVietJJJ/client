import React, { useEffect } from 'react'
import { Buttons, Item } from '../../components'
import { getPosts, getPostsLimit } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const List = ({ categoryCode }) => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamsObject = {}
        params?.map(i => {
            searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] }
        })
        if (categoryCode) searchParamsObject.categoryCode = categoryCode
        dispatch(getPostsLimit(searchParamsObject))
    }, [searchParams, categoryCode])


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
                            id={item?.id}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default List
