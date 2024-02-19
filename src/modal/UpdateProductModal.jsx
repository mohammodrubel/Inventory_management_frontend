import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import UpdateProductForm from '../page/Admin/AdminForm/UpdateProductForm';

function UpdateProductModel({item}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button style={{ background: '#001529', color: 'white', fontWeight: '700' }} onClick={showModal}>
        Update Product
      </Button>
      <Modal
        title="Update Product"
        centered
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: '#1890ff', borderColor: '#1890ff' } }}
      >
        <UpdateProductForm item={item} />
      </Modal>
    </>
  );
}

export default UpdateProductModel;
