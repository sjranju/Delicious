import React from 'react'
import logo from './logo.jpg'
import './header.css'
import ReactDOM from 'react-dom'
import { FaUserCircle } from 'react-icons/fa'
import { MdAssignment } from 'react-icons/md'

const Header = () => {
    return (
        <div className='header'>
            <MdAssignment size={30} color='brown' />
            {/* search bar */}
            <label> Search
                <input type='search' />
            </label>
            {/* user icon */}
            <FaUserCircle size={30} />
        </div>
    )
}

export default Header
