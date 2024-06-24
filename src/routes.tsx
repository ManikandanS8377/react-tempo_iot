
import React from 'react'
const Dashboard = React.lazy(() => import('./views/pages/Dashboard'))
const Login = React.lazy(() => import('./views/pages/Login'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/login', name: 'Login', element: Login, exact: true },
]

export default routes