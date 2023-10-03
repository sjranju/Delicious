import React from "react"
import * as TYPES from '../utils/interfaces'
import { CLOUDINARY_URL } from "../utils/constants";

interface iRestaurantLicenseInfoProp {
    itemCard: {
        "@type": TYPES.CardType.RestaurantLicenseInfo,
        imageId?: string,
        text: string[]
    }
}

const RestaurantLicenseInfo = (props: iRestaurantLicenseInfoProp) => {
    return (
        <div className="flex flex-row space-x-4 text-[13px] text-gray-500 items-center bg-gray-200 border-b border-gray-400 py-4 px-4">
            <img src={CLOUDINARY_URL + props.itemCard.imageId} alt="" className="h-6 w-22" />
            <p>{props.itemCard.text[0]}</p>
        </div>
    )
}

export default RestaurantLicenseInfo