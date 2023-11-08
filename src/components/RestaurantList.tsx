import { useEffect, useState } from "react";
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
import useFilterRestaurants from "../utils/useFilterRestaurants";
import FilterRestaurants from "./FilterRestaurants";

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

interface iFilterRestaurants {
    topRated: boolean
}

const RestaurantList = (props: iRestaurantListProps) => {
    const { ref, inView } = useInView();
    const restaurantData = props.card.gridElements.infoWithStyle.restaurants
    // const RestaurantCardGold = withOneAccountFreeDelivery(RestaurantCard)
    const [filterRestaurants, setFilterRestaurants] = useState<string>('')
    const { fetchRestaurantsInfinite, fetchTopRatedRestaurantsInfinite } = useFilterRestaurants()

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

    return (
        <>
            <div className='w-9/12 m-auto mt-6 pb-10'>
                <div className="text-2xl font-bold mb-4">Restaurants with online food delivery</div>
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
                            className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-xl shadow-md">
                            <span>Ratings 4+</span>
                        </button>
                        <button className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-xl shadow-md">
                            <span>Pure Veg</span>
                        </button>
                        <button className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-xl shadow-md">
                            <span>Offers</span>
                        </button>
                    </div>
                </div>
                <FilterRestaurants resData={props} filterType={filterRestaurants} />
            </div>
        </>
    );
};

export default RestaurantList;
