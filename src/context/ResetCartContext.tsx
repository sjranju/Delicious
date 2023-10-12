import React, { ReactElement, createContext, useState } from "react"

type CartContext = {
    reset: boolean,
    itemId: string
}

type CartContextState = {
    resetCart: CartContext | null
    setResetCart: React.Dispatch<React.SetStateAction<CartContext | null>>
}

export const resetCartContext = createContext<CartContextState>({} as CartContextState)

const ResetCartContext = (props: { children: ReactElement }) => {
    const [resetCart, setResetCart] = useState<CartContext | null>(null)
    return (
        <resetCartContext.Provider value={{ resetCart, setResetCart }}>
            {props.children}
        </resetCartContext.Provider>
    )
}

export default ResetCartContext