import { ChangeEvent, MouseEvent, ReactEventHandler, useEffect, useState } from 'react'
import '../styles/body.css'
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

    useEffect(() => {
        fetchData()
    }, [])

    const handleFilterRestaurants = () => {
        setFilterRestaurants(restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))
    }

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API)
        const jsonData = await data.json()
        setRestaurantList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (restaurantList.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='main'>
                <div className='filter'>
                    <div className='search'>
                        <input type='text' placeholder='Search'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)} />
                        <BiSearch size={22} color='brown' onClick={handleFilterRestaurants}
                            className='search-icon' />
                        {searchText.length !== 0 ?
                            <AiOutlineClose color='brown' size={22} onClick={() => {
                                setSearchText('')
                                setFilterRestaurants([])

                            }} />
                            : ''}
                    </div>
                    <div>
                        <button className='top-rated' onClick={() => {
                            let fileteredList = restaurantList.filter(rest => rest.info.avgRating > 4)
                            setRestaurantList(fileteredList)
                        }}>Top rated</button>
                    </div>
                </div>
                <div className='restaurant-card'>
                    {
                        filterRestaurants?.map(restaurant => (
                            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                            </Link>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Body
