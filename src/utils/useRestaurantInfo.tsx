import React from 'react'
import * as TYPES from '../utils/interfaces'
import { RESTAURANT_ITEM, RESTAURANT_API } from './constants'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const useRestaurantInfo = (restaurantId: string) => {

    const fetchData = async (resId: string): Promise<{
        resInfo: TYPES.RestaurantDataItem
        offerDetails: TYPES.OfferCards
        restaurantMenu: TYPES.Card
    }> => {
        const res = await axios.get(RESTAURANT_ITEM + resId);
        let resInfo = res.data?.data?.cards[0]
        let offerDetails = res.data?.data?.cards[1]
        let restaurantMenu = res.data.data?.cards[2]
        return { resInfo, offerDetails, restaurantMenu };
    }

    const { data, isLoading } = useQuery(['restaurantMenu', restaurantId], () => fetchData(restaurantId))

    return ({ data, isLoading })
}

export default useRestaurantInfo
