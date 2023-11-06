import React, { useState } from "react"
import { useQuery } from '@tanstack/react-query'
import { RESTAURANT_API } from '../utils/constants'
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import RestaurantCard from "./RestaurantCard"
import * as TYPES from "../utils/interfaces"
import SkeletonRestaurantCard from "./SkeletonRestaurantCard"
import RestaurantList from "./RestaurantList"
import TopicalBanner from "./TopicalBanner"
import CuisineBanner from "./CuisineBanner"
import { fetchRestaurants } from "../utils/fetchRestaurantDetails"

const BodyRQ = () => {

    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: fetchRestaurants
    })

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) {
        return <h1>Looks like you are offline, please check your internet connection</h1>
    }

    return isError ?
        <div>Oops! Something went wrong!!
            {typeof error === 'string' && error}
        </div>
        : isLoading ?
            <SkeletonRestaurantCard />
            :
            (
                <div className="bg-slate-50 h-full">
                    {data.map(dataCard =>
                        dataCard.card.card.id === TYPES.MainCardID.restaurant_grid_listing ?
                            <RestaurantList key={dataCard.card.card.id} card={dataCard.card.card} />
                            : dataCard.card.card.id === TYPES.MainCardID.topical_banner ?
                                <TopicalBanner key={dataCard.card.card.id} card={dataCard.card.card.imageGridCards} />
                                : dataCard.card.card.id === TYPES.MainCardID.whats_on_your_mind &&
                                <CuisineBanner key={dataCard.card.card.id} card={dataCard.card.card.imageGridCards} />
                    )}
                </div>
            )
}

export default BodyRQ