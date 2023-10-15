import React, { useContext } from "react"
import { useAppSelector } from "../store/useStateDispatch"
import { GetCartItemsReturn, useGetCartItemsQuery } from "../RTKQuery/cartQuery"
import { restuarantContext } from "../context/RestaurantContext"
import { userContext } from "../context/UserContext"
import { HiLocationMarker } from 'react-icons/hi'
import { GiWallet } from 'react-icons/gi'
import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../utils/fetchRestaurantDetails"
import { CLOUDINARY_URL } from "../utils/constants";
import * as TYPES from '../utils/interfaces'

const Cart = () => {
    const { restaurantId } = useContext(restuarantContext)
    const { user } = useContext(userContext)
    const { data: cartItem } = useGetCartItemsQuery(user?.uid!)
    let restId = ''
    // let restaurantData:GetCartItemsReturn|undefined
    if (cartItem === undefined || cartItem === 'notExists') {
        console.log('data is either undefined or doesnt exist')
    } else {
        console.log(cartItem)
        restId = cartItem.restaurantId
    }
    console.log('restData in cart', restId)

    const { data, isError, isLoading, error } = useQuery(['restaurantMenu', restId], () => fetchData(restId!))
    // const { data: restaurantData, isError, isLoading, error } = useQuery(['restaurantMenu', data.restaurantId], () => fetchData(restaurantId!))
    console.log('restaurantData', data)
    return (
        <div className="relative w-full min-h-full bg-slate-100">
            {
                cartItem === undefined || cartItem === 'notExists' ?
                    user ?
                        <div className="">You cart is empty, please add some items</div>
                        : <div className="">You cart is empty, please Login/SignUp to order items</div>
                    : <div className="flex mx-auto max-w-screen-xl min-w-max pt-20 px-28">
                        <div className="flex flex-row space-x-8 items-center w-full">
                            <div className="flex flex-col justify-around space-y-10 w-8/12">
                                <div className="flex flex-col bg-white space-y-6 py-4 items-start px-8 w-full shadow-lg">
                                    <div className="font-semibold text-lg">Enter delivery address</div>
                                    <input type="text" placeholder="Flat No, Street name"
                                        className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                    <input type="text" placeholder="Area"
                                        className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                    <input type="text" placeholder="Landmark"
                                        className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                    <button className="bg-lime-600 font-semibold hover:bg-lime-700 text-white px-4 py-1 text-md rounded-md">Save</button>
                                    <div className="absolute top-20 left-52 bg-black p-1"><HiLocationMarker size={26} className="text-white" /></div>
                                    <div className="absolute left-[225px] top-[115px] border-l border-dashed border-gray-400 h-72">
                                    </div>
                                </div>
                                <div className="bg-white px-8 items-start shadow-lg">
                                    <div className="text-lg text-gray-500 py-4 px-2 font-bold">Payment</div>
                                    <div className="absolute top-[400px] left-52 bg-black p-1"><GiWallet size={26} className="text-white" /></div>
                                </div>
                            </div>
                            <div className="w-4/12 bg-white shadow-lg">
                                <div className="flex flex-row items-start justify-center">
                                    <img src={`${CLOUDINARY_URL + data?.resInfo?.card?.card?.info?.cloudinaryImageId}`} alt="" className="w-16 h-16" />
                                    <div className="font-semibold">{data?.resInfo?.card?.card?.info?.name}</div>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        data?.restaurantMenu.map(menu =>
                                            <div>
                                                {
                                                    menu.card.card["@type"]
                                                }
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