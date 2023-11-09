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
    const LIMIT = 15; // Number of items to load in one page
    const pageNo = useRef(10)

    const fetchRestaurantsInfinite = async (filterType: string): Promise<TYPES.RestaurantType[]> => {
        const response = await fetch(`${GET_MORE_RESTAURANTS}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filters: filterType === 'topRated' ? FILTERS.TOP_RATED : filterType === 'pureVeg' ? FILTERS.PURE_VEG : {},
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

    console.log(filterRestaurants)

    return (
        <>
            <div className='w-9/12 m-auto mt-6 pb-10'>
                <div className="text-2xl font-bold mb-4">Restaurants with online food delivery</div>
                {filterRestaurants !== '' && isLoading ? <SkeletonFilterRestaurants />
                    :
                    <div>
                        <div className="flex flex-row space-x-4 text-black/75 mb-4 text-sm">
                            <button className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-xl shadow-md">
                                <span>Filter</span>
                                <BsFilter color="black" size={20} className="mt-1" />
                            </button>
                            <button className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-xl shadow-md">
                                <span>Sort By</span>
                                <IoIosArrowDown color="black" size={20} className="mt-1" />
                            </button>
                            <button onClick={() => setFilterRestaurants('topRated')}
                                className={`flex flex-row space-x-1 items-center justify-center border px-2 py-1 rounded-xl shadow-md ${filterRestaurants === 'topRated' ? 'border-black' : 'border-[#E2E2E7] '}`}>
                                <span>Ratings 4+</span>
                                {filterRestaurants === 'topRated' && <AiOutlineClose className="font-bold mt-[1px]" onClick={(e) => handleClearFilter(e)} />}
                            </button>
                            <button onClick={() => setFilterRestaurants('pureVeg')}
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-xl shadow-md">
                                <span>Pure Veg</span>
                                {filterRestaurants === 'pureVeg' && <AiOutlineClose className="font-bold mt-[1px]" onClick={(e) => handleClearFilter(e)} />}
                            </button>
                            <button className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-xl shadow-md">
                                <span>Offers</span>
                            </button>
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
