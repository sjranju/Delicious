import React from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebaseConfig'
import { useQuery } from '@tanstack/react-query'

const useAuthState = () => {

    return useQuery(['user'], async (): Promise<User | null> => {
        return new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => resolve(user))
            return unsubscribe
        })
    })

}

export default useAuthState
