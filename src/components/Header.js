import React from 'react'
import '../styles/header.css'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../../public/images/logo-color.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            {/* search bar */}
            <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><AiOutlineShoppingCart size={26} /></li>
                    <li><FaRegUser size={22} /></li>
                </ul>
            </div>
            {/* user icon */}
        </div>
    )
}

export default Header
