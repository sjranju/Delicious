import React, { useState } from "react"
import * as TYPES from '../utils/interfaces'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import NestedMenuItem from "./NestedMenuItem"
import cloneDeep from "clone-deep"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuItem from "./MenuItem"

interface iNestedItemCategoryProps {
    vegOnly: boolean
    nestedCategories: {
        "@type": TYPES.CardType.NestedItemCategory;
        categories: {
            itemCards: TYPES.RestaurantMenuItem[];
            title: string;
        }[];
        title: string;
        showDetails: boolean
    }
    resId: string
}

const NestedItemCategory = (props: iNestedItemCategoryProps) => {

    const { vegOnly, nestedCategories, resId } = props
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const { restaurantMenu, setRestaurantMenu } = useRestaurantMenu(resId)

    const handleCategoryClick = (title: string) => {
        let restaurantMenuClone: TYPES.Card[] = cloneDeep(restaurantMenu!)
        restaurantMenuClone?.find(menu => {
            menu?.card?.card["@type"] === TYPES.CardType.NestedItemCategory &&
                menu?.card?.card?.title === title &&
                (
                    menu?.card?.card?.showDetails === undefined ?
                        menu.card.card.showDetails = true
                        : menu.card.card.showDetails = false
                )

        })
        setShowDetails(!showDetails)
        setRestaurantMenu(restaurantMenuClone)

    }

    return (
        <div className="">
            <div className="px-4 font-bold ">{nestedCategories?.title}</div>

            {
                nestedCategories?.categories?.map(category =>
                    <div key={category.title} className="">
                        <div className="font-bold text-neutral-700 flex flex-row items-center justify-between w-full px-4 py-4">
                            <button className="font-bold text-neutral-700 flex flex-row items-center justify-between w-full border-b pb-2 border-gray-300"
                                onClick={() => handleCategoryClick(category.title)}>
                                {
                                    category?.title ?
                                        <>
                                            <div className="">
                                                {category?.title + '(' + category?.itemCards?.length + ')'}
                                            </div>
                                            <span className="">
                                                {nestedCategories?.showDetails === true ?
                                                    <IoIosArrowUp size={22} />
                                                    : <IoIosArrowDown size={22} />
                                                }
                                            </span>
                                        </>
                                        : ''
                                }
                            </button>
                        </div>
                        <div className="flex">
                            {
                                showDetails &&
                                <MenuItem itemCard={category.itemCards} />
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NestedItemCategory