import React, { useContext } from "react"
import { useAppSelector } from "../store/useStateDispatch"
import { useGetCartItemsQuery } from "../RTKQuery/cartQuery"
import { restuarantContext } from "../context/RestaurantContext"
import { userContext } from "../context/UserContext"

const Cart = () => {
    const { restaurantId } = useContext(restuarantContext)
    const { user } = useContext(userContext)
    const { data } = useGetCartItemsQuery(user?.uid!)
    // console.log(data)
    return (
        <div className="">
            {
                data === undefined || data === 'notExists' ?
                    <div className="">You cart is empty, please add some items</div>
                    : <div className="">
                        {
                            data?.itemIds + '-' + data?.restaurantId
                        }
                    </div>
            }
        </div>
    )
}

export default Cart