import React from "react"
import Skeleton from "react-loading-skeleton"

const SkeletonRestaurantDetails = () => {
    return (
        <div className="h-full w-full bg-slate-50 ">
            <div className="flex flex-col items-center space-y-6 justify-around max-w-[800px] mx-auto ">
                <div className="flex flex-row justify-between items-center bg-sky-50 w-full pt-10 pb-2 px-2">
                    <div className="w-52 h-48 rounded-sm" >
                        <Skeleton width={'100%'} />
                    </div>
                    <div className="flex flex-col items-start w-[150px] h-[180px]">
                        <Skeleton count={3.5} width={'30%'} style={{ lineHeight: '6px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonRestaurantDetails