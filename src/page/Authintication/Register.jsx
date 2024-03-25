import React from 'react'
import '../../style/auth.css'
import GlobalForm from '../../global_form/GlobalForm'
import GlobalInput from '../../global_form/GlobalInput'
import {Button} from 'antd'
import {useRegisterMutation} from '../../App/featchers/Auth/AuthApi'
import {toast,Toaster} from 'sonner'
import { Link } from 'react-router-dom'


function Register() {
  const [registerData] = useRegisterMutation()
    const onSubmit = async(data)=>{
        if(data.password !== data.confirmPassword){
          alert('passsrod did not matched!')
        }
        const information = {
          userName : data.userName,
          email : data.email,
          password : data.password,
        }
      const res = await  registerData(information)
      toast.success('hello world')
    }
  return (
    <div className='authintication'>
    <div className='container mx-auto'>
       <div className='myDiv'>
            <GlobalForm onSubmit={onSubmit}>
                <GlobalInput label="User Name" name="userName" placeholder="Input Your Name" required={true} type="text" />
                <GlobalInput label="Email" name="email" placeholder="Input Your Email" required={true} type="email" />
                <GlobalInput label="Password" name="password" placeholder="Input Your Password" required={true} type="password" />
                <GlobalInput label="Confirm Passowrd" name="confirmPassword" placeholder="Confirm Password" required={true} type="password" />
                <Button htmlType='submit' className='mt-4 w-full bg-white font-bold'>Registration</Button>
                <div className='text-center'><b className='text-white'>If you have already Account Please <Link to='/login'>Login</Link></b></div>
            </GlobalForm>
        </div>
    </div>
    
</div>
  )
}

export default Register