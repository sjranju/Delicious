import React, { useContext, useEffect } from 'react'
import { BsFilter } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { filterRestaurantsContext } from '../context/FilterRestaurantsContext'
import { useInfiniteQuery } from '@tanstack/react-query'
import useFilterRestaurants from '../utils/useFilterRestaurants'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import * as TYPES from "../utils/interfaces"
import SkeletonMoreRestaurants from '../Shimmer/SkeletonMoreRestaurants'

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
}

interface iFetchRestaurantsParams {
    pageParam?: string;
}

const FilterRestaurants = (props: { resData: iRestaurantListProps, filterType: string }) => {
    const restaurantData = props.resData.card.gridElements.infoWithStyle.restaurants
    const filterType = props.filterType
    const { fetchRestaurantsInfinite, fetchTopRatedRestaurantsInfinite } = useFilterRestaurants()
    const { ref, inView } = useInView();

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
        useInfiniteQuery(["restaurants", filterType], ({ pageParam }: iFetchRestaurantsParams) => {
            return filterType === 'topRated'
                ? fetchTopRatedRestaurantsInfinite(pageParam!)
                : fetchRestaurantsInfinite()
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
            filterType === 'topRated' ?
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
        <div className='grid grid-cols-4 gap-10 items-start'>
            {content}
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
            {isLoading && <SkeletonMoreRestaurants />}
            {isFetchingNextPage && <SkeletonMoreRestaurants />}
            {isSuccess && hasNextPage && <div ref={ref} />}
        </div>
    )
}

export default FilterRestaurants
