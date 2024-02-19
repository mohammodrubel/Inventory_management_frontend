import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import SalesProductForm from '../page/Admin/AdminForm/SalesProductForm';

function SaleProductModal({item}) {
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
        Sale Product
      </Button>
      <Modal
        title="Sale Product"
        centered
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: '#1890ff', borderColor: '#1890ff' } }}
      >
        <SalesProductForm item={item} />
      </Modal>
    </>
  );
}

export default SaleProductModal;
