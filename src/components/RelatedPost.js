import React, { useEffect } from 'react'
import { SubItem } from './index'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import * as actions from '../store/actions'

const RelatedPost = () => {

    const { newPosts } = useSelector(state => state.post)
    const dispatch = useDispatch()
    // const [newPosts, setNewPosts] = useState()

    useEffect(() => {
        dispatch(actions.getNewPosts())
    }, [])

    return (
        <div className='w-full bg-white rounded-md p-4'>
            <h3 className='font-semibold text-lg mb-4'>Tin mới đăng</h3>
            <div className='w-full flex flex-col gap-2'>
                {newPosts?.map(item => {
                    return (
                        <SubItem
                            key={item.id}
                            title={item?.title}
                            price={item?.attributes?.price}
                            createdAt={item?.createdAt}
                            image={JSON.parse(item?.images?.image)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default RelatedPost