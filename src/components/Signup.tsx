import React, { useContext, useState } from "react"
import Login from "./Login"
import { loginOrSignUpContext } from "../context/LoginOrSignup"
import { userContext } from "../context/UserContext"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { AiOutlineClose } from "react-icons/ai"
import { auth } from "../utils/firebaseConfig"

const Signup = () => {

    const [login, setLogin] = useState<boolean>(false)
    const { setUser, user } = useContext(userContext)
    const [haveReferralCode, setHaveReferralCode] = useState<boolean>(false)
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { setUserLoginOrSignup } = useContext(loginOrSignUpContext)
    const [nameNotProvided, setNameNotProvided] = useState<boolean>(false)

    const handleSignup = async () => {
        if (name === '') {
            setNameNotProvided(true)
            setError('Enter your name')
            return
        }
        await createUserWithEmailAndPassword(auth, emailAddress, password)
            .then(async (userCred) => {
                console.log(userCred)
                await updateProfile(userCred.user, { displayName: name })
                    .then(() => {
                        setUserLoginOrSignup(false)
                        setUser(userCred.user)
                    })
            })
            .catch(error =>
                setError(error.message.replace('Firebase:', '')))
    }

    return (
        <>
            {
                login ?
                    <Login />
                    : <div className="flex flex-col justify-between space-y-4 pl-12 pr-20 w-[462px]">
                        <div className=""><AiOutlineClose size={22} onClick={() => setUserLoginOrSignup(false)} className="mt-6 mb-2 cursor-pointer" /></div>
                        <p className="text-2xl font-semibold">Sign Up</p>
                        <p className="flex flex-row items-center text-[13px] mb-12">
                            or
                            <span className="text-rose-600 font-semibold ml-1">
                                <button type="button" onClick={() => setLogin(true)}> login to your account</button>
                            </span>
                        </p>
                        <input type="text" placeholder="Enter your name"
                            className={`border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm ${nameNotProvided && 'border-red-500'}`}
                            value={name} onChange={(e) => setName(e.target.value)} required={true} />
                        <input type="text" required placeholder="Enter your email address"
                            className="mt-12 border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm placeholder:pb-2"
                            value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                        <input type="password" required placeholder="Enter your password"
                            className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        {haveReferralCode ?
                            <input type="text" placeholder="Referral code" required={false}
                                className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm" />
                            :
                            <button type='button' className="text-blue-500 text-left text-sm font-semibold" onClick={() => { setHaveReferralCode(true) }}>Have a referral code?</button>}
                        {
                            error && <div className="text-red-500">{error}</div>
                        }
                        <button type='button' className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm"
                            onClick={handleSignup}>SIGN UP</button>
                    </div>
            }
        </>
    )
}

export default Signup