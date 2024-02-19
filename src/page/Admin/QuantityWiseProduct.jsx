import React, { useState } from 'react';
import { useGetAllSalesQuantityProductQuery } from '../../App/featchers/salesProduct/salesApi';
import { DatePicker, Table, Space, Alert } from 'antd';

const { RangePicker } = DatePicker;

function QuantityWiseProduct() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { data: salesData, isLoading } = useGetAllSalesQuantityProductQuery({ startDate, endDate });
    const handleRangePickerChange = (dates) => {
        if (dates && dates.length === 2) {
            setStartDate(dates[0].toDate().toLocaleDateString());
            setEndDate(dates[1].toDate().toLocaleDateString());
        }
    };

    const mainData = salesData?.data?.data;
   
    console.log(mainData?.map((item => item)))
    const columns = [
        {
            title: 'ProductName',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Total Quantity',
            dataIndex: 'totalQuantity',
            key: 'totalQuantity',
        },
        {
            title: 'Total Price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
    ];

    return (
        <>
        <b>Date wise Quantity sales Report</b> <br />
            <Space direction="vertical" size={12}>
                <RangePicker onChange={handleRangePickerChange} />
            </Space>
            {mainData && mainData.length === 0 ? (
                <Alert className="text-center mt-5" message="Select Start Date and End Date product Quantity and Sales" type="warning" />
            ) : (
                <Table pagination={false} loading={isLoading} dataSource={mainData} columns={columns} scroll={{ x: true }} />
            )}
        </>
    );
}

export default QuantityWiseProduct;


