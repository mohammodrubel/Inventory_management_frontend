import React from "react";
import GlobalForm from "../../../global_form/GlobalForm";
import GlobalInput from "../../../global_form/GlobalInput";
import {Button} from 'antd'
import { Controller } from 'react-hook-form'; 
import { Input } from 'antd';
import {Form} from 'antd'
import GlobalSelectForm from "../../../global_form/GlobalSelectForm";
import { BrandOptions, CategoryOptions, ColorOptions, ModelOptions } from "../../../global_form/GlobalOptions";
import { useAddNewProductMutation } from "../../../App/featchers/product/productApi";
function CreateProductForm() {
  const [addNewData]=useAddNewProductMutation()
  const onSubmit = async (data) => {
    try {
      const API_KEY = 'a4c0dd966ecf053081c192b4eebd2868';
      const image = data.picture;
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${API_KEY}`;
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        if (result.success === true) {
          const photo = result.data.display_url;
          const information = {
            productPhoto: photo,
            name: data.name,
            brand: data.brand,
            category: data.category,
            color: data.color,
            description: data.description,
            model: data.model,
            price: Number(data.price),
            quantity: Number(data.quantity),
          };
          const res = await addNewData(information);
          console.log(res);
        }
      } else {
        console.error('Error uploading image:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <GlobalForm onSubmit={onSubmit}>

      <Controller  
        name="picture"
          render={({field:{onChange,value,...field}})=>(
            <Form.Item>
              <Input 
              value={value?.fileName} 
              type="file" 
              {...field} 
              onChange={(e)=>onChange(e.target?.files?.[0])} 
              />
            </Form.Item>
          )}
        />
       
        <GlobalInput
          name="name"
          placeholder="Product Name"
          required={true}
          type="text"
        />
       
        <GlobalSelectForm
          name="category"
          placeholder="Category"
          required={true}
          type="text"
          options={CategoryOptions}
          defaultValue="CategoryOptions"
        />
        <GlobalInput
          name="price"
          placeholder="Price"
          required={true}
          type="number"
        />
        <GlobalInput
          name="quantity"
          placeholder="Quantity"
          required={true}
          type="number"
        />
        <GlobalSelectForm
          name="color"
          options={ColorOptions}
          required={true}
          type="text"
          defaultValue="ColorOptions"
        />
        <GlobalSelectForm
          name="model"
          placeholder="Model"
          required={true}
          type="text"
          options={ModelOptions}
          defaultValue="ModelOptions"
        />
        <GlobalSelectForm
          name="brand"
          placeholder="Brand"
          required={true}
          type="text"
          options={BrandOptions}
          defaultValue="BrandOptions"
        />
        <div className="text-center">
          <Button htmlType="submit" style={{ background: "#001529" }} className="text-white mt-4">Create New Product</Button>
        </div>
      </GlobalForm>
    </>
  );
}

export default CreateProductForm;
