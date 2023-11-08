import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonCart = () => {
    return (
        <div className='flex mx-auto max-w-screen-xl min-w-max pt-10 px-28'>
            <div className="flex flex-row space-x-8 w-full">
                <div className="w-8/12">
                    <div className="flex flex-col justify-around space-y-10 ">
                        <Skeleton height={240} width={'100%'} />
                        <Skeleton height={80} width={'100%'} />
                    </div>
                </div>
                <div className="relative w-4/12 flex flex-col space-y-4 bg-white p-6 shadow-lg">
                    <div className="flex flex-row space-x-2">
                        <Skeleton height={60} width={60} />
                        <Skeleton height={20} width={180} />
                    </div>
                    <Skeleton count={3} height={10} />
                    <Skeleton count={1} height={40} />
                    <Skeleton count={4.5} height={10} />
                </div>
            </div>
        </div>
    )
}

export default SkeletonCart
