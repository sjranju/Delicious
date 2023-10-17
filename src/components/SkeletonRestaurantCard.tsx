import React from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonRestaurantCard = () => {
    return (
        <div className='m-auto w-9/12'>
            <div className='pt-10 mb-4'>
                <Skeleton width={400} height={22} style={{ lineHeight: '8px' }} />
            </div>
            <div className="flex mb-16">
                {Array(3).fill(1).map((arr, i) =>
                    <div key={i} className='mr-4 rounded-3xl'><Skeleton width={'350px'} height={'240px'}></Skeleton></div>
                )}
            </div>
            <div className='mb-4'>
                <Skeleton width={400} height={22} style={{ lineHeight: '8px' }} />
            </div>
            <div className="flex mb-16 justify-between">
                {Array(7).fill(1).map((arr, i) =>
                    <div key={i} className='mr-2'><Skeleton width={'140px'} height={'160px'}></Skeleton></div>
                )}
            </div>
            <div className='mb-12'>
                <Skeleton count={1} width={400} height={22} style={{ lineHeight: '8px' }} />
            </div>
            <div className="grid grid-cols-4 ">
                {Array(8).fill(1).map((arr, i) =>
                    <div key={i} className="flex flex-col rounded-lg w-[260px] h-[170px] mb-24 justify-center mr-20">
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

export default SkeletonRestaurantCard