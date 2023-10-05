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
            showDetails: boolean
        }[];
        title: string;
    }
    resId: string
}

interface iShowDetails {
    showDetail: boolean
    categoryTitle: string
}

const NestedItemCategory = (props: iNestedItemCategoryProps) => {

    const { vegOnly, nestedCategories, resId } = props
    const [showDetails, setShowDetails] = useState<iShowDetails[]>([])
    const { restaurantMenu, setRestaurantMenu } = useRestaurantMenu(resId)
    console.log('main', showDetails)

    const handleCategoryClick = (title: string) => {
        console.log(showDetails)

        let restaurantMenuClone: TYPES.Card[] = cloneDeep(restaurantMenu!)
        restaurantMenuClone?.find(menu => {
            if (menu?.card?.card["@type"] === TYPES.CardType.NestedItemCategory) {
                let foundCategory = menu?.card?.card?.categories.find(category => category.title === title)
                foundCategory &&
                    foundCategory.showDetails === undefined ?
                    foundCategory.showDetails = true
                    : foundCategory!.showDetails = false
            }
        })
        setShowDetails([{ showDetail: !showDetails, categoryTitle: title }])
        setRestaurantMenu(restaurantMenuClone)
    }

    return (
        <div className="px-2 py-4 border-b-8">
            {/* <>
                {
                    nestedCategories?.categories?.filter(category => category?.itemCards?.filter(card => card?.card?.info?.isVeg === 1))?.length > 1
                }
            </> */}
            <div className="font-bold text-neutral-700 text-lg">
                {nestedCategories?.title}
            </div>

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
                                                {category?.showDetails === true ?
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
                                                {category?.showDetails === true ?
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
                                showDetails.find((showCategory) => showCategory.categoryTitle === category.title && showCategory.showDetail) ?
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

            {/* {nestedCategories?.categories?.map(category =>
                <div className="flex">
                    {
                        showDetails.find((showCategory) => showCategory.categoryTitle === category.title) ?
                            vegOnly ?
                                <MenuItem
                                    itemCard={category?.itemCards?.filter(item => item?.card?.info?.isVeg === 1)}
                                />
                                : <MenuItem itemCard={category?.itemCards} />
                            : ''
                    }
                </div>
            )} */}
        </div >
    )
}

export default NestedItemCategory