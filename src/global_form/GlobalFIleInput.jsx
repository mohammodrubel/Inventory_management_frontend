import React from 'react';
import { Controller, useForm } from 'react-hook-form'; 
import {Input} from 'antd'

function GlobalFileInput({ name, type, label, required, placeholder }) {
    const { control, handleSubmit } = useForm();

  return (
    <>
      {label && <p>{label}</p>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type={type}
            onChange={(e) => {
              field.onChange(e);
            }}
            className="w-full"
            required={required}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
}

export default GlobalFileInput;
