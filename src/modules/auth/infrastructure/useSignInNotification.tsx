import { notifications } from '@mantine/notifications';

export const useSignInNotification = () => {
    const successedSignInNotification = (username: string) => {
        notifications.show({
            message: `Welcome ${username} 😁`
        })
    }
    const failedSignedInNotification = () => {
        notifications.show({
            message: 'Failed to sign in!',
            color: 'red'
        })
    }
    return {
        successedSignInNotification,
        failedSignedInNotification
    }
}
