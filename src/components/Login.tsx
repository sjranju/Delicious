import React, { useContext, useState } from "react"
import Signup from "./Signup"
import { loginOrSignUpContext } from "../context/LoginOrSignup"
import useFirebaseLogin from "../utils/useFirebaseLogin"
import useAuthState from "../utils/useAuthState"

const Login = () => {
    const [signUp, setSignUp] = useState<boolean>(false)
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setUserLoginOrSignup } = useContext(loginOrSignUpContext)
    const loginMutation = useFirebaseLogin({ email: emailAddress, password })
    const { data: user } = useAuthState()

    const handleLogin = async () => {
        if (!user) {
            loginMutation.mutate()
            loginMutation.isLoading && console.log('Loading login')
            loginMutation.isSuccess && setUserLoginOrSignup(false)
            console.log('loginMutation.mutate', loginMutation.data)
        }
        // if (loginMutation.isSuccess) {
        //     console.log(loginMutation.data?.user)
        //     setUserLoginOrSignup(false)
        // }
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
                        <button type="submit" className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm"
                            onClick={handleLogin}>LOGIN</button>
                        {loginMutation.isError && <div className="text-red-500">{loginMutation.error as string}</div>}
                    </>
            }
        </div>
    )
}

export default Login