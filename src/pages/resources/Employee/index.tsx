import { RouteObject } from 'react-router-dom'

const route: RouteObject = {
    path: '/employee',
    children: [
        {
            index: true,
            lazy: ()=>import('./List')
        }
    ]
}

export { route as employeeRoute }