import { signInWithPopup } from "firebase/auth"
import { UserAccessaction, UserEmailaction } from "../redux/action/UserAccess.action"
import { toast } from "react-toastify"

async function SignInGoogle (auth, provider, dispatch, navigate) {
    try {
        const res = await signInWithPopup(auth, provider)
        dispatch(UserAccessaction(res._tokenResponse.localId))
        dispatch(UserEmailaction(res.user.email))
        localStorage.setItem('AccessKey',res._tokenResponse.localId)
        navigate('/')
    } catch (error) {
        toast.error(error.code)
    }
}

export default SignInGoogle