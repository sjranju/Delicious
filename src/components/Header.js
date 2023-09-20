import React from 'react'
import '../styles/header.css'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../../public/images/logo-color.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            {/* search bar */}
            <div className='nav-list'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><AiOutlineShoppingCart size={26} /></li>
                    <li><FaRegUser size={22} /></li>
                </ul>
            </div>
            {/* user icon */}
        </div>
    )
}

export default Header
