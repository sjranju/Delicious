import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import * as TYPES from "../utils/interfaces"
import { useQuery } from "@tanstack/react-query"
import { fetchRestaurants } from "../utils/fetchRestaurantDetails"
import { CLOUDINARY_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const Search = () => {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: fetchRestaurants
    })
    const [searchText, setSearchText] = useState('')
    const [filterRestaurants, setFilterRestaurants] = useState<TYPES.RestaurantType[]>()

    const handleFilterRestaurants = () => {
        data &&
            data?.find(restaurant =>
                restaurant.card.card.id === TYPES.MainCardID.restaurant_grid_listing &&
                setFilterRestaurants(restaurant?.card.card.gridElements.infoWithStyle.restaurants.filter(rest =>
                    rest.info.name.toLowerCase().includes(searchText.toLowerCase())))
            )
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
                        className='search-icon' />
                    {searchText?.length !== 0 ?
                        <AiOutlineClose color='brown' size={22} onClick={() => {
                            setSearchText('')
                            data && data.find(dataCard => {
                                if (dataCard.card.card.id === TYPES.MainCardID.restaurant_grid_listing) {
                                    setFilterRestaurants(dataCard.card.card.gridElements.infoWithStyle.restaurants)
                                }
                            })
                        }} />
                        : <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    }
                </div>
                {/* <div className='flex items-center justify-center p-1 rounded-lg focus-within:bg-red-200  bg-slate-200'>
                    <button className=' '
                        onClick={() => {
                            searchText.length > 0 ?
                                setFilterRestaurants(filterRestaurants?.card.card["@type"].filter(rest => rest?.info?.avgRating >= 4))
                                : data && setFilterRestaurants(data?.filter(rest => rest?.info?.avgRating >= 4))
                        }}>Top rated</button>
                    <AiOutlineClose color='brown' size={18} onClick={() => {
                        // searchText.length > 0 ? data && setFilterRestaurants(data?.filter(restaurant => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
                        searchText.length > 0 ? data && data.find(dataCard => {
                            if (dataCard.card.card.id === TYPES.MainCardID.restaurant_grid_listing) {
                                setFilterRestaurants(
                                    dataCard.card.card.gridElements.infoWithStyle.restaurants.filter(restaurant =>
                                        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
                                )
                            }
                        })
                            : data && data.find(dataCard => {
                                if (dataCard.card.card.id === TYPES.MainCardID.restaurant_grid_listing) {
                                    setFilterRestaurants(dataCard.card.card.gridElements.infoWithStyle.restaurants)
                                }
                            })
                    }} />
                </div> */}
            </div>
            <div className="w-7/12 mx-auto">
                {filterRestaurants?.map(restaurant =>
                    <Link to={`/restaurant/${restaurant.info.id}`}>
                        <div className="flex flex-row items-center justify-start space-x-2 hover:bg-sky-50 py-4 px-2 rounded-md">
                            <img src={CLOUDINARY_URL + restaurant.info.cloudinaryImageId} className="w-12 h-12" />
                            <div className="flex flex-col justify-center text-sm">
                                <p className="text-[17px]">{restaurant.info.name}</p>
                                <p className="font-light text-gray-500 text-[14px]">Restaurant</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div >
    )
}

export default Search