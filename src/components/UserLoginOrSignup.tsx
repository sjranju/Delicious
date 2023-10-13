import React, { Dispatch } from "react"
import { AiOutlineClose } from "react-icons/ai"
import Login from "./Login"

const UserLoginOrSignup = (props: { userLoginOrSignup: boolean, setUserLoginOrSignup: Dispatch<React.SetStateAction<boolean>> }) => {

    const { userLoginOrSignup, setUserLoginOrSignup } = props

    return (
        <div className="">
            <div className=""><AiOutlineClose onClick={() => setUserLoginOrSignup(false)} className="absolute mt-6 mb-12 top-0" /></div>
            {
                userLoginOrSignup &&
                <Login setUserLoginOrSignup={setUserLoginOrSignup} />
            }

        </div>
    )
}

export default UserLoginOrSignup