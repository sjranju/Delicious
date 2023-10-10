import { User } from "firebase/auth"
import React, { ReactElement, createContext, useState } from "react"

interface iUserContext {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const userContext = createContext<iUserContext>({} as iUserContext)

const UserContext = (props: { children: ReactElement }) => {
    const [user, setUser] = useState<User | null>(null)

    return (
        <userContext.Provider value={{ user, setUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContext