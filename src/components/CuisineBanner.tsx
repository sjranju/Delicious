import React, { useContext, useRef } from "react"
import Slider from 'react-slick'
import TopicalBannerImage from "./TopicalBannerImage";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
import { TopicalImageBanner } from "../utils/interfaces";
import { userContext } from "../context/UserContext";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6.9,
    slidesToScroll: 1,
    arrows: true,
    useCSS: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1.6,
                slidesToScroll: 3,
                infinite: false,
                // dots: true,
                arrows: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
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

const CuisineBanner = (props: { card: TopicalImageBanner }) => {
    const sliderRef = useRef<Slider | null>(null);
    const { user } = useContext(userContext)

    const goToNextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className="relative w-9/12 m-auto bg-slate-50 mt-4">
            <div className="text-2xl font-bold mb-6">
                {user ? <span>{user.displayName},What's on your mind?</span> : <span>What's on your mind?</span>}
            </div>
            <Slider
                className="mb-16"
                {...settings}
                ref={(slider) => (sliderRef.current = slider)}
            >
                {props.card.info.map((info) => (
                    <div key={info.id} className="">
                        <TopicalBannerImage imageId={info.imageId} imgStyle={{ width: '124px', height: '160px' }} />
                    </div>
                ))}
            </Slider>

            <div
                className="absolute top-0 right-20 cursor-pointer"
                onClick={goToPrevSlide}
            >
                <div className="bg-gray-200 rounded-xl p-1">
                    <GrFormPreviousLink size={22} />
                </div>
            </div>
            <div
                className="absolute top-0 right-10 cursor-pointer"
                onClick={goToNextSlide}
            >
                <div className="bg-gray-200 rounded-xl p-1">
                    <GrFormNextLink size={22} />
                </div>
            </div>
        </div>
    );
}

export default CuisineBanner