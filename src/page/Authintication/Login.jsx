import React from 'react'
import '../../style/auth.css'
import GlobalForm from '../../global_form/GlobalForm'
import GlobalInput from '../../global_form/GlobalInput'
import {Button} from 'antd'
import { useLoginMutation } from '../../App/featchers/Auth/AuthApi'
import {useDispatch} from 'react-redux'
import { setUsers } from '../../App/featchers/Auth/AuthSlice'
import veryfyToken from '../../utils/veryfyToken'
import { useNavigate } from "react-router-dom";
import {toast,Toaster} from 'sonner'

function Login() {
  const [loginUser,{data:userInfo,isLoading}] = useLoginMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch()
    const onSubmit = async(data)=>{
      try{
        const res = await loginUser(data).unwrap()
      const user = veryfyToken(res?.data?.data?.accessToken)
      dispatch(setUsers({user:user,token:res?.data?.data.accessToken}))
      toast.success(res.message)
      navigate(`/${user.role}/dashbord`,{replace:true})
      }catch(error){
        toast.error(error?.data?.message)
      }
    }
  return (
    <div className='authintication'>
    <div className='container mx-auto'>
       <div className='myDiv'>
            <GlobalForm onSubmit={onSubmit}>
                <GlobalInput label="Email" name="email" placeholder="Input Your Email" required={true} type="email" />
                <GlobalInput label="Password" name="password" placeholder="Input Your Password" required={true} type="password" />
                <Button htmlType='submit' className='mt-4 text-black w-full bg-white font-bold'>{isLoading ? 'processing' : "Login"}</Button>
            </GlobalForm>
        </div>
    </div>
</div>
  )
}

export default Login