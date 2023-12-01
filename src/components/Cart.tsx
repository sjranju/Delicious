import React, { useContext, useMemo } from "react"
import { useUpdateCartMutation, useGetCartItemsQuery, useDeleteCartItemMutation } from "../RTKQuery/cartQuery"
import { HiLocationMarker } from 'react-icons/hi'
import { GiWallet } from 'react-icons/gi'
import { CLOUDINARY_URL } from "../utils/constants";
import * as TYPES from '../utils/interfaces'
import { Link } from "react-router-dom"
import veg from '../../public/images/veg.png'
import nonveg from '../../public/images/non-veg.png'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { loginOrSignUpContext } from "../context/LoginOrSignup"
import SkeletonCart from "../Shimmer/SkeletonCart"
import useRestaurantInfo from "../utils/useRestaurantInfo"
import { handleLoginOrSignUp } from "../utils/loginUtils"
import { userContext } from "../context/UserContext";

const Cart = () => {

    const { user } = useContext(userContext)
    const { setUserLoginOrSignup } = useContext(loginOrSignUpContext)
    const [updateCart] = useUpdateCartMutation()
    const [deleteCart] = useDeleteCartItemMutation()
    const { data: cartItem } = useGetCartItemsQuery(user?.uid!)
    let restId = ''
    let cartItemSet = new Set<string>()
    if (cartItem === undefined || cartItem === 'notExists') {
        console.log('cartItem data is either undefined or doesnt exist', cartItem)
    } else {
        restId = cartItem.restaurantId
    }
    const { data, isLoading } = useRestaurantInfo(restId)

    const findCartItemCard = (itemId: string) => {
        return data?.restaurantMenu.groupedCard.cardGroupMap.REGULAR.cards.find(restaurant =>
            restaurant.card.card["@type"] === TYPES.CardType.ItemCategory ?
                restaurant.card.card.itemCards.find(itemCard => itemCard.card.info.id === itemId)
                : restaurant.card.card["@type"] === TYPES.CardType.NestedItemCategory
                && restaurant.card.card.categories.flatMap(category => category.itemCards).find(item => item.card.info.id === itemId)
        );
    }

    const findCartItem = (restaurantCard: TYPES.restaurantMenuCards, itemId: string) => {
        if (restaurantCard.card.card["@type"] === TYPES.CardType.ItemCategory)
            return restaurantCard.card.card.itemCards.find(restaurant => restaurant.card.info.id === itemId)
        else if (restaurantCard.card.card["@type"] === TYPES.CardType.NestedItemCategory)
            return restaurantCard.card.card.categories.flatMap(category => category.itemCards).find(item => item.card.info.id === itemId)
    }

    const calculatePrice = useMemo(() => {
        let sum = 0
        if (cartItem === undefined || cartItem === 'notExists' || cartItem === null || !cartItem?.itemWithQuantity) {
            console.log('cartItem data is either undefined or doesnt exist', cartItem)
        } else {
            Object.entries(cartItem?.itemWithQuantity).map(([itemId, quantity]) => {
                const foundCartItemCard = data?.restaurantMenu && findCartItemCard(itemId)
                const foundCartItem = foundCartItemCard && findCartItem(foundCartItemCard, itemId)
                if (foundCartItem !== undefined) {
                    sum += ((foundCartItem?.card?.info?.price ?
                        foundCartItem?.card?.info?.price
                        : foundCartItem?.card?.info?.defaultPrice) * quantity)
                }
            })
            return sum / 100
        }
    }, [cartItem])

    const handleIncreament = async (itemId: string, price: number) => {
        if (cartItem === undefined || cartItem === 'notExists') {
            console.log('data is either undefined or doesnt exist', cartItem)
        } else {
            restId = cartItem.restaurantId
            let foundItem = Object.entries(cartItem.itemWithQuantity).find(([key, value]) => key === itemId)
            if (foundItem && user) {
                await updateCart({
                    itemId,
                    user: user?.uid,
                    restaurantId: restId,
                    quantity: foundItem[1] + 1
                })
            }
        }
    }

    const handleDecreament = async (itemId: string, price: number) => {
        if (cartItem === undefined || cartItem === 'notExists') {
            console.log('data is either undefined or doesnt exist', cartItem)
        } else {
            restId = cartItem.restaurantId
            let foundItem = Object.entries(cartItem.itemWithQuantity).find(([key, value]) => key === itemId)
            if (foundItem && user) {
                const cartData = {
                    itemId,
                    user: user?.uid,
                    restaurantId: restId,
                    quantity: foundItem[1] - 1
                }
                if (foundItem[1] === 1) {
                    if (Object.entries(cartItem.itemWithQuantity).length === 1) {
                        cartItemSet.delete(itemId)
                        await deleteCart(user?.uid)
                    } else
                        await updateCart(cartData)
                } else {
                    user &&
                        await updateCart(cartData)
                }
            }
        }
    }

    return isLoading ?
        <SkeletonCart />
        : cartItem === undefined || cartItem === 'notExists' ?
            user ?
                <div className="flex flex-col items-center justify-cente space-y-2 mt-24">
                    <p className="text-xl text-slate-600 font-bold">Your cart is empty!</p>
                    <p className="text-sm pb-4">You can go to homepage to view more restaurants</p>
                    <Link to='/' className=" bg-red-600 text-white text-sm px-6 py-2 font-bold rounded-sm">SEE ALL RESTAURANTS</Link>
                </div >
                : <div className="flex flex-col justify-center items-center mt-32">
                    <p className="text-2xl font-bold text-slate-600">Your cart is empty</p>
                    <p className="text-md">
                        You can
                        <button type='button' className="text-red-500 mx-1"
                            onClick={() => {
                                handleLoginOrSignUp()
                                setUserLoginOrSignup(true)
                            }}
                        >Login/SignUp
                        </button>
                        and go to homepage to view more restaurants
                    </p>
                </div >
            : !user ?
                <div className="flex flex-col justify-center items-center mt-32">
                    <p className="text-2xl font-bold text-slate-600">Your cart is empty</p>
                    <p className="text-md">
                        You can
                        <button type='button' className="text-red-500 mx-1"
                            onClick={() => {
                                handleLoginOrSignUp()
                                setUserLoginOrSignup(true)
                            }}
                        >Login/SignUp
                        </button>
                        and go to homepage to view more restaurants
                    </p>
                </div >
                : cartItem.restaurantId ? (<div className="relative w-full h-screen bg-slate-100">
                    {
                        <div className="flex mx-auto max-w-screen-xl min-w-max pt-10 px-28">
                            <div className="flex md:flex-row md:space-x-8 w-full flex-col">
                                <div className="md:w-8/12 w-10/12">
                                    <div className="flex flex-col justify-around space-y-10 ">
                                        <div className="flex flex-col items-start bg-white space-y-6 py-6 px-8 w-full shadow-lg">
                                            <div className="font-bold text-lg text-slightBlack">Add a delivery address</div>
                                            <input type="text" placeholder="House No/Flat/Building"
                                                className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                            <input type="text" placeholder="Street Address/Colony/Area"
                                                className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                            <input type="text" placeholder="Landmark"
                                                className="border border-b-black w-3/4 placeholder:text-xs placeholder:pl-2 outline-none" />
                                            <button type='button' className="bg-lime-600 font-semibold hover:bg-lime-700 text-white px-4 py-1 text-md rounded-md">Save</button>
                                            <div className="absolute lg:flex hidden items-center justify-center top-8 left-[200px] bg-black p-1 shadow-xl w-10 h-10"><HiLocationMarker size={26} className="text-white" /></div>
                                            <div className="absolute lg:block hidden left-[220px] top-[76px] border-l border-dashed border-gray-400 h-80"></div>
                                        </div>
                                        <div className="bg-white px-8 items-start shadow-lg py-4">
                                            <div className="text-lg text-gray-500 py-4 font-bold">Payment</div>
                                            <div className="absolute lg:flex hidden items-center justify-center top-[425px] left-[200px] bg-black p-1 shadow-xl w-10 h-10"><GiWallet size={24} className="text-white text-center" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative md:w-4/12 w-10/12 flex flex-col space-y-2 bg-white p-6 shadow-lg">
                                    <Link to={`/restaurant/${data?.resInfo.card.card.info.id}`}>
                                        <div className="flex flex-row items-center space-x-4 mb-4">
                                            <img src={`${CLOUDINARY_URL + data?.resInfo?.card?.card?.info?.cloudinaryImageId}`} alt="" className="w-12 h-12" />
                                            <div className="flex flex-col font-semibold after:content-[' '] after:bg-slightBlack after:w-10 after:h-[3px] min-h-[50px]
                                    truncate max-w-xs">
                                                <p className="text-[17px] text-slightBlack">{data?.resInfo?.card?.card?.info?.name}</p>
                                                <p className="text-xs font-normal text-[#686B78] mb-2">{data?.resInfo.card.card.info.areaName}</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className=" flex flex-col w-full">
                                        {
                                            Object.entries(cartItem.itemWithQuantity)?.map(([itemId, quantity], i) => {
                                                const matchingRestaurant = findCartItemCard(itemId)
                                                if (!matchingRestaurant) {
                                                    return <div key={i} className="relative bg-red-50 text-xs font-semibold px-1 py-2 animate-itemNotExistsMessage ">
                                                        Sorry, the item you added is currently unavailable.
                                                    </div>
                                                }

                                                const foundCartItem = findCartItem(matchingRestaurant, itemId)
                                                if (!foundCartItem) {
                                                    return <div key={i} className="relative bg-red-50 text-xs font-semibold px-1 py-2 animate-itemNotExistsMessage ">
                                                        Sorry, the item you added is currently unavailable.
                                                    </div>
                                                }

                                                return (
                                                    <div key={itemId} className="flex flex-row items-center justify-start space-x-2 py-2 w-full">
                                                        <div className="relative top-1 self-start">
                                                            {
                                                                foundCartItem.card?.info?.isVeg === 1 ?
                                                                    <img src={veg} className="w-[15px]" />
                                                                    : <img src={nonveg} className="w-[15px]" />
                                                            }
                                                        </div>
                                                        <div className="flex flex-wrap font-normal text-[13.5px] w-2/4 self-start">
                                                            {foundCartItem.card?.info?.name}
                                                        </div>
                                                        <div className="flex flex-row items-center justify-center space-x-3 border border-gray-200 p-1  font-bold ">
                                                            <button type='button' className=""
                                                                onClick={() => handleDecreament(itemId, foundCartItem.card.info.price ? foundCartItem.card.info.price : foundCartItem.card.info.defaultPrice)}><AiOutlineMinus size={13} className="mt-[2px] text-gray-300" /></button>
                                                            <div className="text-xs text-lime-500">{quantity}</div>
                                                            <button type='button' className=""
                                                                onClick={() => handleIncreament(itemId, foundCartItem.card.info.price ? foundCartItem.card.info.price : foundCartItem.card.info.defaultPrice)}><AiOutlinePlus size={13} className="mt-[2px] text-lime-600" /></button>
                                                        </div>
                                                        <div className="flex text-xs font-semibold justify-center pl-2">
                                                            ₹{((foundCartItem.card?.info?.price ? foundCartItem.card?.info?.price : foundCartItem.card?.info?.defaultPrice) * quantity) / 100}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            )}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <input type="text" placeholder="Any suggestions? We will pass it on..."
                                            className="bg-gray-100 p-3 placeholder:text-xs placeholder:px-4 w-full">
                                        </input>
                                    </div>
                                    <div className="text-[13px]">
                                        <p className="font-medium text-slightBlack">Bill details</p>
                                        <div className="flex items-center justify-between text-[#686b78]">
                                            <p>Item total</p>
                                            <p>₹
                                                {
                                                    calculatePrice
                                                }
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between text-[#686b78]">
                                            <p>Delivery Fee</p>
                                            <p className="text-lime-600">FREE</p>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200"></div>
                                    <div className="text-[13px]">
                                        <div className="flex items-center justify-between text-[#686b78]">
                                            <p>Platform fee</p>
                                            <p>₹3</p>
                                        </div>
                                        <div className="flex items-center justify-between text-[#686b78]">
                                            <p>GST and restaurant charges</p>
                                            <p>₹51.10</p>
                                        </div>
                                    </div>
                                    <div className="border-b border-black border-[1.5px]"></div>
                                    <div className="flex items-center justify-between text-sm font-bold text-slightBlack ">
                                        <p>TO PAY</p>
                                        <p>₹ {
                                            calculatePrice &&
                                            Math.round(calculatePrice + 51.10 + 3)}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                </div>
                )
                    : <div className="flex flex-col items-center justify-cente space-y-2 mt-24">
                        <p className="text-xl text-slate-600 font-bold">Your cart is empty!</p>
                        <p className="text-sm pb-4">You can go to homepage to view more restaurants</p>
                        <Link to='/' className=" bg-red-600 text-white text-sm px-6 py-2 font-bold rounded-sm">SEE ALL RESTAURANTS</Link>
                    </div >
}

export default Cart