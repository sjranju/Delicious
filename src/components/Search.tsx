import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import * as TYPES from "../utils/interfaces"
import { useQuery } from "@tanstack/react-query"
import { CLOUDINARY_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useFetchRestaurants from "../utils/useFetchRestaurants"

const Search = () => {
    const { data } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: useFetchRestaurants
    })
    const [searchText, setSearchText] = useState('')
    const [filterRestaurants, setFilterRestaurants] = useState<TYPES.RestaurantType[]>()

    const handleFilterRestaurants = () => {
        data &&
            data?.data.cards.find(restaurant => {
                if (restaurant.card.card.id === TYPES.MainCardID.restaurant_grid_listing) {
                    setFilterRestaurants(restaurant?.card.card.gridElements.infoWithStyle.restaurants.filter(rest =>
                        rest.info.name.toLowerCase().includes(searchText.toLowerCase())))
                }
            })
    }

    return (
        <div className="">
            <div className='flex flex-row items-center justify-center space-x-8 mb-6'>
                <div className='flex flex-row justify-center items-center mt-8 space-x-2 w-10/12'>
                    <input type='text' placeholder='Search for restaurants'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className='outline-none outline-gray-200 rounded-sm w-8/12 py-2 placeholder:text-gray-500 placeholder:font-semibold pl-2' >
                    </input>

                    <BiSearch size={22} color='brown' onClick={handleFilterRestaurants}
                        data-testid='searchButton' className='search-icon' />

                    {
                        searchText?.length !== 0 ?
                            <AiOutlineClose data-testid='searchClose' color='brown' size={22} onClick={() => {
                                setSearchText('')
                                setFilterRestaurants([])
                            }} />
                            : <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    }
                </div>
            </div>
            <div className="w-7/12 mx-auto">
                {
                    filterRestaurants?.map(restaurant =>
                        <Link key={restaurant.info.id} data-testid='restaurantSearch' to={`/restaurant/${restaurant.info.id}`}>
                            <div className="flex flex-row items-center justify-start space-x-2 hover:bg-sky-50 py-4 px-2 rounded-md">
                                <img src={CLOUDINARY_URL + restaurant.info.cloudinaryImageId} className="w-12 h-12" />
                                <div className="flex flex-col justify-center text-sm">
                                    <p className="text-[17px]">{restaurant.info.name}</p>
                                    <p className="font-light text-gray-500 text-[14px]">Restaurant</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div >
    )
}

export default Search