import React from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonMoreRestaurants = () => {
    return (
        <div className='mt-8'>
            <div className="grid grid-cols-1 ">
                {Array(1).fill(1).map((arr, i) =>
                    <div key={i} className="flex flex-col rounded-lg w-[230px] h-[180px] mb-24 justify-center mr-20">
                        <div className=''><Skeleton count={1} width={'full'} height={160}></Skeleton></div>
                        <div className=''><Skeleton count={1} width={'30%'} style={{ lineHeight: '8px' }}></Skeleton></div>
                        <div className=''><Skeleton count={1} width={'80%'} style={{ lineHeight: '8px' }}></Skeleton></div>
                        <div className=''><Skeleton count={1} width={`70%`} style={{ lineHeight: '8px' }}></Skeleton></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SkeletonMoreRestaurants