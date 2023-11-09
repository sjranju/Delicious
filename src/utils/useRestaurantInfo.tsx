import React from 'react'
import * as TYPES from '../utils/interfaces'
import { RESTAURANT_ITEM, RESTAURANT_API } from './constants'
import { useQuery } from '@tanstack/react-query'


const useRestaurantInfo = (restaurantId: string) => {

    const fetchData = async (resId: string): Promise<{
        resInfo: TYPES.RestaurantDataItem
        offerDetails: TYPES.OfferCards
        restaurantMenu: TYPES.Card[]
    }> => {
        const res = await fetch(RESTAURANT_ITEM + resId);
        const jsonData = await res.json();
        let offerDetails = jsonData?.data?.cards[1]?.card;
        let restaurantMenu = jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
        let resInfo = jsonData?.data?.cards[0];
        return { resInfo, offerDetails, restaurantMenu };
    }

    const { data, isLoading } = useQuery(['restaurantMenu', restaurantId], () => fetchData(restaurantId))

    return ({ data, isLoading })
}

export default useRestaurantInfo
