import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { RESTAURANT_API } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import * as TYPES from "../utils/interfaces"
import withOneAccountFreeDelivery from './withOneAccountFreeDelivery'
import Skeleton from 'react-loading-skeleton'

const Body = () => {

    const [restaurantList, setRestaurantList] = useState<TYPES.RestaurantType[]>([])
    const [searchText, setSearchText] = useState('')
    const [filterRestaurants, setFilterRestaurants] = useState<TYPES.RestaurantType[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const handleFilterRestaurants = () => {
        setFilterRestaurants(filterRestaurants?.filter(restaurant => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
    }

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API)
        const jsonData = await data.json()
        setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) {
        return <h1>Looks like you are offline, please check your internet connection</h1>
    }

    const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)

    return (
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
                            setFilterRestaurants(restaurantList)

                        }} />
                        : ''}
                </div>
                <div className='flex items-center justify-center p-1 rounded-lg focus-within:bg-red-200  bg-slate-200'>
                    <button className=' '
                        onClick={() => {
                            searchText.length > 0 ?
                                setFilterRestaurants(filterRestaurants?.filter(rest => rest?.info?.avgRating >= 4))
                                : setFilterRestaurants(restaurantList?.filter(rest => rest?.info?.avgRating >= 4))
                        }}>Top rated</button>
                    <AiOutlineClose color='brown' size={18} onClick={() => {
                        searchText.length > 0 ? setFilterRestaurants(restaurantList?.filter(restaurant => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
                            : setFilterRestaurants(restaurantList)
                    }} />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10 '>
                {
                    filterRestaurants?.length !== 0 ?
                        filterRestaurants?.map(restaurant => (
                            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                {restaurant?.info?.loyaltyDiscoverPresentationInfo?.freedelMessage ?
                                    <RestaurantCardGold resData={restaurant} /> || <Skeleton count={10} />
                                    :
                                    <RestaurantCard resData={restaurant} /> || <Skeleton count={10} />
                                }

                            </Link>
                        )
                        )
                        : restaurantList?.map(restaurant => (
                            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                {restaurant?.info?.loyaltyDiscoverPresentationInfo?.freedelMessage ?
                                    <RestaurantCardGold resData={restaurant} /> || <Skeleton count={10} />
                                    :
                                    <RestaurantCard resData={restaurant} /> || <Skeleton count={10} />
                                }

                            </Link>
                        )
                        )
                }
            </div>
        </div>
    )
}

export default Body
