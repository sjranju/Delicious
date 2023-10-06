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
    vegOnly: boolean;
}

const ItemCategory = (props: iProps) => {
    const { itemCard, resId, vegOnly } = props
    const data = useRestaurantMenu(resId)
    const [showDetails, setShowDetails] = useState<boolean>(false)

    const handleCategoryClick = (title: string) => {
        if (!data) {
            console.log('Sorry, something went wrong!');
        } else {
            const { restaurantMenu } = data

            let restaurantMenuClone: TYPES.Card[] = cloneDeep(restaurantMenu!)
            restaurantMenuClone?.find(menu => {
                menu?.card?.card["@type"] === TYPES.CardType.ItemCategory &&
                    menu?.card?.card?.title === title ?
                    (
                        menu?.card?.card?.showDetails === undefined ?
                            menu.card.card.showDetails = true
                            : menu.card.card.showDetails = false
                    )
                    : ''
            })
            setShowDetails(!showDetails)
        }
    }

    return (
        <>
            {
                vegOnly
                    ?
                    itemCard.itemCards.filter(item => item.card.info.isVeg! === 1).length > 0
                    && <button key={itemCard.title} className=" font-bold text-lg text-neutral-700 flex flex-row items-center justify-between w-full px-2 py-4 border-b-8"
                        onClick={() => handleCategoryClick(itemCard.title)}>
                        {
                            itemCard?.title ?
                                <>
                                    <div className="">
                                        {
                                            itemCard?.title + ' (' + itemCard.itemCards.filter(item => item.card.info.isVeg! === 1).length + ')'
                                        }
                                    </div >
                                    <span className="">
                                        {itemCard?.showDetails === true ?
                                            <IoIosArrowUp size={22} />
                                            : <IoIosArrowDown size={22} />
                                        }
                                    </span>
                                </>
                                : ''
                        }
                    </button >
                    : itemCard?.itemCards?.length > 0 &&
                    <button className="font-bold text-lg text-neutral-700 flex flex-row items-center justify-between w-full px-2 py-4 border-b-8"
                        onClick={() => handleCategoryClick(itemCard.title)}>
                        {
                            itemCard?.title ?
                                <>
                                    <div className="">
                                        {
                                            itemCard?.title + ' (' + itemCard?.itemCards?.length + ')'
                                        }
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
            }

            {
                showDetails ?
                    vegOnly ?
                        <MenuItem
                            itemCard={itemCard.itemCards.filter(item => item.card.info.isVeg === 1)}
                            restaurantName={itemCard.title} />
                        : <MenuItem itemCard={itemCard?.itemCards} restaurantName={itemCard.title} />
                    : ''
            }

        </>
    )
}

export default ItemCategory