import React from 'react';
import { InputForm, Buttons } from '../../components';

const Login = () => {
    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h1 className='font-bold text-3xl mb-3'>Đăng nhập</h1>
            <div className='w-full flex flex-col gap-3'>
                <InputForm label={'SỐ ĐIỆN THOẠI'} />
                <InputForm label={'MẬT KHẨU'} />
                <Buttons
                    text='Đăng nhập'
                    textColor='text-white'
                    bgColor='bg-secondary1'
                    fullWidth
                />
            </div>
            <div className='mt-7 flex items-center justify-between text-xl'>
                <small className='text-[#1266dd] hover:text-[orange] cursor-pointer'>Bạn quên mật khẩu?</small>
                <small className='text-[#1266dd] hover:text-[orange] cursor-pointer'>Tạo tài khoản mới</small>
            </div>
        </div>
    )
}

export default Login