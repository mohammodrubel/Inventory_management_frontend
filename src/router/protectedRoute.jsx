import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentToken } from '../App/featchers/Auth/AuthSlice'
import {Navigate} from 'react-router-dom'

function ProtectedRoute({children}) {
    const token = useSelector(currentToken)
   
        if(!token){
            return <Navigate to='/login' replace={true}></Navigate>
        }
    return children
}

export default ProtectedRoute