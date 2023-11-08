import React, { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import Login from "./Login"
import { loginOrSignUpContext } from "../context/LoginOrSignup"

const UserLoginOrSignup = () => {

    const { userLoginOrSignUp, setUserLoginOrSignup } = useContext(loginOrSignUpContext)
    console.log('userLoginOrSignUp', userLoginOrSignUp)
    return (
        <div className="">
            <div className=""><AiOutlineClose onClick={() => setUserLoginOrSignup(false)} className="absolute mt-6 mb-12 top-0" /></div>
            {
                userLoginOrSignUp &&
                <Login />
            }

        </div>
    )
}

export default UserLoginOrSignup