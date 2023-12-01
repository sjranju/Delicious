import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CLOUDINARY_URL } from '../utils/constants'
import * as TYPES from "../utils/interfaces"
import { PiDotOutlineFill } from 'react-icons/pi'

interface iRestaurantProp {
    resData: TYPES.RestaurantType
}

export const RestaurantCard = (props: iRestaurantProp) => {
    const { resData } = props
    const { name, avgRating, cuisines, areaName, cloudinaryImageId, sla } = resData?.info
    return (
        <div data-testid='restaurantCard' className="flex flex-col justify-center items-start hover:transition hover:duration-250 hover:ease-in-out hover:scale-95">
            <img className='w-full h-[169px] rounded-lg mb-1 object-cover'
                src={`${CLOUDINARY_URL + cloudinaryImageId}`} alt='restaurant-food' />
            <div className='font-bold text-lg truncate max-w-2xs text-restaurantName/75 ml-2'>{name}</div>
            <div className='flex items-center font-bold ml-2 text-restaurantName/75'><AiFillStar color='green' className='mr-1/2' />{avgRating}<PiDotOutlineFill size={18} /><span className='text-restaurantName/75'>{sla.deliveryTime} mins</span></div>
            <div className='overflow-hidden break-words line-clamp-1 antialiased text-restaurantName/60 font-extralight font-cusines ml-2'>{cuisines.join(', ')}</div>
            <div className='overflow-hidden break-words line-clamp-1 antialiased text-restaurantName/60 font-extralight font-cusines ml-2'>{areaName}</div>
        </div>
    )

}

export default RestaurantCard