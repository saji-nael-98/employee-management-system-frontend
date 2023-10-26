import { useSignIn as useAuthSignIn } from "react-auth-kit";
import { useSignInNotification } from "."
import { axiosClient } from "../../../utils"
import { IForm } from "../types"
import { useMutation } from '@tanstack/react-query'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const useSignIn = () => {
    const signIn = useAuthSignIn()
    const navigate = useNavigate()
    const { failedSignedInNotification, successedSignInNotification } = useSignInNotification()
    const { mutate } = useMutation({
        mutationKey: ['sign-in'],
        mutationFn: (values: IForm) => axiosClient.post('/auth/login', values),
        onSuccess(data, _variables, _context) {
            successedSignInNotification(data?.username)
            const payload = jwt_decode(data.token)
            if (signIn({
                token: data.token,
                tokenType: "Bearer",
                expiresIn: payload.exp,
                authState: undefined,
            })) {
                navigate('/')
            }
        },
        onError(_error, _variables, _context) {
            failedSignedInNotification()
        },
    })
    const formValuesHandler = (values: IForm) => {
        console.log(values)
        mutate(values)
    }
    return [formValuesHandler] as const
}
export { useSignIn }