import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'
import { employeeRoute } from './resources/Employee'
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
                    <Outlet />
                </RequireAuth>,
                children: [
                    employeeRoute
                ]
            },
        ]
    }
])