import { createBrowserRouter, } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'
export const router = createBrowserRouter([
    {
        path: '/',
        lazy: () => import('./Root'),
        children: [
            {
                path: 'login',
                lazy: () => import('./Login')
            },
            {
                path: '',
                element: <RequireAuth loginPath={'/login'}>
                    <div>sjai</div>
                </RequireAuth>
            }
        ]
    }
])