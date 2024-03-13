import React from "react";
import GlobalForm from "../../../global_form/GlobalForm";
import GlobalInput from "../../../global_form/GlobalInput";
import GlobalSelectForm from "../../../global_form/GlobalSelectForm";
import {Button} from 'antd'
import {toast} from 'sonner'
import { Controller } from 'react-hook-form'; 
import { BrandOptions, CategoryOptions, ColorOptions, ModelOptions } from "../../../global_form/GlobalOptions";
import {  useCloneProductMutation } from "../../../App/featchers/product/productApi";


function CloneProductForm({item}) {
  const [cloneData] =useCloneProductMutation()

  const onSubmit = async(data) => {
    console.log(data)
    const updateData = {
      productPhoto: item.productPhoto,
      name: data?.name || item.name,
      category: data?.category || item.category,
      price: Number(data?.price || item.price), 
      quantity: Number(data?.quantity || item.quantity),
      color: data?.color || item.color,
      model: data?.model || item.model,
      brand: data?.brand || item.brand
    }
    const updateInfo = {
      id:item.key,
      data:updateData
    }
    const res = await cloneData(updateInfo)
    
    if(res?.data?.data.success){
      toast.success(res?.data?.data?.message)
    }
    
  };
  return (
    <>
     <GlobalForm onSubmit={onSubmit}>
        
       
        <GlobalInput
          name="name"
          placeholder="Product Name"
          required={true}
          type="text"
          defaultValue={item.name}
        />
         <GlobalSelectForm
          name="category"
          placeholder="Category"
          required={true}
          type="text"
          defaultValue={item.category}
          options={CategoryOptions}
        />
        <GlobalInput
          name="price"
          placeholder="Price"
          required={true}
          type="number"
          defaultValue={item.price}
        />
        <GlobalInput
          name="quantity"
          placeholder="Quantity"
          required={true}
          type="number"
          defaultValue={item.quantity}
        />
        <GlobalSelectForm
          name="color"
          options={ColorOptions}
          required={true}
          type="text"
          defaultValue={item?.color}
        />
        <GlobalSelectForm
          name="model"
          placeholder="Model"
          required={true}
          type="text"
          options={ModelOptions}
          defaultValue={item.model}
        />
        <GlobalSelectForm
          name="brand"
          placeholder="Brand"
          required={true}
          type="text"
          options={BrandOptions}
          defaultValue={item.brand}
        />
        <div className="text-center">
          <Button htmlType="submit" style={{ background: "#001529" }} className="text-white mt-4">Update Product</Button>
        </div>
      </GlobalForm>
    </>
  );
}

export default CloneProductForm;
