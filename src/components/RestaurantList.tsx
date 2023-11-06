import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import RestaurantCard from "./RestaurantCard";
import * as TYPES from "../utils/interfaces"
import React from "react";
import { GET_MORE_RESTAURANTS } from "../utils/constants";
import withOneAccountFreeDelivery from "./withOneAccountFreeDelivery";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

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
    const [page, setPage] = useState(9)
    const restaurantData = props.card.gridElements.infoWithStyle.restaurants
    const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)

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
                    nextOffset: 'COVCELQ4KICozpTDzu7qdjCnEw==',
                    seoParams: {
                        apiName: "FoodHomePage",
                        pageType: "FOOD_HOMEPAGE",
                        seoUrl: "https://www.swiggy.com/",
                    },
                    widgetOffset: {
                        // Include your widgetOffset values here
                        NewListingView_Topical_Fullbleed: '',
                        NewListingView_category_bar_chicletranking_TwoRows: '',
                        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
                        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: String(page),
                    },
                }),
            });
        const jsonValue: LoadMoreRestaurantsReturnType = await response.json() as LoadMoreRestaurantsReturnType;
        return jsonValue.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
    };

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useInfiniteQuery(["restaurants"], () => fetchRestaurants(), {
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = lastPage.length === page ? page + LIMIT : undefined;
                nextPage && setPage(nextPage)
                return nextPage;
            },
        });
    // {
    //     getNextPageParam: (lastPage, allPages) => {
    //         const nextPage = lastPage.length === page ? allPages.length + 1 : undefined;
    //         return nextPage;
    //     },
    // }

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
            <div className='w-9/12 m-auto pt-8'>
                <div className="text-2xl font-bold mb-8">Restaurants with online food delivery</div>
                <div className='grid grid-cols-4 gap-10 items-start'>
                    {content}
                    {isFetchingNextPage && <h3>Loading...</h3>}
                    {isSuccess && hasNextPage && <div ref={ref} />}
                    {isSuccess &&
                        data.pages.map((page) =>
                            page.map((restaurant, i) => {
                                if (page.length === i + 1) {
                                    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                                }
                                return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                            })
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default RestaurantList;
