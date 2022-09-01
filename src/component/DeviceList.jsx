import { Col, Divider, Row, Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import DeviceApi from "../api/DeviceApi";
import DeviceCard from "./DeviceCard";

const DeviceList = () => {
    //database

    const [devices, setDevicelist] = useState([]);
    useEffect(() => {
        DeviceApi.getDeviceList(setDevicelist);
    }, []);

    const [funcControl, setFuncControl] = useState();



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
    const refreshCallback = () => {
        DeviceApi.getDeviceList(setDevicelist);
    };
    return (
        <div>
            {/* <Modal
                title={"Device: " + devices[funcControl]?.name}
                visible={isEditModalVisible}
                onOk={editOkay}
                onCancel={editCancel}
            >
                <p> Change Name</p>
                <Input placeholder={devices[funcControl]?.name} />

            </Modal>

            <Modal
                title={"Device: " + devices[funcControl]?.name}
                visible={isControlModalVisible}
                onOk={controlOkay}
                onCancel={controlCancel}
            >
                <p> {devices[funcControl]?.name}</p>

            </Modal>  */}
            <Divider orientation="center">Devices</Divider>
            {/* test objects. */}
            <Divider type="vertical" style={{ height: "100%" }} />
            <Row gutter={[16, 24]}>
                {devices?.map((device) => {
                    //if (device.id !== 0)
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
