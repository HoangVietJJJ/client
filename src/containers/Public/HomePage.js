import React from 'react'
import { Search } from './index'
import { text } from '../../utils/constant'

const HomePage = () => {
    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <Search />
            <div>
                <h1 className='text-[30px] font-bold'>{text.HOME_TITLE}</h1>
                <p className='text-base text-[#65676b]'>{text.HOME_DESCRIPTION}</p>
            </div>
        </div>
    )
}

export default HomePage