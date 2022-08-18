import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import DevicelistForAdd from "./DeviceListForAdd";
const AddDeviceModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <center>
                <Button
                    onClick={showModal}
                    icon={<PlusOutlined />}
                    size="large"
                    type="dashed"
                    style={{ width: "60%", height: "30%" }}
                >
                    <p height="100%" width="100%">
                        Add
                    </p>
                </Button>
            </center>
            <Modal title="Add Device" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Add">
            <p> Put a device name</p>
                <Input placeholder="Device Name" />
                
                <DevicelistForAdd></DevicelistForAdd>
            </Modal>
            
        </>
    );
};

export default AddDeviceModal;
