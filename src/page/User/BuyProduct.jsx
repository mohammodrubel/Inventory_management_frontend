import React, { useState } from 'react';
import { Table, Input,Pagination } from 'antd';
import CreateProductModal from '../../modal/CreateProductModal';
import SaleProductModal from '../../modal/SaleProductModal';
import '../../style/CreateProduct.css';
import { useGetAllProductQuery } from '../../App/featchers/product/productApi'; 
import { BrandOptions, CategoryOptions, ColorOptions, ModelOptions } from '../../global_form/GlobalOptions';

function BuyProduct() {
  const [params, setParams] = useState([]);
  const [inputValue,setInputValue]=useState('')
  const [limit,setLimit]=useState(5)
  const [page, setPage] = useState(1);
  const { data: productData, isLoading } = useGetAllProductQuery([
    { name: 'searchTerm', value: inputValue },
    { name: 'limit', value: limit },
    { name: 'page', value: page },
    ...params
  ]);
  const mainData = productData?.data?.data?.result.map(({ _id, name, price, quantity, color, model, brand, category }) => ({
    key: _id, name, price, quantity, color, model, brand, category
  }));
  
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: CategoryOptions.map((item) => ({text:item.label,value:item.value})),
      onFilter: (value, record) => record.category === value,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      filters: ColorOptions.map((item) => ({text:item.label,value:item.value})),
      onFilter: (value, record) => record.color === value,
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
      filters: ModelOptions.map((item) => ({text:item.label,value:item.value})),
      onFilter: (value, record) => record.model === value,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      filters: BrandOptions.map((item) => ({text:item.label,value:item.value})),
      onFilter: (value, record) => record.brand === value,
    },
    
    {
      title: 'Sale',
      render: (item) => <SaleProductModal item={item}></SaleProductModal>,
      className: 'table-cell-center'
    },
    
  ];

  

  const onChange = (pagination, filters, sorter, extra) => {
    if(extra.action === "filter"){
      const queryFilter = []
      // category 
      filters.category?.forEach((item) => queryFilter.push({name:"category",value:item}))
      // category 
      filters.color?.forEach((item) => queryFilter.push({name:"color",value:item}))
      setParams(queryFilter)
      // model 
      filters.model?.forEach((item) => queryFilter.push({name:"model",value:item}))
      setParams(queryFilter)
      // category 
      filters.brand?.forEach((item) => queryFilter.push({name:"brand",value:item}))
      setParams(queryFilter)
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center flex-wrap'>
        <Input placeholder='Search Product' onChange={(e)=>setInputValue(e.target.value)} style={{width:'300px'}} type="text" />
      </div>
      <div className='mt-5' style={{ overflowX: 'auto'}}>
        <Table pagination={false} loading={isLoading} onChange={onChange} dataSource={mainData} columns={columns} scroll={{ x: true }} />
      </div>
      <div style={{ textAlign: 'end', marginTop: '20px' }}>
        <Pagination onChange={(value)=>setPage(value)} pageSize={limit} total={productData?.data?.data.countTotal
} />
      </div>
    </div>
  );
}

export default BuyProduct;
