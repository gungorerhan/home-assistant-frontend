import { Col, Divider, Row, Modal } from "antd";
import React, { useState } from "react";
import DeviceCamCard from "./cards/DeviceCamCard";

function AddedDevices() {
    //database
    const [devices, setDevicelist] = useState([
        {
            id: 0,
            type: "null",
        },
        {
            id: 1,
            type: "Camera 1",
        },
        {
            id: 2,
            type: "Camera 2",
        },
        {
            id: 3,
            type: "Camera 3",
        },
        {
            id: 4,
            type: "Camera 4",
        },
        {
            id: 5,
            type: "Camera 5",
        },
        {
            id: 6,
            type: "Camera 6",
        },
    ]);
    //remove modal
    const [isRemoveModalVisible, setIsRemoceModalVisible] = useState(false);

    const showRemoveModal = () => {
        setIsRemoceModalVisible(true);
    };

    const removeCancel = () => {
        setIsRemoceModalVisible(false);
        setFuncControl("0");
    };
    const [funcControl, setFuncControl] = useState();

    function removeCard(cardid) {
        showRemoveModal();
        setFuncControl(cardid);
    }
    function removeOkay() {
        const newCards = devices.filter((c) => c.id !== funcControl);
        setDevicelist(newCards);
        setIsRemoceModalVisible(false);
        setFuncControl("0");
    }
    //edit modal
    function editCard(cardid)
    {

    }
    function editOkay()
    {

    }

    return (
        <div>
            {/* remove modal */}
            <Modal title="Delete Warning" visible={isRemoveModalVisible} onOk={removeOkay} onCancel={removeCancel}>              
                <p>"{devices[funcControl]?.type}" do you wanna delete this device?</p>
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
                                />
                            </Col>
                        );
                })}
            </Row>
        </div>
    );
}

export default AddedDevices;
