import React from "react"
import { useAppSelector } from "../store/useStateDispatch"

const Cart = () => {
    const cartState = useAppSelector((state) => state.cart)
    console.log(cartState)
    return (
        <div className="">
            {
                cartState.map(cartItem =>
                    <div key={cartItem.id} className="flex flex-col items-center justify-center font-semibold ">
                        {cartItem.id} - {cartItem.name} - {cartItem.quantity}
                    </div>)
            }
        </div>
    )
}

export default Cart