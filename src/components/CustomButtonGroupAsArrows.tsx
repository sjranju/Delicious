import React, { useState } from "react"
import { ButtonGroupProps, CarouselInternalState } from "react-multi-carousel"

interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
    carouselState?: CarouselInternalState
}

const CustomButtonGroupAsArrows = ({ next, previous, carouselState }: CarouselButtonGroupProps) => {

    return (
        <div className="flex flex-row space-x-6 mt-6 justify-center">
            <button onClick={previous} className='py-1 px-2 rounded-lg bg-gray-400'></button>
            <button onClick={next} className='py-1 px-2 rounded-lg bg-gray-400'></button>
        </div >
    )
}

export default CustomButtonGroupAsArrows