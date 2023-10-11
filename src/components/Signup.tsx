import React, { Dispatch, useContext, useState } from "react"
import Login from "./Login"
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { userContext } from "../context/UserContext"
import { auth } from "../utils/firebaseConfig"

const Signup = (props: { setUserLoginOrSignup: Dispatch<React.SetStateAction<boolean>> }) => {

    const [login, setLogin] = useState<boolean>(false)
    const [haveReferralCode, setHaveReferralCode] = useState<boolean>(false)
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const { setUser } = useContext(userContext)

    const handleSignup = async (name: string, emailAddress: string, password: string) => {
        await createUserWithEmailAndPassword(auth, emailAddress, password)
            .then(async (userCred) => {
                console.log(userCred)
                await updateProfile(userCred.user, { displayName: name })
                    .then(() => {
                        props.setUserLoginOrSignup(false)
                        setUser(userCred.user)
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <>{
            login ?
                <Login setUserLoginOrSignup={props.setUserLoginOrSignup} />
                : <>
                    <p className="text-2xl font-semibold">Sign Up</p>
                    <p className="flex flex-row items-center text-[13px] mb-12">
                        or
                        <span className="text-rose-600 font-semibold ml-1">
                            <button type="button" onClick={() => setLogin(true)}> login to your account</button>
                        </span>
                    </p>
                    <input type="text" placeholder="Enter your name"
                        className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Enter your email address"
                        className="mt-12 border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm placeholder:pb-2"
                        value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                    <input type="password" placeholder="Enter your password"
                        className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    {haveReferralCode ?
                        <input type="text" placeholder="Referral code" required={false}
                            className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm" />
                        :
                        <button className="text-blue-500 text-left text-sm font-semibold" onClick={() => { setHaveReferralCode(true) }}>Have a referral code?</button>}
                    <button className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm"
                        onClick={() => handleSignup(name, emailAddress, password)}>SIGN UP</button>
                </>
        }
        </>
    )
}

export default Signup