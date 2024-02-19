import React from 'react'
import {Controller} from 'react-hook-form'
import { Select } from 'antd';

function GlobalSelectForm({label,type,name,required,placeholder,options,defaultValue}) {
  return (
    <>
    {label && <p>{label? label : null}</p>}
    <Controller
    name={name} 
    render={({field})=>(
    <Select type={type} defaultValue={defaultValue} {...field} className='w-full mt-5' required={required} options={options} />
    )}
    />
    
    </>
  )
}

export default GlobalSelectForm