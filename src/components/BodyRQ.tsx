import React, { useContext } from "react"
import { useQuery } from '@tanstack/react-query'
import useOnlineStatus from "../utils/useOnlineStatus"
import * as TYPES from "../utils/interfaces"
import SkeletonRestaurantCard from "./SkeletonRestaurantCard"
import RestaurantList from "./RestaurantList"
import TopicalBanner from "./TopicalBanner"
import CuisineBanner from "./CuisineBanner"
import { fetchRestaurants } from "../utils/fetchRestaurantDetails"
import { loginOrSignUpContext } from "../context/LoginOrSignup"

const BodyRQ = () => {
    const { userLoginOrSignUp } = useContext(loginOrSignUpContext)
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: fetchRestaurants
    })

    const { onlineStatus } = useOnlineStatus()
    if (onlineStatus.isOnline === false) {
        return <h1>Looks like you are offline, please check your internet connection</h1>
    }

    console.log('BodyRQ', userLoginOrSignUp)
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