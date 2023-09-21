import { ChangeEvent, MouseEvent, ReactEventHandler, useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { RESTAURANT_API } from '../utils/constants'

interface RestaurantType {
    info: {
        id: string;
        name: string;
        cloudinaryImageId: string;
        locality: string;
        areaName: string;
        costForTwo: string;
        cuisines: string[];
        avgRating: number;
        favourite: boolean;
        feeDetails: {
            restaurantId: string;
            fees: {
                name: string;
                fee?: number;
            }[];
            totalFee?: number;
        };
        parentId: string;
        avgRatingString: string;
        totalRatingsString: string;
        sla: {
            deliveryTime: number;
            lastMileTravel: number;
            serviceability: string;
            slaString: string;
            lastMileTravelString: string;
            iconType: string;
        };
        availability: {
            nextCloseTime: string;
            opened: boolean;
        };
        badges: any;
        select: boolean;
        isOpen: boolean;
        type: string;
        badgesV2: {
            entityBadges: {
                imageBased: any;
                textBased: any;
                textExtendedBadges: any;
            };
        };
        loyaltyDiscoverPresentationInfo: {
            logoCtx: {
                text: string;
                logo: string;
            };
            freedelMessage: string;
        };
        orderabilityCommunication: {
            title: any;
            subTitle: any;
            message: any;
            customIcon: any;
        };
        differentiatedUi: {
            displayType: string;
            differentiatedUiMediaDetails: {
                mediaType: string;
                lottie: any;
                video: any;
            };
        };
        reviewsSummary: any;
        displayType: string;
        restaurantOfferPresentationInfo: any;
    };
    analytics: {
        context: string;
    };
    cta: {
        link: string;
        text: string;
        type: string;
    };
    widgetId: string;
}


const Body = () => {

    const [restaurantList, setRestaurantList] = useState<RestaurantType[]>([])
    const [searchText, setSearchText] = useState('')
    const [filterRestaurants, setFilterRestaurants] = useState<RestaurantType[]>([])
    const [topRatedRestaurants, setTopRatedRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const handleFilterRestaurants = () => {
        // searchText.length > 0 && setFilterRestaurants(restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))
        // topRatedRestaurants.length > 0 && setFilterRestaurants(filterRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))
        setFilterRestaurants(filterRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))

    }

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API)
        const jsonData = await data.json()
        setRestaurantList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (restaurantList.length === 0) ? <Shimmer /> : (
        <div className='flex flex-col justify-center items-center space-y-8 mt-8 bg-slate-50'>
            <div className='flex flex-row items-center justify-center space-x-8'>
                <div className='flex flex-row space-x-2'>
                    <input type='text' placeholder='Search'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className='outline-none outline-gray-200 rounded-sm ' />
                    <BiSearch size={22} color='brown' onClick={handleFilterRestaurants}
                        className='search-icon' />
                    {searchText.length !== 0 ?
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
                                setFilterRestaurants(filterRestaurants.filter(rest => rest.info.avgRating >= 4))
                                : setFilterRestaurants(restaurantList.filter(rest => rest.info.avgRating >= 4))
                        }}>Top rated</button>
                    <AiOutlineClose color='brown' size={18} onClick={() => {
                        searchText.length > 0 ? setFilterRestaurants(restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))
                            : setFilterRestaurants(restaurantList)
                    }} />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10 '>
                {
                    filterRestaurants.length !== 0 ?
                        filterRestaurants.map(restaurant => (
                            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                            </Link>
                        )
                        )
                        : restaurantList?.map(restaurant => (
                            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                            </Link>
                        )
                        )
                }
            </div>
        </div>
    )
}

export default Body
