import React, { useContext, useState } from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import logo from '../../public/images/logo-no-background.png'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import { useAppSelector } from '../store/useStateDispatch'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import UserLoginOrSignup from './UserLoginOrSignup'
import { userContext } from '../context/UserContext'

const Header = () => {
    const cartState = useAppSelector((state) => state.cart)
    const onlineStatus = useOnlineStatus()
    const [userLoginOrSignup, setUserLoginOrSignup] = useState<boolean>(false)
    const { user } = useContext(userContext)

    return (
        <div className='relative'>
            <div className='flex flex-row justify-around items-center shadow-md'>
                <img src={logo} alt='logo' className='w-16' />
                <div className=''>
                    <ul className='flex flex-row space-x-8 font-medium'>
                        <li>{onlineStatus ?
                            <div className='group'>✅
                                <span className='opacity-0 group-hover:opacity-100 text-xs text-slate-400'>you are online</span>
                            </div>
                            : <div className='group'>🛑
                                <span className='opacity-0 group-hover:opacity-100 text-xs text-slate-400'>you are offline</span>
                            </div>}</li>
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/contact'><FiHelpCircle size={24} /></Link></li>
                        <li className='relative'>
                            <Link to={'/cart'} >
                                <AiOutlineShoppingCart size={24} className='' />
                                <span className='absolute bottom-[21px] left-4 text-sm font-bold text-red-600'> {cartState.length}</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => setUserLoginOrSignup(!userLoginOrSignup)}>
                                <AiOutlineUser size={24} className='' />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* {login && */}
            <div className={`fixed absolute right-0 inset-y-0 h-screen w-4/12 p-12 bg-white shadow-2xl ${userLoginOrSignup ? 'animate-moveRightToLeft' : 'hidden animate-moveLeftToRight'}  overflow-hidden`}>
                <UserLoginOrSignup userLoginOrSignup={userLoginOrSignup} setUserLoginOrSignup={setUserLoginOrSignup} />
                {user ? user?.email : ''}
            </div>

            {/* } */}
        </div>
    )
}

export default Header
