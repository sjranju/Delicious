import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import RestaurantCard from "./RestaurantCard";
import * as TYPES from "../utils/interfaces"
import React from "react";
import { Link } from "react-router-dom";
import SkeletonMoreRestaurants from "../Shimmer/SkeletonMoreRestaurants";
import { BsFilter } from 'react-icons/bs'
import { IoIosArrowDown } from "react-icons/io";
import SkeletonFilterRestaurants from "../Shimmer/SkeletonFilterRestaurants";
import { AiOutlineClose } from "react-icons/ai";
import useFetchRestaurantsInfinite from "../utils/useFetchRestaurantsInfinite";

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
    },
    offset: TYPES.PageOffset;
}


const RestaurantList = (props: iRestaurantListProps) => {
    const { ref, inView } = useInView();
    const restaurantData = props.card?.gridElements?.infoWithStyle?.restaurants
    const pageOffset = props.offset
    const [filterRestaurants, setFilterRestaurants] = useState<string>('')
    const [sortBy, setSortBy] = useState<boolean>(false)
    const sortDropDownRef = useRef<HTMLDivElement>(null)
    const { data, isSuccess, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useFetchRestaurantsInfinite(filterRestaurants, pageOffset)

    useEffect(() => {

        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }

    }, [inView]);

    useEffect(() => {
        const handleClickOutsideSortBy = (event: MouseEvent) => {
            if (sortDropDownRef.current && !sortDropDownRef.current.contains(event.target as Node)) {
                setSortBy(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutsideSortBy)

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSortBy)
        }
    }, [])

    const content = [
        ...restaurantData.map(restaurant => (
            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                <RestaurantCard resData={restaurant} />
            </Link>
        )),
    ]

    const handleClearFilter = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        setFilterRestaurants('')
    }

    return (
        <>
            <div className='w-9/12 m-auto mt-6 pb-10'>
                <div className="lg:text-2xl text-lg font-bold mb-4">Restaurants with online food delivery</div>
                {filterRestaurants !== '' && isLoading ? <SkeletonFilterRestaurants />
                    :
                    <div>
                        <div className="relative flex flex-row space-x-4 text-black/75 mb-6 lg:text-sm text-xs">
                            <button type='button' onClick={() => setSortBy(true)}
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md">
                                <span>{
                                    filterRestaurants === 'deliveryTime' ?
                                        'Delivery Time'
                                        : filterRestaurants === 'lowToHigh' ?
                                            'Cost: Low to High'
                                            : filterRestaurants === 'highToLow' ?
                                                'Cost: High to Low'
                                                : filterRestaurants === 'ratings4' ?
                                                    'Rating'
                                                    : 'Sort By'
                                }</span>
                                <IoIosArrowDown color="black" size={20} className="mt-1" />
                            </button>
                            <button type='button' onClick={() => setFilterRestaurants('topRated')}
                                className={`flex flex-row space-x-1 items-center justify-center border px-2 py-1 rounded-2xl shadow-md ${filterRestaurants === 'topRated' ? 'border-black' : 'border-[#E2E2E7] '}`}>
                                <span>Ratings 4+</span>
                                {filterRestaurants === 'topRated' && <AiOutlineClose className="font-bold mt-[1px]" onClick={(e) => handleClearFilter(e)} />}
                            </button>
                            <button type='button' onClick={() => setFilterRestaurants('pureVeg')}
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md">
                                <span>Pure Veg</span>
                                {filterRestaurants === 'pureVeg' && <AiOutlineClose className="font-bold mt-[1px]" onClick={(e) => handleClearFilter(e)} />}
                            </button>
                            <button type='button' onClick={() => setFilterRestaurants('fastDelivery')}
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md">
                                <span>Fast Delivery</span>
                                {filterRestaurants === 'fastDelivery' && <AiOutlineClose className="font-bold mt-[1px]" onClick={(e) => handleClearFilter(e)} />}
                            </button>
                            {
                                sortBy &&
                                <div ref={sortDropDownRef} className="absolute left-16 z-10 flex flex-col space-y-4 w-[175px] bg-white p-4 rounded-lg border font-medium text-black/60 shadow-lg">
                                    <div className="flex flex-row-reverse flex-wrap justify-between">
                                        <input type="radio" id="relevance" checked={filterRestaurants === ''} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('')
                                            setSortBy(false)
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 ' />
                                        <label htmlFor='relevance'>Relevance (Default) </label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='deliveryTime' checked={filterRestaurants === 'deliveryTime'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('deliveryTime')
                                            setSortBy(false)
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600' />
                                        <label htmlFor='deliveryTime'>Delivery Time</label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='rating' checked={filterRestaurants === 'ratings4'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('ratings4')
                                            setSortBy(false)
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none' />
                                        <label htmlFor='rating'>Rating</label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='lowToHigh' checked={filterRestaurants === 'lowToHigh'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('lowToHigh')
                                            setSortBy(false)
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none' />
                                        <label htmlFor='lowToHigh'>Cost: Low to High</label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='highToLow' checked={filterRestaurants === 'highToLow'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('highToLow')
                                            setSortBy(false)
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none' />
                                        <label htmlFor='highToLow'>Cost: High to Low</label>
                                    </div>
                                    {/* <div className="border-t pt-2">
                                        <button type='button' className="flex items-start text-red-600 font-bold "
                                            onClick={() => setSortBy(false)}>
                                            Apply
                                        </button>
                                    </div> */}
                                </div>
                            }
                        </div>
                    </div>
                }
                <div className='grid lg:grid-cols-4 gap-10 items-start md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                    {filterRestaurants === '' && content}
                    {isSuccess &&
                        (data.pages.map((page) =>
                            page?.data.cards?.map((card, i) => {
                                return card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurant) => (
                                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                                    </Link>
                                ))
                            })
                        ))

                    }
                </div>
                {isFetchingNextPage && <SkeletonMoreRestaurants />}
                {isSuccess && hasNextPage && <div ref={ref} />}
            </div>
        </>
    );
};

export default RestaurantList;
