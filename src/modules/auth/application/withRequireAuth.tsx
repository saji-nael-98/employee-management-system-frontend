import { useIsAuthenticated } from 'react-auth-kit'
function withRequireAuth<T>(Component: React.FC<T>) {
    const NewComponent = (props: T) => {
        const isAuthenticated = useIsAuthenticated()
        if (!isAuthenticated()) {
            return null
        }
        return <Component {...props} />
    }
    return NewComponent
}
export { withRequireAuth }