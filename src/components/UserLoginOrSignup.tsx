import React, { useContext } from "react"
import Login from "./Login"
import { loginOrSignUpContext } from "../context/LoginOrSignup"

const UserLoginOrSignup = () => {

    const { userLoginOrSignUp, setUserLoginOrSignup } = useContext(loginOrSignUpContext)
    return (
        <div className="fixed top-0 bg-white h-full">
            {
                userLoginOrSignUp &&
                <Login />
            }
        </div>
    )
}

export default UserLoginOrSignup