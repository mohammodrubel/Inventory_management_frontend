import React from 'react'
import GlobalForm from '../../../global_form/GlobalForm'
import GlobalInput from '../../../global_form/GlobalInput'
import {Button} from 'antd'
import {toast} from 'sonner'
import { useAddNewProductSalesMutation } from '../../../App/featchers/product/productApi'


function SalesProductForm ({item}) {
  const [salesData]=useAddNewProductSalesMutation()
    const onSubmit = async(data)=>{
      const SalesInformation = {
        product:item.key,
        ...data
      }
      const res = await salesData(SalesInformation)
     
       if(res?.data?.data?.message){
        toast.success(res?.data?.data?.message)
       }
       
       if(res?.error?.data?.message){
        toast.error(res?.error?.data?.message)
       }
    }
  return (
    <div>
        <>
      <GlobalForm onSubmit={onSubmit}>
        <GlobalInput
          name="name"
          placeholder="Bayer Name Name"
          required={true}
          type="text"
        />
        
        <GlobalInput
          name="quantity"
          placeholder="Quantity"
          required={true}
          type="number"
        />

        <GlobalInput
          name="date"
          required={true}
          type="date"
        />
        <div className="text-center">
          <Button htmlType="submit" style={{ background: "#001529" }} className="text-white mt-4">Sales Product</Button>
        </div>
      </GlobalForm>
    </>
    </div>
  )
}

export default SalesProductForm