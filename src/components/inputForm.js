import React, { memo } from 'react'

const InputForm = ({ label, value, setValue, keyPayload, inValidFields, setInValidFields, type }) => {
    return (
        <div>
            <label htmlFor='phone' className='text-sm	'>{label}</label>
            <input
                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full mt-1'
                type={type || 'text'}
                id='phone'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [keyPayload]: e.target.value }))}
                onFocus={() => setInValidFields([])}
            />
            {inValidFields.length > 0 && inValidFields.some(i => i.name === keyPayload) &&
                <small className='text-red-500 italic'>{inValidFields.find(i => i.name === keyPayload)?.message}</small>}
        </div>
    )
}

export default memo(InputForm)