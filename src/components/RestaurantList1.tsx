import React, { useState } from "react"
import * as TYPES from "../utils/interfaces"
import { Link } from "react-router-dom"
import RestaurantCard from "./RestaurantCard"
import withOneAccountFreeDelivery from "./withOneAccountFreeDelivery"

interface iRestaurantListProps {
    card: {
        id: TYPES.MainCardID.restaurant_grid_listing,
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {}
        gridElements: {
            infoWithStyle: {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: TYPES.RestaurantType[]
                theme: string
            }
        }
    }
}

const RestaurantList1 = (props: iRestaurantListProps) => {
    const { restaurants } = props.card.gridElements.infoWithStyle
    const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)

    return (
        <>
            <div className='w-9/12 m-auto pt-8'>
                <div className="text-2xl font-bold mb-8">Restaurants with online food delivery</div>
                {
                    <div className='grid grid-cols-4 gap-10 items-start'>
                        {
                            restaurants && restaurants?.map(restaurant => (
                                <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                    {
                                        restaurant?.info?.loyaltyDiscoverPresentationInfo?.freedelMessage ?
                                            <RestaurantCardGold resData={restaurant} />
                                            :
                                            <RestaurantCard resData={restaurant} />
                                    }
                                </Link>
                            )
                            )
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default RestaurantList1