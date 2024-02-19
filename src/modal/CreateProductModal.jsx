import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateProductForm from '../page/Admin/AdminForm/CreateProductForm';

function CreateProductModal() {
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
        Create New Product
      </Button>
      <Modal
        title="Create New Product"
        centered
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: '#1890ff', borderColor: '#1890ff' } }}
      >
        <CreateProductForm />
      </Modal>
    </>
  );
}

export default CreateProductModal;
