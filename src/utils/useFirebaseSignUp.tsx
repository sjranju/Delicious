import { useMutation } from '@tanstack/react-query'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from './firebaseConfig'

type SignUpProps = {
    email: string,
    password: string,
    displayName: string
}

const useFirebaseSignUp = ({ email, password, displayName }: SignUpProps) => {

    const signUpMutationFn = async (email: string, password: string, displayName: string) => {

        const userCred = await createUserWithEmailAndPassword(auth, email, password)
        console.log('userCred', userCred)
        await updateProfile(userCred.user, { displayName })
            .then(res => console.log(res))

        return userCred
    }

    const signUpMutation = useMutation({ mutationFn: () => signUpMutationFn(email, password, displayName) })

    return signUpMutation
}

export default useFirebaseSignUp
