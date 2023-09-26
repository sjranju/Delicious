import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../../public/images/logo-no-background.png'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
    const onlineStatus = useOnlineStatus()
    return (
        <div className=''>
            <div className='flex flex-row justify-around items-center shadow-md'>
                <img src={logo} alt='logo' className='w-16' />
                <div className=''>
                    <ul className='flex flex-row space-x-6 font-medium'>
                        <li>{onlineStatus ?
                            <div className='group'>✅
                                <span className='opacity-0 group-hover:opacity-100 text-xs text-slate-400'>you are online</span>
                            </div>
                            : <div className='group'>🛑
                                <span className='opacity-0 group-hover:opacity-100 text-xs text-slate-400'>you are offline</span>
                            </div>}</li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><AiOutlineShoppingCart size={26} /></li>
                        <li><FaRegUser size={22} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
