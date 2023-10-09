import React, { ReactElement, createContext, useState } from "react"

interface iRestaurantId {
    restuarantId: string | null,
    setRestaurantId: React.Dispatch<React.SetStateAction<string | null>>
}

export const restuarantContext = createContext<iRestaurantId>({} as iRestaurantId)

const RestaurantContext = (props: { children: ReactElement }) => {
    const [restuarantId, setRestaurantId] = useState<string | null>(null)
    return (
        <restuarantContext.Provider value={{ restuarantId, setRestaurantId }}>
            {props.children}
        </restuarantContext.Provider>
    )
}

export default RestaurantContext