import React, { useState } from "react"
import * as TYPES from "../utils/interfaces"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import MenuItem from "./MenuItem"

interface iProps {
    itemCard: {
        itemCards: TYPES.RestaurantMenuItem[];
        title: string;
        showDetails: boolean;
    }
    vegOnly: boolean
}

const NestedMenuItem = (props: iProps) => {
    const { itemCard, vegOnly } = props
    const [showDetails, setShowDetails] = useState<boolean>(false)

    const handleCategoryClick = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            {vegOnly ?
                itemCard?.itemCards?.filter(item => item?.card?.info?.isVeg === 1).length > 0 &&
                <button type='button' key={itemCard.title} className="font-semibold text-gray-600 flex flex-row items-center justify-between w-full border-b border-gray-300 py-4"
                    onClick={handleCategoryClick}>
                    {
                        itemCard?.title ?
                            <>
                                <div className="">
                                    {itemCard?.title + ' (' + itemCard?.itemCards?.filter(item => item?.card?.info?.isVeg === 1).length + ')'}
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
                : <button type='button' key={itemCard.title} className="font-semibold text-gray-600 flex flex-row items-center justify-between w-full border-b py-4 border-gray-300"
                    onClick={handleCategoryClick}>
                    {
                        itemCard?.title ?
                            <>
                                <div className="">
                                    {itemCard?.title + ' (' + itemCard?.itemCards?.length + ')'}
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
            <div className="flex flex-col justify-between">
                {
                    showDetails ?
                        itemCard?.itemCards?.map(item =>
                            vegOnly ?
                                item.card.info.isVeg === 1 &&
                                <MenuItem key={item.card.info.id} item={item} />
                                : <MenuItem key={item.card.info.id} item={item} />
                        )
                        : ''
                }
            </div>
        </>

    )
}

export default NestedMenuItem