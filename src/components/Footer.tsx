import React from 'react'
import { EMAIL_ID, LINKEDIN_PROFILE } from '../utils/constants'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 bg-restaurantName text-white font-bold text-lg p-4'>
            <div>Delicious ❤️ by Ranjana Singanoodi</div>
            <div className="flex flex-row space-x-6 items-center justify-center">
                <a href={LINKEDIN_PROFILE} className=""><AiOutlineLinkedin size={24} /></a>
                <a href={`mailto:${EMAIL_ID}`}><MdOutlineEmail size={24} /></a>
            </div>
        </div>
    )
}

export default Footer
