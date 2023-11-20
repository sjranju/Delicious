import React, { useRef } from 'react'
import * as TYPES from "../utils/interfaces"
import { FILTERS, GET_MORE_RESTAURANTS } from './constants';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';


const useFetchRestaurantsInfinite = (filterRestaurants: string, pageOffset: TYPES.PageOffset) => {
    const LIMIT = 15; // Number of items to load in one page
    const pageNo = useRef(10)
    // console.log('filterRestaurants in useFetchRestaurantsInfinite', filterRestaurants)
    const fetchRestaurantsInfinite = async (filterType: string, pageParam: TYPES.PageOffset): Promise<TYPES.UPDATED_RESTAURANTS_LIST> => {
        console.log('pageParam.widgetOffset', pageParam)
        const response = await axios.post(`${GET_MORE_RESTAURANTS}`,
            {
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
                seoParams: {
                    apiName: "FoodHomePage",
                    pageType: "FOOD_HOMEPAGE",
                    seoUrl: "https://www.swiggy.com/",
                },
                page_type: "DESKTOP_WEB_LISTING",
                nextOffset: pageParam.nextOffset,
                widgetOffset: pageParam.widgetOffset,
                _csrf: '6x6Vpr2CpXc1-Ot7wrNbpkMhMQv_yM0AuCXcEQFU'
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

        )
        pageNo.current = pageNo.current + LIMIT
        console.log('jsonValue', response.data)
        return response.data
    };

    const query =
        useInfiniteQuery(["restaurants", filterRestaurants], ({ pageParam = pageOffset }) => {
            console.log('executing useInfiniteQuery ')
            return fetchRestaurantsInfinite(filterRestaurants, pageParam as TYPES.PageOffset)
        },
            {
                getNextPageParam: (lastPage, allPages) => {
                    const maxPages = 5
                    if (allPages.length > maxPages) {
                        return null; // No more pages to load
                    }
                    console.log('lastPage.pageOffset', lastPage.data.pageOffset)
                    return lastPage.data.pageOffset;
                }
            }
        );

    return query
}

export default useFetchRestaurantsInfinite
