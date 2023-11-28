import React, { useContext } from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import logo from '../../public/images/logo-no-background.png'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import UserLoginOrSignup from './UserLoginOrSignup'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'
import { GetCartItemsReturn, useGetCartItemsQuery } from '../RTKQuery/cartQuery'
import { LuSearch } from 'react-icons/lu'
import { loginOrSignUpContext } from '../context/LoginOrSignup'
import { handleLoginOrSignUp } from '../utils/fetchRestaurantDetails'
import useAuthState from '../utils/useAuthState'

const Header = () => {
    const { onlineStatus } = useOnlineStatus()
    const { data: userAuthState } = useAuthState()
    const { data: cart } = useGetCartItemsQuery(userAuthState ? userAuthState?.uid : '')
    const { userLoginOrSignUp, setUserLoginOrSignup } = useContext(loginOrSignUpContext)
    console.log('userAuthState in header', userAuthState)

    return (
        <div className='relative'>
            <div className='flex flex-row justify-between items-center shadow-md py-1 px-52'>
                <Link to='/' className='hover:transition hover:duration-250 hover:ease-in-out hover:scale-95'>
                    <img src={logo} alt='' className='w-16' />
                </Link>
                <div className=''>
                    <ul className='flex flex-row space-x-8 font-medium'>
                        <li><Link to='/search' className='hover:text-red-600 flex flex-row items-center space-x-2'><LuSearch size={20} className='font-bold' /><span>Search</span></Link></li>
                        <li><Link to='/contact' className='hover:text-red-600 flex flex-row items-center space-x-2'><FiHelpCircle size={22} /><span>Help</span></Link></li>
                        <li className='group/profile'>
                            <button type='button' onClick={() => !userAuthState && setUserLoginOrSignup(true)}
                                className='flex flex-row items-center hover:text-red-600'
                                role='userIcon'>
                                <AiOutlineUser size={22} className='' />
                                <span className='text-sm'>{userAuthState && userAuthState.displayName}</span>
                            </button>
                            {userAuthState &&
                                <div className="hidden absolute group-hover/profile:block font-semibold z-10 w-40 p-4 bg-red-50 text-sm shadow-md">
                                    <ul className='space-y-4'>
                                        <li className='hover:font-bold'>Profile</li>
                                        <li className='hover:font-bold'>Orders</li>
                                        <li className='hover:font-bold'>Favourites</li>
                                        <li className='hover:font-bold'>
                                            <button type='button' onClick={() => {
                                                signOut(auth)
                                                setUserLoginOrSignup(true)
                                                handleLoginOrSignUp()
                                            }}>Logout</button></li>
                                    </ul>
                                </div>
                            }
                        </li>
                        <li className='relative'>
                            <Link to={'/cart'} className='flex flex-row items-center space-x-2 hover:text-red-600'>
                                <AiOutlineShoppingCart size={22} className='' />
                                <span>Cart</span>
                            </Link>
                            {
                                cart === undefined || cart === 'notExists' || cart === null || !cart.itemWithQuantity ?
                                    <div data-testid='cart0' className='absolute font-bold text-xs text-red-600 -top-[10px] left-4'>0</div>
                                    : <div data-testid='cartQuantity' className='absolute font-bold text-xs text-red-600 -top-[10px] left-4'>
                                        {Object.entries(cart.itemWithQuantity)?.reduce((acc, val) =>
                                            acc += val[1]
                                            , 0)}</div>
                            }
                        </li>
                    </ul>
                </div>
            </div>

            {
                onlineStatus.isOnline ?
                    onlineStatus.backOnline &&
                    <div className='absolute w-full text-xs text-center animate-moveTopToDown'>
                        <div className="bg-green-500 py-1">
                            Connection established, please try refreshing the page now.
                        </div>
                    </div>
                    :
                    <div className='absolute w-full text-xs text-center animate-moveTopToDown'>
                        <div className=' bg-red-500 py-1 '>
                            Connection error! Please check your connection and try again.
                        </div>
                    </div>
            }
            {
                userLoginOrSignUp &&
                <div className={`absolute right-0 inset-y-0 h-screen z-20 w-4/12 p-12 bg-white shadow-2xl ${userLoginOrSignUp ? 'animate-moveRightToLeft' : 'hidden animate-moveLeftToRight'}  overflow-hidden`}>
                    <UserLoginOrSignup />
                </div>
            }
        </div >
    )
}

export default Header
