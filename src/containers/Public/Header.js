import React, { useCallback } from 'react';
import logo from '../../assets/logo-2021.png';
import { Buttons } from '../../components';
import icons from '../../utils/icons';
import { useNavigate, Link } from 'react-router-dom';
import { path } from '../../utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const { AiOutlinePlusCircle } = icons

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [])
    return (
        <div className='w-1100'>
            <div className='w-full flex items-center justify-between'>
                <Link to={'/'}>
                    <img className='w-[240px] h-[70px] object-contain' src={logo} alt='logo' />
                </Link>
                <div className='flex items-center gap-2'>
                    {!isLoggedIn && <div className='flex items-center gap-2'>
                        <small>Phongtro123 xin chào!</small>
                        <Buttons
                            text='Đăng nhập'
                            textColor='text-white'
                            bgColor='bg-[#1266dd]'
                            onClick={() => goLogin(false)}
                        />
                        <Buttons
                            text='Đăng ký'
                            textColor='text-white'
                            bgColor='bg-[#1266dd]'
                            onClick={() => goLogin(true)}
                        />
                    </div>}
                    {isLoggedIn && <div className='flex items-center gap-2'>
                        <small>Tên!</small>
                        <Buttons
                            text='Đăng xuất'
                            textColor='text-white'
                            bgColor='bg-red-600'
                            onClick={() => dispatch(actions.logout())}
                        />
                    </div>}
                    <Buttons
                        text='Đăng tin mới'
                        textColor='text-white'
                        bgColor='bg-secondary2'
                        IcAfter={AiOutlinePlusCircle}
                    />
                </div>
            </div>
        </div>

    )
}

export default Header;
