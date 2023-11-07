import React, { useContext, useState } from "react"
import * as TYPES from "../utils/interfaces"
import { BiRupee } from "react-icons/bi"
import { CLOUDINARY_URL } from "../utils/constants"
import veg from '../../public/images/veg.png'
import nonveg from '../../public/images/non-veg.png'
import { restaurantContext } from "../context/RestaurantContext"
import { useUpdateCartMutation, useGetCartItemsQuery } from "../RTKQuery/cartQuery"
import { userContext } from "../context/UserContext"
import { resetCartContext } from "../context/ResetCartContext"
import { loginOrSignUpContext } from "../context/LoginOrSignup"

interface iProps {
    itemCard: TYPES.RestaurantMenuItem[]
}

const MenuItem = (props: iProps) => {
    const { itemCard } = props
    const { restaurantId } = useContext(restaurantContext)
    const { setResetCart } = useContext(resetCartContext)
    const { user } = useContext(userContext)
    const [updateCart] = useUpdateCartMutation()
    const { data } = useGetCartItemsQuery(user?.uid!)
    const [loginToOrder, setLoginToOrder] = useState<boolean>(false)
    const { userLoginOrSignUp, setUserLoginOrSignup } = useContext(loginOrSignUpContext)

    const handleCart = async (card: TYPES.MenuItemInfo) => {
        let uid = user?.uid
        if (restaurantId) {
            if (data === undefined || data === 'notExists' || Object.entries(data).length === 0) {
                await updateCart({
                    restaurantId,
                    itemId: card.id,
                    user: uid!,
                    quantity: 1
                })
            } else {
                if (data.restaurantId !== restaurantId) {
                    setResetCart({ itemId: card.id, reset: false })
                } else {
                    let foundCartItem = Object.entries(data.itemWithQuantity).find(([key, value]) => key === card.id)
                    if (foundCartItem !== undefined) {
                        await updateCart({
                            itemId: foundCartItem[0],
                            user: uid!,
                            quantity: foundCartItem[1] + 1,
                            restaurantId
                        })
                    } else {
                        await updateCart({
                            restaurantId,
                            itemId: card.id,
                            user: uid!,
                            quantity: 1
                        })
                    }
                }
            }
        }
    }

    return (
        <div className="relative space-y-4 my-4 w-full">
            {
                itemCard.length > 0 && itemCard.map(item => (
                    <div key={item.card.info.id} className="">
                        {
                            <div className="mx-4 flex flex-row pb-4 justify-between items-center space-x-4 border-b border-gray-300 ">
                                <div className="non-veg flex flex-col items-start">
                                    <p>{item?.card?.info?.isVeg === 1 ?
                                        <img src={veg} className="w-[15px]" />
                                        : <img src={nonveg} className="w-[15px]" />}</p>
                                    <p className="font-semibold">{item?.card?.info?.name}</p>
                                    <div className="flex flex-row items-center">
                                        <BiRupee />
                                        <span className="mr-2 text-sm">{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                                        {item?.card?.info?.offerTags?.map(offerTag => (
                                            <div key={offerTag.title} className={`bg-[${offerTag.backgroundColor}] text-[${offerTag.textColor}] text-[10px]`}>
                                                {<div className="flex items-center">
                                                    <span className={`bg-[${offerTag.backgroundColor}] text-[${offerTag.textColor}] font-bold text-[12px]`}>|</span>
                                                    <span className="font-bold">{offerTag.title}</span>
                                                    <span className={`bg-[${offerTag.backgroundColor}] text-[${offerTag.textColor}] text-2xs mx-[2px]`}>|</span>
                                                    <span>{offerTag.subTitle}</span>
                                                </div>}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-500 max-w-[700px]">
                                        {item?.card?.info?.description?.slice(item?.card?.info?.description?.indexOf('|') + 1)}
                                    </p>
                                </div><div className="relative flex flex-col items-center justify-center min-w-[118px]">
                                    {
                                        item?.card?.info?.imageId ?
                                            <>
                                                <img src={CLOUDINARY_URL + item?.card?.info?.imageId} className="w-[118px] h-24 rounded-md object-cover"></img>
                                                <button className="absolute top-[70px] w-24 h-8 text-lime-600 bg-white border border-lime-400 text-xs font-bold px-6 py-2 rounded-md object-cover"
                                                    onClick={() => !user ?
                                                        setUserLoginOrSignup(true)
                                                        : handleCart(item.card.info)}>
                                                    ADD +
                                                </button>
                                            </>
                                            : <button className="flex items-center justify-center w-24 h-8 text-lime-600 bg-white border border-lime-400 text-xs font-bold rounded-md object-cover"
                                                onClick={() => !user ?
                                                    setUserLoginOrSignup(true)
                                                    : handleCart(item.card.info)}>
                                                ADD +
                                            </button>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                )
                )
            }
        </div>
    )
}

export default MenuItem