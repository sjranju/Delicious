import React, { useState } from 'react'
import { FAQ } from '../utils/constants'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Contact = () => {
    const [showFAQ, setShowFAQ] = useState<boolean>(true)
    const [showDesc, setShowDesc] = useState<number>(0)

    return (
        <div className=' bg-[#37718e] text-white h-screen'>
            <div className="flex flex-col items-start justify-center w-9/12 m-auto pt-8">
                <div className='text-3xl font-bold'>Help and Support</div>
                <div className="mt-1">Let's take a step ahead and help you better.</div>
                <div className="flex flex-row bg-white w-10/12 p-12 mt-6 space-x-8">
                    <div className="w-1/3">
                        <ul className='bg-gray-100 text-gray-600 text-sm font-semibold py-2'>
                            <li className="ml-10 py-4 px-4 active:bg-white cursor-pointer">Help with orders</li>
                            <li className={`ml-10 py-4 px-4 active:bg-white ${showFAQ && 'bg-white'} cursor-pointer`}
                                onClick={() => setShowFAQ(!showFAQ)}>FAQs
                            </li>
                            <li className="ml-10 py-4 px-4 active:bg-white cursor-pointer">General issues</li>
                            <li className="ml-10 py-4 px-4 active:bg-white cursor-pointer">Partner Onborading</li>
                            <li className="ml-10 py-4 px-4 active:bg-white cursor-pointer">Legal, Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="w-2/3 text-black">
                        {
                            showFAQ &&
                            FAQ.map(faq =>
                                <div key={faq.id} className='border-b '>
                                    <button type='button' className='flex flex-row justify-between py-4 w-full hover:text-red-700 font-medium text-gray-600'
                                        onClick={() => setShowDesc(prev => prev === faq.id ? 0 : faq.id)}>
                                        <div>{faq.title}</div>
                                        {
                                            showDesc ?
                                                <IoIosArrowUp size={22} onClick={() => setShowDesc(faq.id)} />
                                                : <IoIosArrowDown size={22} onClick={() => setShowDesc(0)} />
                                        }
                                    </button>
                                    {
                                        showDesc === faq.id &&
                                        <div className="text-xs mb-4 text-gray-500">{faq.description}</div>
                                    }
                                </div>)
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Contact
