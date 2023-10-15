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

const RestaurantList = (props: iRestaurantListProps) => {
    const { restaurants } = props.card.gridElements.infoWithStyle
    const [filterRestaurants, setFilterRestaurants] = useState<TYPES.MainContent>()
    const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)
    console.log('restaurants', restaurants)

    return (
        <>
            <div className=' w-9/12 m-auto'>
                <div className="text-2xl font-bold mb-8">Restaurants with online food delivery</div>
                {/* <div className='flex flex-row items-center justify-center space-x-8'>
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
                                data && setFilterRestaurants(data.find(cardData => cardData.card.card.id === TYPES.MainCardID.restaurant_grid_listing))

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
                </div> */}
                {
                    <div className='grid grid-cols-4 gap-10 items-start'>
                        {/* {filterRestaurants?.length !== 0 ?
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
                            :  */}
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

export default RestaurantList