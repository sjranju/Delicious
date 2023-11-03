import React from "react"
import * as TYPES from '../utils/interfaces'
import NestedMenuItem from "./NestedMenuItem"

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
}

const NestedItemCategory = (props: iNestedItemCategoryProps) => {
    const { vegOnly, nestedCategories } = props

    return (
        <div className="px-2 py-4 border-b-8">
            <div className="font-bold text-neutral-700 text-lg">
                {nestedCategories?.title}
            </div>
            {nestedCategories?.categories?.map(category =>
                <NestedMenuItem key={category.title} itemCard={category} vegOnly={vegOnly} />
            )}
        </div >
    )
}

export default NestedItemCategory