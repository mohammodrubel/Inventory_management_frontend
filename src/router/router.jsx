import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { adminPath } from './AdminRoute'
import Login from '../page/Authintication/Login'
import Register from '../page/Authintication/Register'
import ProtectedRoute from './protectedRoute'
import { userPath } from './UserRoute'
import { RouterGenarator } from '../utils/RouterGenerator'


const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<ProtectedRoute><App/></ProtectedRoute>,
        },
        {
            path:'/admin',
            element:<ProtectedRoute><App/></ProtectedRoute>,
            children:RouterGenarator(adminPath)
        },
        {
            path:'/user',
            element:<ProtectedRoute><App/></ProtectedRoute>,
            children:RouterGenarator(userPath)
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        }
    ]
)

export default router 