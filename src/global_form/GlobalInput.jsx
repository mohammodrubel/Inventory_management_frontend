import React from 'react'
import { Controller } from 'react-hook-form'
import {Input} from 'antd'

function GlobalInput({type,name,label,placeholder,required,defaultValue}) {

  return (
    <>
    {label && <p>{label? label : null}</p>}
    <Controller
    name={name} 
    render={({field})=>(
    <Input type={type} defaultValue={defaultValue} {...field} style={{minWidth:'310px'}} className='w-full mt-5' required={required} placeholder={placeholder} />
    )}
    />
    
    </>
  )
}

export default GlobalInput