import React from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonPreSeaarch = () => {
    return (
        <div className='flex flex-col space-y-10 px-4'>
            <div className=""><Skeleton width={160} height={20} /></div>
            <div className=""><Skeleton width={160} height={20} /></div>
        </div>
    )
}

export default SkeletonPreSeaarch