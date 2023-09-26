import { useEffect, useState } from "react"
import * as TYPES from '../utils/interfaces'
import { RESTAURANT_ITEM, CLOUDINARY_URL, COUPON_URL } from "../utils/constants";

const useRestaurantMenu = (resId: string) => {
    const [resInfo, setResInfo] = useState<TYPES.RestaurantDataItem | null>(null)
    const [offerDetails, setOfferDetails] = useState<TYPES.OfferCards | null>(null)
    const [restaurantMenu, setRestaurantMenu] = useState<TYPES.RestaurantMenu | null>(null)
    const [topPicks, setTopPicks] = useState<TYPES.MenuCarousel[] | null>(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let result = await fetch(RESTAURANT_ITEM + resId)
        let json = await result.json()
        setResInfo(json.data.cards[0])
        setOfferDetails(json.data.cards[1].card);
        setTopPicks(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1])
        setRestaurantMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR)
    }

    return { resInfo, offerDetails, topPicks, restaurantMenu, setRestaurantMenu, setOfferDetails, setResInfo, setTopPicks }
}

export default useRestaurantMenu