import React from "react"
import * as TYPES from "../utils/interfaces"
import gold from '../../public/images/gold.png'

interface iWithOneAccountFreeDeliveryProps {
    resData: TYPES.RestaurantType
}

const withOneAccountFreeDelivery = (RestaurantCard: React.ComponentType<iWithOneAccountFreeDeliveryProps>) => {
    return (props: iWithOneAccountFreeDeliveryProps) => {
        console.log('props.resData.info', props.resData.info)

        return (
            <div className="">
                <div className="flex items-center justify-center">
                    <img src={gold} className="w-4 h-4" />
                    <p className="text-xs text-white">Free Delivery</p>
                </div>
                <RestaurantCard resData={props.resData} />
            </div>
        )
    }
}

export default withOneAccountFreeDelivery