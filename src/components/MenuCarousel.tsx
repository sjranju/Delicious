import React from "react"
import * as TYPES from '../utils/interfaces'
import { CLOUDINARY_URL } from "../utils/constants";

interface iProps {
    items: {
        "@type": TYPES.CardType.MenuCarousel;
        title: string;
        carousel: TYPES.MenuCarouselItem[];
    }
}

const MenuCarousel = (props: iProps) => {
    const { items } = props
    return (
        <div className="flex flex-row items-center justify-between overflow-x-auto space-x-8">
            {
                items?.carousel?.map(card =>
                    <img key={card?.bannerId} src={CLOUDINARY_URL + card.creativeId} className="h-28 w-32 md:h-80 md:w-64"></img>
                )
            }

        </div>
    )
}

export default MenuCarousel