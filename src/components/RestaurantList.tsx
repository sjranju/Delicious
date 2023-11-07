import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import RestaurantCard from "./RestaurantCard";
import * as TYPES from "../utils/interfaces"
import React from "react";
import { GET_MORE_RESTAURANTS } from "../utils/constants";
import withOneAccountFreeDelivery from "./withOneAccountFreeDelivery";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import SkeletonRestaurantCard from "./SkeletonRestaurantCard";
import SkeletonMoreRestaurants from "./SkeletonMoreRestaurants";

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
    const LIMIT = 15; // Number of items to load in one page
    const restaurantData = props.card.gridElements.infoWithStyle.restaurants
    const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)
    const pageNo = useRef(10)

    const fetchRestaurants = async (): Promise<TYPES.RestaurantType[]> => {
        const response = await fetch(`${GET_MORE_RESTAURANTS}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lat: 12.979568962372062,
                    lng: 77.50290893018244,
                    // nextOffset: 'COVCELQ4KICozpTDzu7qdjCnEw==',
                    nextOffset: 'COVCELQ4KIDI+/+bvYaXIjCnEzgD',
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
                    _csrf: 'IDAIJflyb28a-dDXleh4DhODHKj1_M3fUXd4JWTI'
                }),
            });
        pageNo.current = pageNo.current + LIMIT
        const jsonValue: LoadMoreRestaurantsReturnType = await response.json() as LoadMoreRestaurantsReturnType;
        return jsonValue.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
    };

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useInfiniteQuery(["restaurants"], () => fetchRestaurants(),
            {
                getNextPageParam: (lastPage, allPages) => {
                    const maxPages = 5
                    if (allPages.length > maxPages) {
                        return null; // No more pages to load
                    }
                    return lastPage.length + 1;
                },
            }
        );

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    const content = [
        ...restaurantData.map(restaurant => (
            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                {
                    restaurant?.info?.loyaltyDiscoverPresentationInfo?.freedelMessage ?
                        <RestaurantCardGold resData={restaurant} />
                        :
                        <RestaurantCard resData={restaurant} />
                }
            </Link>
        )),
    ]

    return (
        <>
            <div className='w-9/12 m-auto mt-6 pb-10'>
                <div className="text-2xl font-bold mb-6">Restaurants with online food delivery</div>
                <div className='grid grid-cols-4 gap-10 items-start'>
                    {content}
                    {isSuccess &&
                        data.pages.map((page) =>
                            page.map((restaurant, i) => {
                                return (
                                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                                    </Link>)

                            })
                        )
                    }
                    {isFetchingNextPage && <SkeletonMoreRestaurants />}
                    {isSuccess && hasNextPage && <div ref={ref} />}
                </div>
            </div>
        </>
    );
};

export default RestaurantList;
