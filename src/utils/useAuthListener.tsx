import React, { useContext, useEffect } from "react"
import { userContext } from "../context/UserContext"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebaseConfig"

const useAuthListener = () => {

    const { setUser, user } = useContext(userContext)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [user])

    return (user)
}
export default useAuthListener