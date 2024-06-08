import React, { useEffect } from 'react'
import { text } from '../../utils/constant'
import { Province, ItemSidebar } from '../../components'
import { List, Pagination } from './index'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'


const HomePage = () => {
    const [params] = useSearchParams()
    const { categories, prices, acreages } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAcreages())
    }, [])

    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold text-center'>{text.HOME_TITLE}</h1>
                <p className='text-base text-[#65676b]'>{text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            <div className='w-[100%] flex gap-4'>
                <div className='w-[70%]'>
                    <List page={params.get('page')} />
                    <Pagination page={params.get('page')} />
                    <div className='h-[500px]'></div>
                </div>

                <div className='w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center'>
                    <ItemSidebar content={categories} title='Danh mục cho thuê' />
                    <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} content={acreages} title='Xem theo diện tích' />
                </div>
            </div>
        </div>
    )
}

export default HomePage
