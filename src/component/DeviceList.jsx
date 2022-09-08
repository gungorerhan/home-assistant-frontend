import { Col, Divider, Row, Modal, Input, Form, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import DeviceApi from "../api/DeviceApi";
import DeviceCard from "./DeviceCard";

const DeviceList = () => {
    const [devices, setDevicelist] = useState([]);
    useEffect(() => {
        DeviceApi.getDeviceList(setDevicelist);
    }, []);
    const [selectedCardIndex, setselectedCardIndex] = useState();
    const [editForm] = Form.useForm();
    const [controlForm] = Form.useForm();
    //edit modal
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const showEditModal = () => {
        setIsEditModalVisible(true);
    };

    const editFormOnFinish = (values) => {
        setIsEditModalVisible(false);
        console.log(values);
    };
    const editCancel = () => {
        setIsEditModalVisible(false);
        editForm.resetFields();
    };
    function editCard(cardid) {
        setselectedCardIndex(devices.map((i) => i).indexOf(cardid));
        showEditModal();
    }

    //control modal
    const [isControlModalVisible, setIsControlModalVisible] = useState(false);
    const showControlModal = () => {
        setIsControlModalVisible(true);
    };
    const controlFormOnFinish = (values) => {
        setIsControlModalVisible(false);
        console.log(values);
    };
    const controlCancel = () => {
        setIsControlModalVisible(false);
        controlForm.resetFields();
    };
    function controlCard(cardid) {
        setselectedCardIndex(devices.map((i) => i).indexOf(cardid));
        showControlModal();
    }
    const refreshCallback = () => {
        DeviceApi.getDeviceList(setDevicelist);
    };
    return (
        <div>
            <Modal
                title={"Device: " + devices[selectedCardIndex]?.name}
                visible={isEditModalVisible}
                onOk={() => {
                    editForm
                        .validateFields()
                        .then((values) => {
                            editForm.resetFields();
                            editFormOnFinish(values);
                        })
                        .catch((info) => {
                            console.log("Validate Failed:", info);
                        });
                }}
                onCancel={editCancel}
            >
                <Form form={editForm} name="control-hooks" onFinish={editFormOnFinish}>
                    <p>Device name: </p>
                    <Form.Item
                        name="Name"
                        type="name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder={devices[selectedCardIndex]?.name} />
                    </Form.Item>
                    <Form.Item
                        name="Device Type"
                        type="deviceType"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select placeholder="Select your device type">
                            <Option value="Camera">Camera</Option>
                            <Option value="Light">Light</Option>
                            <Option value="Other">other1</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title={"Device: " + devices[selectedCardIndex]?.name}
                visible={isControlModalVisible}
                onOk={() => {
                    controlForm
                        .validateFields()
                        .then((values) => {
                            controlForm.resetFields();
                            controlFormOnFinish(values);
                        })
                        .catch((info) => {
                            console.log("Validate Failed:", info);
                        });
                }}
                onCancel={controlCancel}
            >
                <Form form={controlForm} name="control-hooks" onFinish={editFormOnFinish}>
                    {devices[selectedCardIndex]?.type === "Camera" && (
                        <>
                            <Form.Item noStyle>
                                <p>{"Camera Settings: " + devices[selectedCardIndex]?.name}</p>
                            </Form.Item>
                            <Form.Item
                                name="cameraAngle"
                                type="CameraAngle"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder={devices[selectedCardIndex]?.cameraAngle} />
                            </Form.Item>

                            <Form.Item
                                name="closeTime"
                                type="CloseTime"
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}
                            >
                                <Input placeholder={devices[selectedCardIndex]?.closeTime} />
                            </Form.Item>
                        </>
                    )}
                    {devices[selectedCardIndex]?.type === "Light" && (
                        <>
                            <Form.Item noStyle>
                                <p>{"Light Settings: " + devices[selectedCardIndex]?.name}</p>
                            </Form.Item>
                            <Form.Item
                                name="lightColor"
                                type="LightColor"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder={devices[selectedCardIndex]?.lightColor} />
                            </Form.Item>
                        </>
                    )}
                </Form>
            </Modal>
            <Divider orientation="center">Devices</Divider>
            <Divider type="vertical" style={{ height: "100%" }} />
            <Row gutter={[16, 24]}>
                {devices?.map((device) => {
                    return (
                        <Col key={device?.id} className="gutter-row" span={6} flex="1">
                            <DeviceCard
                                key={device.id}
                                device={device}
                                deviceList={devices}
                                refreshCallback={refreshCallback}
                                editCard={editCard}
                                controlCard={controlCard}
                            />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default DeviceList;
