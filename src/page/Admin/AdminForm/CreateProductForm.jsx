import React from "react";
import GlobalForm from "../../../global_form/GlobalForm";
import GlobalInput from "../../../global_form/GlobalInput";
import {Button} from 'antd'
import GlobalSelectForm from "../../../global_form/GlobalSelectForm";
import { BrandOptions, CategoryOptions, ColorOptions, ModelOptions } from "../../../global_form/GlobalOptions";
import { useAddNewProductMutation } from "../../../App/featchers/product/productApi";
function CreateProductForm() {
  const [addNewData]=useAddNewProductMutation()
  const onSubmit = async(data) => {
    const information = {
      name: data.name,
      brand: data.brand,
      category:data.category ,
      color: data.color,
      description: data.description,
      model: data.model,
      price: Number(data.price),
      quantity: Number(data.quantity),
    }
    
    const res = await addNewData(information)
   
  };
  return (
    <>
      <GlobalForm onSubmit={onSubmit}>
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
        />
        <GlobalSelectForm
          name="model"
          placeholder="Model"
          required={true}
          type="text"
          options={ModelOptions}
        />
        <GlobalSelectForm
          name="brand"
          placeholder="Brand"
          required={true}
          type="text"
          options={BrandOptions}
        />
        <div className="text-center">
          <Button htmlType="submit" style={{ background: "#001529" }} className="text-white mt-4">Create New Product</Button>
        </div>
      </GlobalForm>
    </>
  );
}

export default CreateProductForm;
