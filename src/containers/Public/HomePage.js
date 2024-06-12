import React, { useEffect } from 'react'
import { text } from '../../utils/constant'
import { Province, ItemSidebar, RelatedPost } from '../../components'
import { List, Pagination } from './index'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'


const HomePage = () => {
    const { categories, prices, acreages } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(actions.getPrices())
        dispatch(actions.getAcreages())
    }, [])

    return (
        <div className='w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold text-center'>{text.HOME_TITLE}</h1>
                <p className='text-base text-[#65676b]'>{text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            <div className='w-[100%] flex gap-4'>
                <div className='w-[70%]'>
                    <List />
                    <Pagination />
                </div>

                <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
                    <ItemSidebar content={categories} title='Danh mục cho thuê' />
                    <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} type='acreageCode' content={acreages} title='Xem theo diện tích' />
                    <RelatedPost />
                </div>
            </div>
        </div>
    )
}

export default HomePage
