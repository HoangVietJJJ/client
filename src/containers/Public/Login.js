import React, { useState, useEffect } from 'react';
import { InputForm, Buttons } from '../../components';
import { apiRegister } from '../../services/auth';
import { useLocation } from 'react-router-dom';
import * as actions from '../../store/actions';
import { useDispatch } from 'react-redux';

const Login = () => {

    const location = useLocation()
    const dispatch = useDispatch()

    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: ''
    })
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    const handleSubmit = async () => {
        console.log(payload);
        dispatch(actions.register(payload))
    }

    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h1 className='font-bold text-3xl mb-3'>{isRegister ? 'Tạo mới tài khoản' : 'Đăng nhập'}</h1>
            <div className='w-full flex flex-col gap-3'>
                {isRegister && <InputForm label={'HỌ TÊN'} value={payload.name} setValue={setPayload} type={'name'} />}
                <InputForm label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} type={'phone'} />
                <InputForm label={'MẬT KHẨU'} value={payload.password} setValue={setPayload} type={'password'} />
                <Buttons
                    text={isRegister ? 'Tạo tài khoản' : 'Đăng nhập'}
                    textColor='text-white'
                    bgColor='bg-secondary1'
                    fullWidth
                    onClick={handleSubmit}
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