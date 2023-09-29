import React, { useState } from "react"
import * as TYPES from "../utils/interfaces"
import MenuItem from "./MenuItem"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import cloneDeep from "clone-deep";

interface iProps {
    itemCard: {
        "@type": TYPES.CardType.ItemCategory;
        itemCards: TYPES.RestaurantMenuItem[];
        title: string;
        showDetails: boolean;
    }
    resId: string;
    vegOnly: boolean
}

const ItemCategory = (props: iProps) => {
    const { itemCard, resId } = props
    const { restaurantMenu, setRestaurantMenu } = useRestaurantMenu(resId)
    const [showDetails, setShowDetails] = useState<boolean>(false)

    const handleCategoryClick = (title: string) => {

        let restaurantMenuClone: TYPES.Card[] = cloneDeep(restaurantMenu!)
        restaurantMenuClone?.find(menu => {
            menu?.card?.card["@type"] === TYPES.CardType.ItemCategory ?
                menu?.card?.card?.title === title ?
                    (
                        menu?.card?.card?.showDetails === undefined ?
                            menu.card.card.showDetails = true
                            : menu.card.card.showDetails = false
                    )
                    : ''
                : menu?.card?.card["@type"] === TYPES.CardType.NestedItemCategory ?
                    menu?.card?.card?.title === title ?
                        (
                            menu?.card?.card?.showDetails === undefined ?
                                menu.card.card.showDetails = true
                                : menu.card.card.showDetails = false
                        )
                        : ''
                    : ''
        })
        setShowDetails(!showDetails)
        setRestaurantMenu(restaurantMenuClone)
        // if(restaurantMenuClone["@type"]===CardType.ItemCategory){
        //   restaurantMenuClone.title===title? restaurantMenuClone.
        // }
        // if (restaurantMenuClone) {
        //   restaurantMenuClone["@type"].includes('itemCategory')? restaurantMenuClone["@type"]
        //   restaurantMenuClone?.find(menu => menu?.card?.card?.title === title)?.card?.card?.showDetails === true ?
        //     restaurantMenuClone.find(menu => menu.card.card.title === title)!.card.card.showDetails = false
        //     : restaurantMenuClone.find(menu => menu.card.card.title === title)!.card.card.showDetails = true
        //   setVegOnly(restaurantMenuClone!)
        // }
    }

    return (
        <div key={itemCard.title} className="">
            <button className="font-bold text-neutral-700 flex flex-row items-center justify-between w-full px-6 py-4 bg-slate-200 rounded-lg shadow-lg"
                onClick={() => handleCategoryClick(itemCard.title)}>
                {
                    itemCard?.title ?
                        <>
                            <div className="">
                                {itemCard?.title + '(' + itemCard?.itemCards?.length + ')'}
                            </div>
                            <span className="">
                                {itemCard?.showDetails === true ?
                                    <IoIosArrowUp size={22} />
                                    : <IoIosArrowDown size={22} />
                                }
                            </span>
                        </>
                        : ''
                }
            </button>
            {
                showDetails ?
                    <MenuItem itemCard={itemCard?.itemCards} />
                    : ''
            }

        </div>
    )
}

export default ItemCategory