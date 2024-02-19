import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CloneProductForm from '../page/Admin/AdminForm/CloneProductForm';

function CloneProductModel({item}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {setIsModalOpen(true);};
  const handleOk = () => {setIsModalOpen(false);};
  const handleCancel = () => {setIsModalOpen(false);};


  return (
    <>
      <Button style={{ background: '#001529', color: 'white', fontWeight: '700' }} onClick={showModal}>
        Clone Product
      </Button>
      <Modal
        title="Clone Product"
        centered
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: '#1890ff', borderColor: '#1890ff' } }}
      >
        <CloneProductForm item={item} />
      </Modal>
    </>
  );
}

export default CloneProductModel;
