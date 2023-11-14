import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import RestaurantCard from "./RestaurantCard";
import * as TYPES from "../utils/interfaces"
import React from "react";
import withOneAccountFreeDelivery from "./withOneAccountFreeDelivery";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import SkeletonMoreRestaurants from "../Shimmer/SkeletonMoreRestaurants";
import { BsFilter } from 'react-icons/bs'
import { IoIosArrowDown } from "react-icons/io";
import { FILTERS, GET_MORE_RESTAURANTS } from "../utils/constants";
import SkeletonFilterRestaurants from "../Shimmer/SkeletonFilterRestaurants";
import { AiOutlineClose } from "react-icons/ai";

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

interface LoadMoreRestaurantsReturnType {
    data: {
        cards: {
            card: {
                card: {
                    id: TYPES.MainCardID.restaurant_grid_listing
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
        }[]
    }
}

const RestaurantList = (props: iRestaurantListProps) => {
    const { ref, inView } = useInView();
    const restaurantData = props.card.gridElements.infoWithStyle.restaurants
    // const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)
    const [filterRestaurants, setFilterRestaurants] = useState<string>('')
    const [sortBy, setSortBy] = useState<boolean>(false)
    const LIMIT = 15; // Number of items to load in one page
    const pageNo = useRef(10)
    const sortDropDownRef = useRef<HTMLDivElement>(null)

    const fetchRestaurantsInfinite = async (filterType: string): Promise<TYPES.RestaurantType[]> => {
        const response = await fetch(`${GET_MORE_RESTAURANTS}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filters: filterType === 'topRated' ? FILTERS.TOP_RATED
                        : filterType === 'pureVeg' ?
                            FILTERS.PURE_VEG
                            : filterType === 'fastDelivery' ?
                                FILTERS.FAST_DELIVERY
                                : filterType === 'highToLow' ?
                                    FILTERS.HIGH_TO_LOW
                                    : filterType === 'lowToHigh' ?
                                        FILTERS.LOW_TO_HIGH
                                        : {},
                    lat: 12.979568962372062,
                    lng: 77.50290893018244,
                    nextOffset: 'COVCELQ4KIDYjY+izN/eaDCnEw==',
                    // nextOffset: 'COVCELQ4KIDI+/+bvYaXIjCnEzgD',
                    seoParams: {
                        apiName: "FoodHomePage",
                        pageType: "FOOD_HOMEPAGE",
                        seoUrl: "https://www.swiggy.com/",
                    },
                    widgetOffset: {
                        "NewListingView_Topical_Fullbleed": "",
                        "NewListingView_Topical_Version2": "",
                        "NewListingView_category_bar_chicletranking_TwoRows": "",
                        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                        "Restaurant_Group_WebView_PB_Theme": "",
                        "Restaurant_Group_WebView_SEO_PB_Theme": "",
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": String(pageNo.current),
                        "inlineFacetFilter": "",
                        "restaurantCountWidget": ""
                    },
                    // _csrf: 'IDAIJflyb28a-dDXleh4DhODHKj1_M3fUXd4JWTI'
                    _csrf: '6x6Vpr2CpXc1-Ot7wrNbpkMhMQv_yM0AuCXcEQFU'
                }),
            });
        pageNo.current = pageNo.current + LIMIT
        const jsonValue: LoadMoreRestaurantsReturnType = await response.json() as LoadMoreRestaurantsReturnType;
        console.log(jsonValue)
        return jsonValue.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
    };

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
        useInfiniteQuery(["restaurants", filterRestaurants], () => {
            return fetchRestaurantsInfinite(filterRestaurants)
        },
            {
                getNextPageParam: (lastPage, allPages) => {
                    const maxPages = 5
                    if (allPages.length > maxPages) {
                        return null; // No more pages to load
                    }
                    return lastPage.length + 1;
                }
            }
        );

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

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
            filterRestaurants === 'topRated' ?
                restaurant.info.avgRating > 4 &&
                <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                    <RestaurantCard resData={restaurant} />
                </Link>
                : <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
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
                <div className="text-2xl font-bold mb-4">Restaurants with online food delivery</div>
                {filterRestaurants !== '' && isLoading ? <SkeletonFilterRestaurants />
                    :
                    <div>
                        <div className="relative flex flex-row space-x-4 text-black/75 mb-6 text-sm">
                            <button type='button' className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md">
                                <span>Filter</span>
                                <BsFilter color="black" size={20} className="mt-1" />
                            </button>
                            <button type='button' onClick={() => setSortBy(true)}
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md">
                                <span>{
                                    filterRestaurants === 'fastDelivery' ?
                                        'Delivery Time'
                                        : filterRestaurants === 'lowToHigh' ?
                                            'Cost: Low to High'
                                            : filterRestaurants === 'highToLow' ?
                                                'Cost: High to Low'
                                                : filterRestaurants === 'topRated' ?
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
                                <div ref={sortDropDownRef} className="absolute left-16 z-10 flex flex-col space-y-4 w-[170px] bg-white p-4 rounded-lg border font-medium text-black/60 shadow-lg">
                                    <div className="flex flex-row-reverse flex-wrap justify-between">
                                        <input type="radio" id="relevance" checked={filterRestaurants === ''} value={filterRestaurants} onChange={() => { setFilterRestaurants('') }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 ' />
                                        <label htmlFor='relevance'>Relevance (Default) </label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='deliveryTime' checked={filterRestaurants === 'fastDelivery'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('fastDelivery')
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600' />
                                        <label htmlFor='deliveryTime'>Delivery Time</label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='rating' checked={filterRestaurants === 'topRated'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('topRated')
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none' />
                                        <label htmlFor='rating'>Rating</label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='lowToHigh' checked={filterRestaurants === 'lowToHigh'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('lowToHigh')
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none' />
                                        <label htmlFor='lowToHigh'>Cost: Low to High</label>
                                    </div>
                                    <div className="flex flex-row-reverse justify-between">
                                        <input type="radio" id='highToLow' checked={filterRestaurants === 'highToLow'} value={filterRestaurants} onChange={() => {
                                            setFilterRestaurants('highToLow')
                                        }}
                                            className='w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none' />
                                        <label htmlFor='highToLow'>Cost: High to Low</label>
                                    </div>
                                    <div className="border-t pt-2">
                                        <button type='button' className="flex items-start text-red-600 font-bold "
                                            onClick={() => setSortBy(false)}>
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <div className='grid grid-cols-4 gap-10 items-start'>
                    {filterRestaurants === '' && content}
                    {isSuccess &&
                        data.pages.map((page) =>
                            page.map((restaurant, i) => {
                                return (
                                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                                    </Link>
                                )
                            })
                        )
                    }
                </div>
                {isFetchingNextPage && <SkeletonMoreRestaurants />}
                {isSuccess && hasNextPage && <div ref={ref} />}
            </div>
        </>
    );
};

export default RestaurantList;
