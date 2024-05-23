import React, { memo } from 'react'

const InputForm = ({ label, value, setValue, type }) => {
    return (
        <div>
            <label htmlFor='phone' className='text-sm	'>{label}</label>
            <input
                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full mt-1'
                type='text'
                id='phone'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [type]: e.target.value }))}
            />
        </div>
    )
}

export default memo(InputForm)