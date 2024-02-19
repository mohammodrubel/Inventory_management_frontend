import React, { useState } from 'react';
import { useGetAllSalesProductQuery } from '../../App/featchers/salesProduct/salesApi';
import { DatePicker, Table, Space, Alert } from 'antd';

const { RangePicker } = DatePicker;

function SalesProduct() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { data: salesData, isLoading } = useGetAllSalesProductQuery({ startDate, endDate });
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
            dataIndex: ['data','name'],
            key: 'data.name',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Purchase date',
            dataIndex: 'date',
            key: 'date',
        },
    ];

    return (
        <>
        <b className='text-center'>Date wise product sales Report</b> <br />
            <Space direction="vertical" size={12}>
                <RangePicker onChange={handleRangePickerChange} />
            </Space>
            {mainData && mainData.length === 0 ? (
                <Alert className="text-center mt-5" message="Select Start Date and End Date product by sales report" type="warning" />
            ) : (
                <Table pagination={false} loading={isLoading} dataSource={mainData} columns={columns} scroll={{ x: true }} />
            )}
        </>
    );
}

export default SalesProduct;
