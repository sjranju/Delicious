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

const BodyRQ = () => {

    const [searchText, setSearchText] = useState('')
    const [filterRestaurants, setFilterRestaurants] = useState<TYPES.RestaurantType[]>([])

    const fetchData = (): Promise<TYPES.RestaurantType[]> => fetch(RESTAURANT_API)
        .then(response => response.json()
            .catch(err => console.log(err))
            .then(jsonData => jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        )

    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: fetchData
    })
    console.log(data)

    const handleFilterRestaurants = () => {
        data && setFilterRestaurants(data?.filter(restaurant => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
    }

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) {
        return <h1>Looks like you are offline, please check your internet connection</h1>
    }

    const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)

    return isError ?
        <div>Oops! Something went wrong!!
            {typeof error === 'string' && error}
        </div>
        : isLoading ?
            <SkeletonRestaurantCard />
            : (
                <div className='flex flex-col justify-center items-center space-y-8 mt-8 bg-slate-50'>
                    <div className='flex flex-row items-center justify-center space-x-8'>
                        <div className='flex flex-row space-x-2'>
                            <input type='text' placeholder='Search'
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className='outline-none outline-gray-200 rounded-sm ' />
                            <BiSearch size={22} color='brown' onClick={handleFilterRestaurants}
                                className='search-icon' />
                            {searchText?.length !== 0 ?
                                <AiOutlineClose color='brown' size={22} onClick={() => {
                                    setSearchText('')
                                    data && setFilterRestaurants(data)

                                }} />
                                : ''}
                        </div>
                        <div className='flex items-center justify-center p-1 rounded-lg focus-within:bg-red-200  bg-slate-200'>
                            <button className=' '
                                onClick={() => {
                                    searchText.length > 0 ?
                                        setFilterRestaurants(filterRestaurants?.filter(rest => rest?.info?.avgRating >= 4))
                                        : data && setFilterRestaurants(data?.filter(rest => rest?.info?.avgRating >= 4))
                                }}>Top rated</button>
                            <AiOutlineClose color='brown' size={18} onClick={() => {
                                searchText.length > 0 ? data && setFilterRestaurants(data?.filter(restaurant => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
                                    : data && setFilterRestaurants(data)
                            }} />
                        </div>
                    </div>
                    {
                        <div className='grid grid-cols-4 gap-10 '>
                            {filterRestaurants?.length !== 0 ?
                                filterRestaurants?.map(restaurant => (
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
                                : data && data?.map(restaurant => (
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
            )
}

export default BodyRQ