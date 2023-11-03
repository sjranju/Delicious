import React from "react"
import * as TYPES from '../utils/interfaces'
import { CLOUDINARY_URL } from "../utils/constants";
import Carousel from "react-multi-carousel";

interface iProps {
    items: {
        "@type": TYPES.CardType.MenuCarousel;
        title: string;
        carousel: TYPES.MenuCarouselItem[];
    }
}

const MenuCarousel = (props: iProps) => {
    const { items } = props
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
        }
    };

    return (
        <div className="flex flex-col my-4">
            <p className="font-bold text-xl py-4">{items.title}</p>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-padding-bottom"
                dotListClass=""
                draggable
                focusOnSelect
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {
                    items?.carousel?.map(card =>
                        <img key={card?.bannerId} src={CLOUDINARY_URL + card.creativeId} className="h-36 w-44 md:h-72 md:w-64 mb-8"></img>
                    )
                }
            </Carousel>

        </div>
    )
}

export default MenuCarousel