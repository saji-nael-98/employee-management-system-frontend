import { useIsAuthenticated } from 'react-auth-kit'
const withRequireAuth = (Component: React.FC) => {
    const NewComponent = () => {
        const isAuthenticated = useIsAuthenticated()
        if (!isAuthenticated()) {
            return null
        }
        return <Component />
    }
    return NewComponent
}
export { withRequireAuth }