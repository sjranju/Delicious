import React from "react"
import * as TYPES from '../utils/interfaces'
import { HiLocationMarker } from "react-icons/hi"

interface iRestaurantAdressProp {
    itemCard: {
        "@type": TYPES.CardType.RestaurantAddress,
        area: string,
        completeAddress: string,
        name: string
    }
}

const RestaurantAddress = (props: iRestaurantAdressProp) => {
    return (
        <div className="flex flex-col bg-gray-200 py-4 text-[14px] justify-center items-start px-4 pb-20">
            <p className="text-gray-500 font-bold">{props.itemCard.name}</p>
            <p className="text-gray-400 mb-2 ">(Outlet:{props.itemCard.area})</p>
            <div className="flex flex-row justify-around text-gray-400 text-xs"><HiLocationMarker size={18} className="mr-1" />{props.itemCard.completeAddress}</div>
        </div>
    )
}

export default RestaurantAddress