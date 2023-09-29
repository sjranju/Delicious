import React from "react"
import * as TYPES from "../utils/interfaces"
import { BiRupee } from "react-icons/bi"
import { CLOUDINARY_URL } from "../utils/constants"
import veg from '../../public/images/veg.png'
import nonveg from '../../public/images/non-veg.png'
import logo from '../../public/images/logo-no-background.png'

interface iProps {
    itemCard: TYPES.MenuItemInfo[]
}

const NestedMenuItem = (props: iProps) => {
    const { itemCard } = props

    const handleCart = () => {

    }

    return (
        <div className="space-y-4 my-4">
            {
                itemCard.map(item => (
                    <div key={item.id} className="mx-4 flex flex-row pb-4 justify-between items-center space-x-4 border-b border-gray-300 ">
                        <div className="flex flex-col items-start">
                            <p>{item?.isVeg === 1 ?
                                <img src={veg} className="w-[15px]" />
                                : <img src={nonveg} className="w-[15px]" />
                            }</p>
                            <p className="font-semibold">{item?.name}</p>
                            <p className="flex flex-row items-center">
                                <BiRupee />
                                <span className="mr-2 text-sm">{item?.price ? item?.price / 100 : item?.defaultPrice / 100}</span>
                                {item?.offerTags?.map(offerTag => (
                                    <p key={offerTag.title} className={`bg-[${offerTag.backgroundColor}] text-[${offerTag.textColor}] text-[10px]`}>
                                        {
                                            <div className="flex items-center">
                                                <span className={`bg-[${offerTag.backgroundColor}] text-[${offerTag.textColor}] font-bold text-[12px]`}>|</span>
                                                <span className="font-bold">{offerTag.title}</span>
                                                <span className={`bg-[${offerTag.backgroundColor}] text-[${offerTag.textColor}] text-2xs mx-[2px]`}>|</span>
                                                <span>{offerTag.subTitle}</span>
                                            </div>
                                        }
                                    </p>
                                ))}
                            </p>
                            <p className="text-xs text-slate-500 max-w-[700px]">
                                {item?.description?.slice(item?.description?.indexOf('|') + 1)}
                            </p>
                        </div>
                        <div className="relative flex flex-col items-center justify-center min-w-[118px]">
                            {
                                item?.imageId ?
                                    <>
                                        <img src={CLOUDINARY_URL + item?.imageId} className="w-[118px] h-24 rounded-md object-cover"></img>
                                        <button className="absolute top-[70px] w-24 h-8 text-lime-600 bg-white border border-lime-400 text-xs font-bold px-6 py-2 rounded-md object-cover"
                                            onClick={() => handleCart}>
                                            ADD +
                                        </button>
                                    </>
                                    : <button className="flex items-center justify-center w-24 h-8 text-lime-600 bg-white border border-lime-400 text-xs font-bold rounded-md object-cover"
                                        onClick={() => handleCart}>
                                        ADD +
                                    </button>

                            }

                        </div>
                    </div>
                )
                )
            }

        </div>

    )
}

export default NestedMenuItem