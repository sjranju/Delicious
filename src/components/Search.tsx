import React, { useEffect, useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import * as TYPES from "../utils/interfaces"
import { useQuery } from "@tanstack/react-query"
import { CLOUDINARY_URL, PRE_SEARCH_CLOUDINARY_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useFetchRestaurants from "../utils/useFetchRestaurants"
import usePresearch from "../utils/usePresearch"

const Search = () => {
    const { data } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: useFetchRestaurants
    })
    const [searchText, setSearchText] = useState('')
    const [filterRestaurants, setFilterRestaurants] = useState<TYPES.RestaurantType[]>()
    const inputRef = useRef<HTMLInputElement>(null)
    const { data: presearchData, isLoading: isPresetDataLoading } = usePresearch()

    useEffect(() => {
        inputRef.current && inputRef.current.focus()
    }, [])

    const handleFilterRestaurants = () => {
        if (data && searchText) {
            data?.data.cards.find(restaurant => {
                if (restaurant.card.card.id === TYPES.MainCardID.restaurant_grid_listing) {
                    setFilterRestaurants(restaurant?.card.card.gridElements.infoWithStyle.restaurants.filter(rest =>
                        rest.info.name.toLowerCase().includes(searchText.toLowerCase())))
                }
            })
        }
    }

    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleFilterRestaurants()
        }
    }

    return (
        <div className="flex flex-col justify-center mx-auto w-[860px]">
            <div className='flex flex-row items-center justify-center space-x-8 mb-6'>
                <div className='flex flex-row justify-center items-center mt-8 space-x-2 w-full'>
                    <input ref={inputRef} type='text' placeholder='Search for restaurants'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => handleEnterKeyPress(e)}
                        className='outline-none outline-gray-200 rounded-sm w-full py-2 placeholder:text-gray-500 placeholder:font-semibold pl-2' >
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
            {
                isPresetDataLoading ?
                    <div className=""></div>
                    : filterRestaurants?.length === 0 && <div className="flex flex-col mx-auto space-y-2 px-4">
                        <p className="font-extrabold text-[#3d4152] text-xl ">Popular Cuisines</p>
                        {
                            presearchData?.data.cards.map((card) =>
                                <div className="">
                                    {
                                        card.card.card.id === 'PopularCuisinessearchpage' &&
                                        <div className="flex flex-row justify-start overflow-hidden">
                                            {card.card.card.gridElements.infoWithStyle.info.map((gridElement) =>
                                                <img src={PRE_SEARCH_CLOUDINARY_URL + gridElement.imageId} className="w-20" />
                                            )}
                                        </div>
                                    }
                                </div>

                            )
                        }
                    </div>
            }
            <div className="">
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