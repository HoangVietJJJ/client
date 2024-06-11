import React from 'react'
import { text } from '../utils/dataContact'
import { Buttons } from '../components'

const Contact = () => {
    return (
        <div className='border-[7px] border-dashed border-blue-100 bg-white rounded-md shadow-md p-4 w-3/5 flex flex-col justify-center items-center gap-6 mt-4'>
            <img className='w-full h-48 object-contain' src={text.image} alt="thumbnail" />
            <p className='font-arial'>{text.content}</p>
            <div className='flex items-center justify-around w-full'>
                {text.contact.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center font-arial'>
                            <span className='text-orange-600 text-sm font-semibold'>{item.text}</span>
                            <span className='text-blue-900 text-lg font-semibold'>{item.phone}</span>
                            <span className='text-blue-900 text-lg font-semibold'>{item.zalo}</span>
                        </div>
                    )
                })}
            </div>
            <Buttons
                text='Gửi liên hệ'
                bgColor='bg-[#3961fb]'
                textColor='text-white'
                px='px-7'
                fontWeight='font-bold'
            />
        </div>
    )
}

export default Contact