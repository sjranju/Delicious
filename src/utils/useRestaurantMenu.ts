import { useEffect, useState } from "react"
import * as TYPES from '../utils/interfaces'
import { RESTAURANT_ITEM } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";

const useRestaurantMenu = (resId: string) => {
    // const [resInfo, setResInfo] = useState<TYPES.RestaurantDataItem | null>(null)
    // const [offerDetails, setOfferDetails] = useState<TYPES.OfferCards | null>(null)
    // const [restaurantMenu, setRestaurantMenu] = useState<TYPES.Card[] | null>(null)
    // const [topPicks, setTopPicks] = useState<TYPES.Card[] | null>(null)

    const fetchData = async (): Promise<{
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
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['restaurantMenu'],
        queryFn: fetchData
    })

    if (!data || isLoading || isError)
        return null
    const { resInfo, offerDetails, restaurantMenu } = data
    console.log(data.restaurantMenu)
    return { resInfo, offerDetails, restaurantMenu, isLoading }

}
export default useRestaurantMenu