import React, { useState } from "react"
import { useQuery } from '@tanstack/react-query'
import { RESTAURANT_API } from '../utils/constants'
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import RestaurantCard from "./RestaurantCard"
import * as TYPES from "../utils/interfaces"
import withOneAccountFreeDelivery from "./withOneAccountFreeDelivery"
import SkeletonRestaurantCard from "./SkeletonRestaurantCard"
import RestaurantList from "./RestaurantList"

const BodyRQ = () => {

    const [searchText, setSearchText] = useState('')
    const [filterRestaurants, setFilterRestaurants] = useState<TYPES.MainContent>()

    const fetchData = (): Promise<TYPES.MainContent[]> => fetch(RESTAURANT_API)
        .then(response => response.json())
        .catch(err => console.log(err))
        .then(jsonData => jsonData?.data.cards)

    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: fetchData
    })
    console.log(data)

    const handleFilterRestaurants = () => {
        data &&
            setFilterRestaurants(data?.find(restaurant =>
                restaurant.card.card.id === TYPES.MainCardID.restaurant_grid_listing &&
                restaurant?.card.card.gridElements.infoWithStyle.restaurants.filter(rest =>
                    rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
            ))
    }

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
                data.map(dataCard =>
                    dataCard.card.card.id === TYPES.MainCardID.restaurant_grid_listing &&
                    <RestaurantList key={dataCard.card.card.id} card={dataCard.card.card} />
                )
            )
}

export default BodyRQ