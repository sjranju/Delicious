import React, { useState } from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import logo from '../../public/images/logo-no-background.png'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import UserLoginOrSignup from './UserLoginOrSignup'
import useAuthListener from '../utils/useAuthListener'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'

const Header = () => {
    const onlineStatus = useOnlineStatus()
    const [userLoginOrSignup, setUserLoginOrSignup] = useState<boolean>(false)
    const user = useAuthListener()

    return (
        <div className='relative'>
            <div className='flex flex-row justify-around items-center shadow-md'>
                <Link to='/' className='hover:transition hover:duration-250 hover:ease-in-out hover:scale-95'><img src={logo} alt='logo' className='w-16' /></Link>
                <div className=''>
                    <ul className='flex flex-row space-x-8 font-medium'>
                        <li>{onlineStatus ?
                            <div className='group'>✅
                                <span className='opacity-0 group-hover:opacity-100 text-xs text-slate-400'>you are online</span>
                            </div>
                            : <div className='group'>🛑
                                <span className='opacity-0 group-hover:opacity-100 text-xs text-slate-400'>you are offline</span>
                            </div>}</li>
                        <li><Link to='/search' className='hover:text-red-600'>Search</Link></li>
                        <li><Link to='/contact' className='hover:text-red-600'><FiHelpCircle size={24} /></Link></li>
                        <li className='relative'>
                            <Link to={'/cart'} >
                                <AiOutlineShoppingCart size={24} className='hover:text-red-600' />
                                <span className='absolute bottom-[21px] left-4 text-sm font-bold text-red-600'></span>
                            </Link>
                        </li>
                        <li className='group/profile'>
                            <button onClick={() => setUserLoginOrSignup(!userLoginOrSignup)}
                                className='flex flex-row items-center hover:text-red-600'>
                                <AiOutlineUser size={24} className='' />
                                <span className='text-sm'>{user && user.displayName}</span>
                            </button>
                            {user &&
                                <div className="hidden absolute group-hover/profile:block font-semibold z-10 w-40 p-4 bg-red-50 text-sm shadow-md">
                                    <ul className='space-y-4'>
                                        <li className='hover:font-bold'>Profile</li>
                                        <li className='hover:font-bold'>Orders</li>
                                        <li className='hover:font-bold'>Favourites</li>
                                        <li className='hover:font-bold'><button onClick={() => {
                                            signOut(auth)
                                            setUserLoginOrSignup(true)
                                        }}>Logout</button></li>
                                    </ul>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {
                !user &&
                <div className={`absolute right-0 inset-y-0 h-screen z-10 w-4/12 p-12 bg-white shadow-2xl ${userLoginOrSignup ? 'animate-moveRightToLeft' : 'hidden animate-moveLeftToRight'}  overflow-hidden`}>
                    <UserLoginOrSignup userLoginOrSignup={userLoginOrSignup} setUserLoginOrSignup={setUserLoginOrSignup} />
                </div>

            }
        </div >
    )
}

export default Header
