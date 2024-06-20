import React from 'react'
import * as TYPES from '../utils/interfaces'
import { GET_RESTAURANT_ITEM_URL, GET_RESTAURANTS_URL } from './constants'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const useRestaurantInfo = (restaurantId: string) => {

    const fetchData = async (resId: string): Promise<{
        resInfo: TYPES.RestaurantDataItem
        offerDetails: TYPES.OfferCards
        restaurantMenu: TYPES.Card
    }> => {
        const res = await axios.get(GET_RESTAURANTS_URL + resId);
        console.log(res)
        let resInfo = res.data?.data?.cards[2]
        let offerDetails = res.data?.data?.cards[3]
        let restaurantMenu = res.data.data?.cards[4]
        return { resInfo, offerDetails, restaurantMenu };
    }

    const { data, isLoading } = useQuery(['restaurantMenu', restaurantId], () => fetchData(restaurantId))

    return ({ data, isLoading })
}

export default useRestaurantInfo
