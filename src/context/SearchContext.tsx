import React, { ReactElement, createContext, useState } from "react"

interface iRestaurantId {
    restaurantId: string | null,
    setRestaurantId: React.Dispatch<React.SetStateAction<string | null>>
}

export const searchContext = createContext<iRestaurantId>({} as iRestaurantId)

const SearchContext = (props: { children: ReactElement }) => {
    const [restaurantId, setRestaurantId] = useState<string | null>(null)
    return (
        <searchContext.Provider value={{ restaurantId, setRestaurantId }}>
            {props.children}
        </searchContext.Provider>
    )
}

export default SearchContext