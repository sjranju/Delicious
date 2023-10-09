import React, { useState } from "react"
import { ButtonGroupProps, CarouselInternalState } from "react-multi-carousel"

interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
    carouselState?: CarouselInternalState
}

const CustomButtonGroupAsArrows = ({ next, previous, carouselState }: CarouselButtonGroupProps) => {
    const [active, setActive] = useState<boolean>(false)
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className="flex flex-row space-x-6 mt-6 justify-center">
            <button onClick={previous} className={`py-1 px-2 rounded-lg ${active ? 'bg-blue-400' : 'bg-gray-400'}`}></button>
            <button onClick={next} className={`py-1 px-2 rounded-lg ${active ? 'bg-blue-400' : 'bg-gray-400'}`}></button>
        </div >
    )
}

export default CustomButtonGroupAsArrows