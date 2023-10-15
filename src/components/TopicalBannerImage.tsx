import React from "react"
import { CLOUDINARY_URL } from "../utils/constants";

type TopicalBannerImageProps = {
    imageId: string
    imgStyle: {
        width: string
        height: string
    }
}

const TopicalBannerImage = (props: TopicalBannerImageProps) => {
    const { width, height } = props.imgStyle
    return (
        <div className={`w-${width} h-${height} px-4`}>
            <img src={CLOUDINARY_URL + props.imageId} alt="" className={`w-${width} h-${height}`} />
        </div>
    )
}

export default TopicalBannerImage