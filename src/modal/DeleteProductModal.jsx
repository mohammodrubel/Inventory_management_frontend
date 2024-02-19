import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDeleteProductMutation } from '../App/featchers/product/productApi';

function DeleteProductModel({item}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteData]=useDeleteProductMutation()
  const showModal = () => {setIsModalOpen(true);};
  const handleOk = () => {setIsModalOpen(false);};
  const handleCancel = () => {setIsModalOpen(false);};
  const handelDelete = ()=>{
    console.log(item.key)
    deleteData({id:item.key})
  }
  return (
    <>
      <Button style={{ background: '#001529', color: 'white', fontWeight: '700' }} onClick={showModal}>
        Delete
      </Button>
      <Modal
        title="Delete"
        centered
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: '#1890ff', borderColor: '#1890ff' } }}
      >
        <b>are you sure you want to delete this product ? </b>
        <Button onClick={()=>handelDelete()} style={{ background: '#001529',color:"white", borderColor: '#1890ff' }} className='m-4'>Delete</Button>
      </Modal>
    </>
  );
}

export default DeleteProductModel;
