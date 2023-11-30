import React, { useContext, useState } from "react"
import Signup from "./Signup"
import { loginOrSignUpContext } from "../context/LoginOrSignup"
import { userContext } from "../context/UserContext"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { AiOutlineClose } from "react-icons/ai"
import { app } from "../utils/firebaseConfig"

type LoginProps = {
    email: string,
    password: string
}

const Login = () => {
    const [signUp, setSignUp] = useState<boolean>(false)
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { setUserLoginOrSignup } = useContext(loginOrSignUpContext)
    const { user, setUser } = useContext(userContext)

    const handleLogin = async () => {
        const auth = getAuth(app)
        await signInWithEmailAndPassword(auth, emailAddress, password)
            .then(userCredential => {
                console.log(userCredential)
                setUserLoginOrSignup(false)
                setUser(userCredential.user)
            })
            .catch(error => {
                console.log(error)
                setError(error.message.replace('Firebase: ', ''))
            })
    }

    return (
        <>
            {
                signUp ?
                    <Signup />
                    :
                    <div className="flex flex-col justify-between space-y-4 pl-12 pr-20 w-[462px]">
                        <div className=""><AiOutlineClose size={22} onClick={() => setUserLoginOrSignup(false)} className="mt-6 mb-2 cursor-pointer" /></div>
                        <p className="text-2xl font-semibold">Login</p>
                        <p className="flex flex-row items-center text-[14px]">
                            or
                            <span className="text-rose-600 font-medium ml-1">
                                <button type="button" onClick={() => setSignUp(true)}> create an account</button>
                            </span>
                        </p>
                        <input type="text" placeholder="Enter your email address"
                            className="mt-12 border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm placeholder:pb-2"
                            value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                        <input type="password" placeholder="Enter your password"
                            className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        {error && <div className="text-red-500">{error}</div>}
                        <button type="submit" className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm"
                            onClick={handleLogin}>LOGIN</button>
                    </div>
            }
        </>
    )
}

export default Login