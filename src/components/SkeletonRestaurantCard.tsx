import React from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonRestaurantCard = () => {
    return (
        <div className='flex flex-col justify-around items-center mt-8 '>
            <div className='mb-12 text-center'>
                <Skeleton count={1} width={400} height={22} style={{ lineHeight: '8px' }} />
            </div>
            <div className="grid grid-cols-4 ">
                {Array(8).fill(1).map((arr, i) =>
                    <div key={i} className="flex flex-col rounded-lg w-[150px] h-[180px] mb-24 justify-center mr-20">
                        <div className=''><Skeleton count={1} width={170} height={160}></Skeleton></div>
                        <div className=''><Skeleton count={1} width={'30%'} style={{ lineHeight: '6px' }}></Skeleton></div>
                        <div className=''><Skeleton count={1} width={'80%'} style={{ lineHeight: '4px' }}></Skeleton></div>
                        <div className=''><Skeleton count={1} width={`70%`} style={{ lineHeight: '4px' }}></Skeleton></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SkeletonRestaurantCard