import React, { useState, useEffect } from 'react'
import { text } from '../../utils/constant'
import { Province, ItemSidebar, RelatedPost } from '../../components'
import { List, Pagination } from './index'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { formatVietnameseToString } from '../../utils/Common/formatVietNameseToString'

const Rental = () => {
    const { prices, acreages, categories } = useSelector(state => state.app)
    const [currentCategory, setCurrentCategory] = useState('')
    const [categoryCode, setCategoryCode] = useState({})
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const category = categories?.find(item => `/${formatVietnameseToString(item.value)}` === location.pathname)
        setCurrentCategory(category)
        if (category) {
            setCategoryCode(category.code)
        }
    }, [location])


    return (
        <div className='w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold text-center'>{currentCategory?.header}</h1>
                <p className='text-base text-[#65676b]'>{currentCategory?.subheader}</p>
            </div>
            <Province />
            <div className='w-[100%] flex gap-4'>
                <div className='w-[70%]'>
                    <List categoryCode={categoryCode} />
                    <Pagination />
                </div>

                <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
                    <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} type='acreageCode' content={acreages} title='Xem theo diện tích' />
                    <RelatedPost />
                </div>
            </div>
        </div>
    )
}

export default Rental