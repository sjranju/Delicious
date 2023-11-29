import { useMutation } from '@tanstack/react-query'
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'

type LoginProps = {
    email: string,
    password: string
}

const useFirebaseLogin = () => {

    const loginMutation = useMutation({
        mutationFn: async ({ email, password }: LoginProps) =>
            await signInWithEmailAndPassword(auth, email, password)
                .then(res => res.user)
                .catch(error => error as string)

    })

    return loginMutation

}

export default useFirebaseLogin
