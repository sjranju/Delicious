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
        <div className="px-2 py-4 border-b-8">
            <>
                {
                    nestedCategories?.categories?.filter(category => category?.itemCards?.filter(card => card?.card?.info?.isVeg === 1))?.length > 1
                }
            </>
            <div className="font-bold text-neutral-700 text-lg">{nestedCategories?.title}</div>
            {
                nestedCategories?.categories?.map(category =>
                    <>
                        {vegOnly ?
                            category?.itemCards?.filter(item => item?.card?.info?.isVeg === 1).length > 0 &&
                            <button key={category.title} className="font-semibold text-gray-600 flex flex-row items-center justify-between w-full border-b border-gray-300 py-4"
                                onClick={() => handleCategoryClick(category.title)}>
                                {
                                    category?.title ?
                                        <>
                                            <div className="">
                                                {category?.title + ' (' + category?.itemCards?.filter(item => item?.card?.info?.isVeg === 1).length + ')'}
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
                            : <button key={category.title} className="font-semibold text-gray-600 flex flex-row items-center justify-between w-full border-b py-4 border-gray-300"
                                onClick={() => handleCategoryClick(category.title)}>
                                {
                                    category?.title ?
                                        <>
                                            <div className="">
                                                {category?.title + ' (' + category?.itemCards?.length + ')'}
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
                        }
                        <div className="flex">
                            {
                                showDetails ?
                                    vegOnly ?
                                        <MenuItem
                                            itemCard={category?.itemCards?.filter(item => item?.card?.info?.isVeg === 1)}
                                        />
                                        : <MenuItem itemCard={category?.itemCards} />
                                    : ''
                            }
                        </div>
                    </>
                )
            }
        </div >
    )
}

export default NestedItemCategory