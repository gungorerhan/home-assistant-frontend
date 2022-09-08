import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const AddDeviceModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        setIsModalVisible(false);
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
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
            <Modal
                title="Add Device"
                visible={isModalVisible}
                onCancel={handleCancel}
                okText="Add"
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            form.resetFields();
                            onFinish(values);
                        })
                        .catch((info) => {
                            console.log("Validate Failed:", info);
                        });
                }}
            >
                <Form form={form} name="control-hooks" onFinish={onFinish}>
                    <p>Device name: </p>
                    <Form.Item
                        name="name"
                        type="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Device Name" />
                    </Form.Item>
                    <p>Device type: </p>
                    <Form.Item
                        name="type"
                        type="Type"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select your device type"
                            onChange={(value) =>
                                form.setFieldsValue({
                                    device: value,
                                })
                            }
                            allowClear
                        >
                            <Option value="Camera">Camera</Option>
                            <Option value="Light">Light</Option>
                            <Option value="Other">other1</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue("type") === "Other" ? (
                                <Form.Item
                                    name="Customize"
                                    type="customize"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Something" />
                                </Form.Item>
                            ) : null
                        }
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue("type") === "Camera" ? (
                                <>
                                    <Form.Item noStyle>
                                        <p>Camera Settings</p>
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
                                        <Input placeholder="Angle. Example: 90" />
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
                                        <Input placeholder="Time. Example: 13:00" />
                                    </Form.Item>
                                </>
                            ) : null
                        }
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue("type") === "Light" ? (
                                <>
                                    <Form.Item noStyle>
                                        <p>Light Settings</p>
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
                                        <Input placeholder="Color Hex Code. Example: '#FF0000'" />
                                    </Form.Item>
                                </>
                            ) : null
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddDeviceModal;
