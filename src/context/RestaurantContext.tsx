import React, { ReactElement, createContext, useState } from "react"

interface iRestaurantId {
    restaurantId: string | null,
    setRestaurantId: React.Dispatch<React.SetStateAction<string | null>>
}

export const restaurantContext = createContext<iRestaurantId>({} as iRestaurantId)

const RestaurantContext = (props: { children: ReactElement }) => {
    const [restaurantId, setRestaurantId] = useState<string | null>(null)
    return (
        <restaurantContext.Provider value={{ restaurantId, setRestaurantId }}>
            {props.children}
        </restaurantContext.Provider>
    )
}

export default RestaurantContext