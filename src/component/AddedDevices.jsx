import { Col, Divider, Row, Modal, Input } from "antd";
import React, { useState } from "react";
import DeviceCamCard from "./cards/DeviceCamCard";

function AddedDevices() {
    //database
    const [devices, setDevicelist] = useState([
        {
            id: 0,
            name: "null",
        },
        {
            id: 1,
            name: "Camera 1",
        },
        {
            id: 2,
            name: "Camera 2",
        },
        {
            id: 3,
            name: "Camera 3",
        },
        {
            id: 4,
            name: "Camera 4",
        },
        {
            id: 5,
            name: "Camera 5",
        },
        {
            id: 6,
            name: "Camera 6",
        },
    ]);
    const [funcControl, setFuncControl] = useState();
    //remove modal
    const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);

    const showRemoveModal = () => {
        setIsRemoveModalVisible(true);
    };

    const removeCancel = () => {
        setIsRemoveModalVisible(false);
        setFuncControl("0");
    };

    function removeCard(cardid) {
        showRemoveModal();
        setFuncControl(cardid);
    }
    function removeOkay() {
        const newCards = devices.filter((c) => c.id !== funcControl);
        setDevicelist(newCards);
        setIsRemoveModalVisible(false);
        setFuncControl("0");
    }
    //edit modal
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const showEditModal = () => {
        setIsEditModalVisible(true);
    };
    const editCancel = () => {
        setIsEditModalVisible(false);
        setFuncControl("0");
    };
    function editCard(cardid) {
        showEditModal();
        setFuncControl(cardid);
    }
    function editOkay() {
        setIsEditModalVisible(false);
        setFuncControl("0");
        
    }
    //control modal
    const [isControlModalVisible, setIsControlModalVisible] = useState(false);
    const showControlModal = () => {
        setIsControlModalVisible(true);
    };
    const controlCancel = () => {
        setIsControlModalVisible(false);
        setFuncControl("0");
    };
    function controlCard(cardid) {
        showControlModal();
        setFuncControl(cardid);
    }
    function controlOkay() {
        setIsControlModalVisible(false);
        setFuncControl("0");
    }

    return (
        <div>
            {/* remove modal */}
            <Modal title="Delete Warning" visible={isRemoveModalVisible} onOk={removeOkay} onCancel={removeCancel}>
                <p>"{devices[funcControl]?.name}" do you wanna delete this device?</p>
            </Modal>
            {/* edit modal */}
            <Modal title={"Device: " +devices[funcControl]?.name } visible={isEditModalVisible} onOk={editOkay} onCancel={editCancel}>
                <p> Change Name</p>
                <Input placeholder={devices[funcControl]?.name} />
                {/* other edit settings for device types */}
            </Modal>
            {/* control modal */}
            <Modal title={"Device: " +devices[funcControl]?.name } visible={isControlModalVisible} onOk={controlOkay} onCancel={controlCancel}>
                <p> {devices[funcControl]?.name}</p>
                {/* other control settings for device types */}
            </Modal>
            <Divider orientation="center">Devices</Divider>
            {/* test objects. */}
            <Divider type="vertical" style={{ height: "100%" }} />
            <Row gutter={[16, 24]}>
                {devices.map((device) => {
                    if (device.id !== 0)
                        return (
                            <Col key={device.id} className="gutter-row" span={6} flex="1">
                                <DeviceCamCard
                                    key={device.id}
                                    device={device}
                                    deviceList={devices}
                                    removeCard={removeCard}
                                    editCard = {editCard}
                                    controlCard = {controlCard}
                                />
                            </Col>
                        );
                })}
            </Row>
        </div>
    );
}

export default AddedDevices;
