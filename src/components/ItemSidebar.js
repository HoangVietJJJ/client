import React, { memo } from 'react'
import icons from '../utils/icons'
import { formatVietnameseToString } from '../utils/Common/formatVietNameseToString'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

const { GrNext } = icons
const ItemSidebar = ({ title, content, isDouble, type }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location);

    const formatContent = () => {
        const oddElement = content?.filter((item, index) => index % 2 !== 0)
        const evenElement = content?.filter((item, index) => index % 2 === 0)
        const formatContent = oddElement?.map((item, index) => {
            return {
                right: item,
                left: evenElement?.find((item2, index2) => index2 === index)
            }
        })
        return formatContent
    }

    const handleFilterPosts = (code) => {
        navigate({
            pathname: location.pathname,
            search: createSearchParams({
                'priceCode': code,
            }).toString()
        });

    }

    return (
        <div className='p-4 rounded-md bg-white w-full'>
            <h3 className='text-lg font-semibold mb-4'>{title}</h3>
            {!isDouble && <div className='flex flex-col gap-2'>
                {content?.length > 0 && content.map(item => {
                    return (
                        <Link
                            to={`${formatVietnameseToString(item.value)}`}
                            key={item.code}
                            className='flex gap-2 items-center cursor-pointer hover:text-orange-600 border-dashed border-b border-gray-200 pb-1'
                        >
                            <GrNext size={10} color='rgb(121 111 111)' />
                            <p>{item.value}</p>
                        </Link>
                    )
                })}
            </div>}
            {isDouble && <div className='flex flex-col gap-2'>
                {content?.length > 0 && formatContent(content).map((item, index) => {
                    return (
                        <div key={index} className=''>
                            <div className='flex items-center justify-around'>
                                <div
                                    onClick={() => handleFilterPosts(item.left.code)}
                                    className='flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-600 border-dashed border-b border-gray-200 pb-1 '
                                >
                                    <GrNext size={10} color='rgb(121 111 111)' />
                                    <p>{item.left.value}</p>
                                </div>

                                <div
                                    onClick={() => handleFilterPosts(item.right.code)}
                                    className='flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-600 border-dashed border-b border-gray-200 pb-1'
                                >
                                    <GrNext size={10} color='rgb(121 111 111)' />
                                    <p>{item.right.value}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default memo(ItemSidebar)