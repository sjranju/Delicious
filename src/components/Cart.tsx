import React, { useContext, useEffect } from "react"
import { useAppSelector } from "../store/useStateDispatch"
import { GetCartItemsReturn, useAddToCartMutation, useGetCartItemsQuery } from "../RTKQuery/cartQuery"
import { restuarantContext } from "../context/RestaurantContext"
import { userContext } from "../context/UserContext"
import { HiLocationMarker } from 'react-icons/hi'
import { GiWallet } from 'react-icons/gi'
import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../utils/fetchRestaurantDetails"
import { CLOUDINARY_URL } from "../utils/constants";
import * as TYPES from '../utils/interfaces'
import { Link } from "react-router-dom"
import veg from '../../public/images/veg.png'
import nonveg from '../../public/images/non-veg.png'
import { increment } from "firebase/firestore"

const Cart = () => {
    const { restaurantId } = useContext(restuarantContext)
    const { user } = useContext(userContext)
    const [addToCart] = useAddToCartMutation()
    const { data: cartItem } = useGetCartItemsQuery(user?.uid!)
    let restId = ''
    let cartItemSet = new Set()
    if (cartItem === undefined || cartItem === 'notExists') {
        console.log('data is either undefined or doesnt exist')
    } else {
        restId = cartItem.restaurantId
    }

    const { data, isError, isLoading, error } = useQuery(['restaurantMenu', restId], () => fetchData(restId))
    // const { data: restaurantData, isError, isLoading, error } = useQuery(['restaurantMenu', data.restaurantId], () => fetchData(restaurantId!))

    const handleQuantity = async (itemId: string, increse: boolean) => {
        if (cartItem === undefined || cartItem === 'notExists') {
            console.log('data is either undefined or doesnt exist')
        } else {
            restId = cartItem.restaurantId
            let foundItem = Object.entries(cartItem.itemWithQuantity).find(([key, value]) => key === itemId)
            if (foundItem) {
                await addToCart(
                    { restaurantId: cartItem.restaurantId, quantity: increse ? foundItem[1] + 1 : foundItem[1] - 1, user: user?.uid!, itemId: foundItem?.[0], resetCart: false })
            }
        }
    }

    return cartItem === undefined || cartItem === 'notExists' ?
        user ?
            <div className="">You cart is empty, please add some items</div>
            : <div className="">You cart is empty, please Login/SignUp to order items</div>
        : (<div className="relative w-full h-screen bg-slate-100">
            {
                <div className="flex mx-auto max-w-screen-xl min-w-max pt-10 px-28">
                    <div className="flex flex-row space-x-8 w-full">
                        <div className="w-8/12">
                            <div className="flex flex-col justify-around space-y-10 ">
                                <div className="flex flex-col items-start bg-white space-y-6 py-6 px-8 w-full shadow-lg">
                                    <div className="font-bold text-lg">Add a delivery address</div>
                                    <input type="text" placeholder="House No/Flat/Building"
                                        className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                    <input type="text" placeholder="Street Address/Colony/Area"
                                        className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                    <input type="text" placeholder="Landmark"
                                        className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                    <button className="bg-lime-600 font-semibold hover:bg-lime-700 text-white px-4 py-1 text-md rounded-md">Save</button>
                                    <div className="absolute flex items-center justify-center top-8 left-[200px] bg-black p-1 shadow-xl w-10 h-10"><HiLocationMarker size={26} className="text-white" /></div>
                                    <div className="absolute left-[220px] top-[71px] border-l border-dashed border-gray-400 h-72"></div>
                                </div>
                                <div className="bg-white px-8 items-start shadow-lg py-4">
                                    <div className="text-lg text-gray-500 py-4 px-2 font-bold">Payment</div>
                                    <div className="absolute flex items-center justify-center top-[375px] left-[200px] bg-black p-1 shadow-xl w-10 h-10"><GiWallet size={24} className="text-white text-center" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12 bg-white p-6 shadow-lg">
                            <Link to={`/restaurant/${data?.resInfo.card.card.info.id}`}>
                                <div className="flex flex-row items-center space-x-4 mb-4">
                                    <img src={`${CLOUDINARY_URL + data?.resInfo?.card?.card?.info?.cloudinaryImageId}`} alt="" className="w-12 h-12" />
                                    <div className="flex flex-col font-semibold after:content-[' '] after:bg-[#282c3f] after:w-10 after:h-[3px] min-h-[50px]
                                    truncate max-w-xs">
                                        <p className="text-[17px]">{data?.resInfo?.card?.card?.info?.name}</p>
                                        <p className="text-xs font-normal text-[#686B78] mb-2">{data?.resInfo.card.card.info.areaName}</p>
                                    </div>
                                </div>
                            </Link>

                            <div className="flex flex-col">
                                {
                                    Object.entries(cartItem.itemWithQuantity).map(([itemId, quantity]) =>
                                        <div key={itemId} className="">
                                            {
                                                data?.restaurantMenu.map(restaurant => {
                                                    if (restaurant.card.card["@type"] === TYPES.CardType.ItemCategory
                                                        && restaurant.card.card.itemCards.find(itemCard => itemCard.card.info.id === itemId) !== undefined) {
                                                        if (cartItemSet.has(itemId))
                                                            return ''
                                                        else {
                                                            cartItemSet.add(itemId)
                                                            return (
                                                                <div key={itemId} className="flex flex-row items-center justify-start space-x-2 py-2">
                                                                    <div className="relative top-1 self-start">
                                                                        {
                                                                            restaurant.card.card.itemCards.find(itemCard => itemCard.card.info.id === itemId)!.card?.info?.isVeg === 1 ?
                                                                                <img src={veg} className="w-[15px]" />
                                                                                : <img src={nonveg} className="w-[15px]" />
                                                                        }
                                                                    </div>
                                                                    <div className="flex flex-wrap text-sm w-2/4 self-start">
                                                                        {restaurant.card.card.itemCards.find(itemCard => itemCard.card.info.id === itemId)?.card?.info?.name}
                                                                    </div>
                                                                    <div className="flex flex-row items-center justify-center space-x-3 border border-gray-200 px-1">
                                                                        <button className="text-lime-500 font-bold text-xl"
                                                                            onClick={() => handleQuantity(itemId, false)}>-</button>
                                                                        <div className="text-xs text-lime-500 font-bold">{quantity}</div>
                                                                        <button className="text-lime-500 font-bold text-xl"
                                                                            onClick={() => handleQuantity(itemId, true)}>+</button>
                                                                    </div>
                                                                </div>)
                                                        }
                                                    }
                                                }
                                                )}
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        )
}

export default Cart