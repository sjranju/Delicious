import React, { useRef } from 'react'
import * as TYPES from "../utils/interfaces"
import { FILTERS, GET_MORE_RESTAURANTS } from './constants';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { InView } from 'react-intersection-observer';


const useFetchRestaurantsInfinite = (filterRestaurants: string, pageOffset: TYPES.PageOffset) => {

    const fetchRestaurantsInfinite = async (filterType: string, pageParam: TYPES.PageOffset): Promise<TYPES.UPDATED_RESTAURANTS_LIST> => {
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
                                    : filterType === 'ratings4' ?
                                        FILTERS.RATINGS4
                                        : filterType === 'deliveryTime' ?
                                            FILTERS.DELIVERY_TIME
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
        return response.data
    };

    const query =
        useInfiniteQuery(["restaurants", filterRestaurants], ({ pageParam = pageOffset }) =>
            fetchRestaurantsInfinite(filterRestaurants, pageParam as TYPES.PageOffset),
            {
                refetchOnWindowFocus: false,
                getNextPageParam: (lastPage, allPages) => {
                    const maxPages = 5
                    if (allPages.length >= maxPages) {
                        return undefined; // No more pages to load
                    }
                    return lastPage.data.pageOffset;
                }
            }
        );

    return query
}

export default useFetchRestaurantsInfinite
