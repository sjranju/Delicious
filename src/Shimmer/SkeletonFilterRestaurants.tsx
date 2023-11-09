import React from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonFilterRestaurants = () => {
    return (
        <div className='flex flex-col space-y-10'>
            <div className="flex flex-row space-x-4">
                <div className=""><Skeleton width={60} height={30} /></div>
                <div className=""><Skeleton width={60} height={30} /></div>
                <div className=""><Skeleton width={60} height={30} /></div>
                <div className=""><Skeleton width={60} height={30} /></div>
            </div>
            <div className="grid grid-cols-4 gap-10 items-start">
                {Array(4).fill(1).map((arr, i) =>
                    <div key={i} className="row-start-1 flex flex-col rounded-lg w-[230px] h-[180px] mb-24 justify-center mr-20">
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

export default SkeletonFilterRestaurants