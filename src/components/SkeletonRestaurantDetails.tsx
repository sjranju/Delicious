import React from "react"
import Skeleton from "react-loading-skeleton"

const SkeletonRestaurantDetails = () => {
    return (
        <div className="h-full w-full bg-slate-50 ">
            <div className="flex flex-col items-start space-y-6 justify-around max-w-[800px] mx-auto ">
                <div className="flex flex-row justify-between items-center bg-sky-50 w-full pt-10 pb-2 px-2">
                    <div className="w-52 h-48 rounded-sm" >
                        <Skeleton width={'100%'} height={'100%'} />
                    </div>
                    <div className="flex flex-col items-start ">
                        <Skeleton count={1.5} width={'250px'} height={14} style={{ lineHeight: '6px' }} />
                        <Skeleton count={1.8} width={'250px'} height={12} style={{ lineHeight: '6px' }} />
                        <Skeleton count={1} width={'250px'} height={14} style={{ lineHeight: '6px' }} />
                    </div>
                </div>
                <div className="flex flex-row space-x-8">
                    <Skeleton count={1} width={180} height={50} />
                    <Skeleton count={1} width={180} height={50} />
                    <Skeleton count={1} width={180} height={50} />
                    <Skeleton count={1} width={180} height={50} />
                </div>
                <div className="">
                    <Skeleton count={1} width={80} height={22} style={{ lineHeight: '6px' }} />
                </div>
                <div className="flex flex-col justify-center items-center px-2 space-y-6">
                    <Skeleton count={1} width={'800px'} height={50} />
                    <Skeleton count={1} width={'800px'} height={50} />
                    <Skeleton count={1} width={'800px'} height={50} />
                </div>
            </div>
        </div>
    )
}

export default SkeletonRestaurantDetails