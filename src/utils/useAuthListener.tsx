import { useContext, useEffect } from "react"
import { userContext } from "../context/UserContext"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebaseConfig"

const useAuthListener = () => {

    const { setUser, user } = useContext(userContext)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user || null)
        })
    }, [user])

    return (user)
}
export default useAuthListener