import React, { ReactElement, createContext, useState } from "react"

interface iFilterRestaurants {
    filterRestaurants: string | null,
    setFilterRestaurants: React.Dispatch<React.SetStateAction<string | null>>
}

export const filterRestaurantsContext = createContext<iFilterRestaurants>({} as iFilterRestaurants)

const FilterRestaurantsContext = (props: { children: ReactElement }) => {
    const [filterRestaurants, setFilterRestaurants] = useState<string | null>(null)
    return (
        <filterRestaurantsContext.Provider value={{ filterRestaurants, setFilterRestaurants }}>
            {props.children}
        </filterRestaurantsContext.Provider>
    )
}

export default FilterRestaurantsContext