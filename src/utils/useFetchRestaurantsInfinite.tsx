import * as TYPES from "../utils/interfaces"
import { FILTERS, GET_MORE_RESTAURANTS } from './constants';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

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
                lat: '12.96340',
                lng: '77.58550',
                seoParams: {
                    apiName: "FoodHomePage",
                    pageType: "FOOD_HOMEPAGE",
                    seoUrl: "https://www.swiggy.com/",
                },
                page_type: "DESKTOP_WEB_LISTING",
                nextOffset: pageParam.nextOffset,
                widgetOffset: pageParam.widgetOffset,
                _csrf: 'LfONs1IREg5A-CveUY2pb5y8bxKsUPVJfQAetdKo'
            },
            // {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // }
        )
        console.log('Infinite query', response.data)
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
