import { useEffect, useState } from "react"
import * as TYPES from '../utils/interfaces'
import { RESTAURANT_ITEM, CLOUDINARY_URL, COUPON_URL } from "../utils/constants";

const useRestaurantMenu = (resId: string) => {
    const [resInfo, setResInfo] = useState<TYPES.RestaurantDataItem | null>(null)
    const [offerDetails, setOfferDetails] = useState<TYPES.OfferCards | null>(null)
    const [restaurantMenu, setRestaurantMenu] = useState<TYPES.Card[] | null>(null)
    const [topPicks, setTopPicks] = useState<TYPES.Card[] | null>(null)
    const [vegOnly, setVegOnly] = useState<TYPES.Card[] | null>(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let result = await fetch(RESTAURANT_ITEM + resId)
        let json = await result.json()
        setResInfo(json?.data?.cards[0])
        setOfferDetails(json?.data?.cards[1]?.card);
        console.log('json', json.data)
        setTopPicks(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1])
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setVegOnly(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

        // if(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.vegOnlyDetails?.title?.includes('vegetarian')){
        //     setVegOnly(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
        // }
        // if(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.corousel.length>0 || json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.corousel.length>0){
        // setTopPicks(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1])      
        // }
        // setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
    }
    // console.log(restaurantMenu)

    return { resInfo, offerDetails, topPicks, restaurantMenu, setRestaurantMenu, setOfferDetails, setResInfo, setTopPicks, vegOnly, setVegOnly }
}

export default useRestaurantMenu