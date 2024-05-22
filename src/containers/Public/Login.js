import React, { useState, useEffect } from 'react';
import { InputForm, Buttons } from '../../components';
// import {Link} from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

const Login = () => {

    const location = useLocation()

    const [isRegister, setIsRegister] = useState(location.state?.flag)
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h1 className='font-bold text-3xl mb-3'>{isRegister ? 'Tạo mới tài khoản' : 'Đăng nhập'}</h1>
            <div className='w-full flex flex-col gap-3'>
                {isRegister && <InputForm label={'HỌ TÊN'} />}
                <InputForm label={'SỐ ĐIỆN THOẠI'} />
                <InputForm label={'MẬT KHẨU'} />
                <Buttons
                    text={isRegister ? 'Tạo tài khoản' : 'Đăng nhập'}
                    textColor='text-white'
                    bgColor='bg-secondary1'
                    fullWidth
                />
            </div>
            <div className='mt-7 flex items-center justify-between text-xl'>
                {isRegister ?
                    <small>Bạn đã có tài khoản?
                        <span
                            className='text-[#1266dd] hover:text-[orange] cursor-pointer'
                            onClick={() => { setIsRegister(false) }}>Đăng nhập ngay
                        </span>
                    </small> :
                    <>
                        <small className='text-[#1266dd] hover:text-[orange] cursor-pointer'>Bạn quên mật khẩu?</small>
                        <small
                            onClick={() => { setIsRegister(true) }}
                            className='text-[#1266dd] hover:text-[orange] cursor-pointer'>Tạo tài khoản mới</small>
                    </>}
            </div>
        </div>
    )
}

export default Login