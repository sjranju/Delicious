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
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: false,
                arrows: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4.5,
                slidesToScroll: 4.5,
                arrows: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
        <div className="relative w-9/12 m-auto bg-slate-50 mt-6 mb-2">
            <div className="lg:text-2xl text-lg font-bold mb-6">
                {user ? <span>{user.displayName},</span> : 'Hey,'}
                <span className="ml-1">what's on your mind?</span>
            </div>
            <Slider
                className=""
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