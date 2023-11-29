import React, { useRef } from "react"
import { TopicalImageBanner } from "../utils/interfaces";
import Slider from 'react-slick'
import TopicalBannerImage from "./TopicalBannerImage";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 1,
    arrows: true,
    useCSS: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
                infinite: false,
                // dots: true,
                arrows: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        }
    ]
};

const TopicalBanner = (props: { card: TopicalImageBanner }) => {
    const sliderRef = useRef<Slider | null>(null);

    const goToNextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className="relative w-9/12 m-auto pt-10 mb-2">
            <div className="lg:text-2xl text-lg font-bold mb-6">Best offers for you</div>
            <Slider
                className=""
                {...settings}
                ref={(slider) => (sliderRef.current = slider)}
            >
                {props.card.info.map((info) => (
                    <div key={info.id}>
                        <TopicalBannerImage imageId={info.imageId} imgStyle={{ width: '425px', height: '250px' }} />
                    </div>
                ))}
            </Slider>

            {props.card.info.length > 2 &&
                <><div
                    className="absolute top-10 right-20 cursor-pointer"
                    onClick={goToPrevSlide}
                >
                    <div className="bg-gray-200 rounded-xl p-1">
                        <GrFormPreviousLink size={22} />
                    </div>
                </div><div
                    className="absolute top-10 right-10 cursor-pointer"
                    onClick={goToNextSlide}
                >
                        <div className="bg-gray-200 rounded-xl p-1">
                            <GrFormNextLink size={22} />
                        </div>
                    </div></>
            }

        </div>
    );
};

export default TopicalBanner