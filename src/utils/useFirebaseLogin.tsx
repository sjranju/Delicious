import { useMutation } from '@tanstack/react-query'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'

type LoginProps = {
    email: string,
    password: string
}

const useFirebaseLogin = ({ email, password }: LoginProps) => {

    const userLogin = async (email: string, password: string) => {
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user
    }

    const loginMutation = useMutation({ mutationFn: async () => await userLogin(email, password) })

    return loginMutation

}

export default useFirebaseLogin
