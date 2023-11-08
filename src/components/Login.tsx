import React, { useContext, useState } from "react"
import Signup from "./Signup"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { userContext } from "../context/UserContext"
import { app } from "../utils/firebaseConfig"
import { loginOrSignUpContext } from "../context/LoginOrSignup"

const Login = () => {
    const [signUp, setSignUp] = useState<boolean>(false)
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setUser } = useContext(userContext)
    const { setUserLoginOrSignup } = useContext(loginOrSignUpContext)

    const handleLogin = async (emailAddress: string, password: string) => {
        const auth = getAuth(app)
        await signInWithEmailAndPassword(auth, emailAddress, password)
            .then(userCredential => {
                console.log(userCredential)
                setUserLoginOrSignup(false)
                setUser(userCredential.user)
            })
            .catch(error => console.log(error))
            .catch(error => console.log(error))
    }

    return (
        <div className="flex flex-col justify-between space-y-4">
            {
                signUp ?
                    <Signup />
                    :
                    <>
                        <p className="text-2xl font-semibold">Login</p>
                        <p className="flex flex-row items-center text-[13px]">
                            or
                            <span className="text-rose-600 font-semibold ml-1">
                                <button type="button" onClick={() => setSignUp(true)}> create an account</button>
                            </span>
                        </p>
                        <input type="text" placeholder="Enter your email address"
                            className="mt-12 border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm placeholder:pb-2"
                            value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                        <input type="password" placeholder="Enter your password"
                            className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm"
                            onClick={() => handleLogin(emailAddress, password)}>LOGIN</button>
                    </>
            }
        </div>
    )
}

export default Login