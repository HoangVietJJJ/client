import React, { memo } from 'react'
import { text } from '../utils/dataIntro'
import icons from '../utils/icons'
import { Buttons } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../utils/Common/formatVietNameseToString'

const { GrStar } = icons
const stars = [1, 2, 3, 4, 5]

const Intro = () => {

    const { categories } = useSelector(state => state.app)

    return (
        <div className='border w-3/5 bg-white rounded-md shadow-md p-4 gap-4 flex flex-col justify-center items-center'>
            <h3 className='font-semibold text-lg font-arial'>{text.title}</h3>
            <p className='text-gray-800 text-center font-arial my-4 text-sm'>
                {text.description}
                <span className='text-link'>
                    {categories?.length > 0 && categories.map(item => {
                        return (
                            <Link
                                key={item.code}
                                to={`/${formatVietnameseToString(item.value)}`}
                                className='text-blue-700  font-arial font-semibold hover:text-orange-600'
                            >
                                {`${item.value.toLowerCase()}, `}
                            </Link>
                        )
                    })}
                </span>
                {text.description2}
            </p>
            <div className='flex items-center justify-around w-full font-arial'>
                {text.statistics.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <h4 className='font-semibold text-xl'>{item.value}</h4>
                            <p className='text-gray-700 text-sm'>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <h3 className='font-semibold text-lg font-arial pt-2'>{text.price}</h3>
            <div className='flex items-center justify-center gap-1'>
                {stars.map(item => {
                    return (
                        <span key={item}>
                            <GrStar size={25} color='yellow' />
                        </span>
                    )
                })}
            </div>
            <p className='text-gray-700 italic text-center text-sm font-arial'>{text.comment}</p>
            <span className='text-gray-700 text-sm font-arial'>{text.author}</span>
            <h3 className='font-semibold text-lg font-arial pt-2'>{text.question}</h3>
            <p className='text-gray-700 text-sm font-arial'>{text.ensure}</p>
            <Buttons
                text='Đăng tin ngay'
                bgColor='bg-secondary2'
                textColor='text-white'
                px='px-6'
                fontWeight='font-bold'
            />
            <div className='h-[50px]'></div>
        </div>
    )
}

export default memo(Intro)