import React from "react"
import Skeleton from "react-loading-skeleton"

const SkeletonRestaurantCard = () => {
    return (
        <div className="grid grid-cols-4 gap-10 ">
            {Array(9).fill(1).map((arr, i) =>
                <div key={i} className="flex flex-col border rounded-lg border-gray w-[300px]">
                    <Skeleton circle={true} height={50} width={50} />
                    <div className='border-gray truncate max-w-2xs'><Skeleton count={1} width={'90%'}></Skeleton></div>
                    <div className='flex items-center'><Skeleton count={1} width={`10%`}></Skeleton><Skeleton count={1} width={'10%'}></Skeleton></div>
                    <div className='truncate max-w-3xs text-sm text-slate-600'><Skeleton count={1} width={'90%'}></Skeleton></div>
                    <div className='truncate max-w-3xs text-sm text-slate-600'><Skeleton count={1} width={`90%`}></Skeleton></div>
                </div>
            )}
        </div>
    )
}

export default SkeletonRestaurantCard