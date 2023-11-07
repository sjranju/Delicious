import React, { ReactElement, createContext, useState } from 'react'

interface iUserLoginOrSignUp {
    userLoginOrSignUp: boolean,
    setUserLoginOrSignup: React.Dispatch<React.SetStateAction<boolean>>
}

export const loginOrSignUpContext = createContext<iUserLoginOrSignUp>({} as iUserLoginOrSignUp)

const LoginOrSignup = (props: { children: ReactElement }) => {
    const [userLoginOrSignUp, setUserLoginOrSignup] = useState<boolean>(false)
    return (
        <loginOrSignUpContext.Provider value={{ userLoginOrSignUp, setUserLoginOrSignup }}>
            {props.children}
        </loginOrSignUpContext.Provider>
    )
}

export default LoginOrSignup
