import React, { memo } from 'react'

const InputForm = ({ label }) => {
    return (
        <div>
            <label htmlFor='phone' className='text-sm	'>{label}</label>
            <input
                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full mt-1'
                type='text'
                id='phone'
            />
        </div>
    )
}

export default memo(InputForm)