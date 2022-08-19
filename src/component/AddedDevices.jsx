import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import DeviceCamCard from "./cards/DeviceCamCard";

function AddedDevices() {
    const [devices, setDevicelist] =  useState([
        {
            id: 0,
            type: "null",
        },
        {
            id: 1,
            type: "Camera",
        },
        {
            id: 2,
            type: "Camera",
        },
        {
            id: 3,
            type: "Camera",
        },
        {
            id: 4,
            type: "Camera",
        },
        {
            id: 5,
            type: "Camera",
        },
        {
            id: 6,
            type: "Camera",
        },
    ])
    function removeCard (cardid) {
        const newCards= devices.filter(c => c.id !== cardid)
        setDevicelist(newCards)
    }
    
        
    
    return (
        <div>
            {" "}
            <Divider orientation="center">Devices</Divider>
            {/* test objects. */}
            <Divider type="vertical" style={{ height: "100%" }} />
            <Row gutter={[16, 24]}>
                {devices.map((device) => {
                    if (device.id !== 0)
                        return (
                            <Col key={device.id} className="gutter-row" span={6} flex="1">                              
                                <DeviceCamCard key={device.id} device={device}  deviceList ={devices}
                                removeCard = {removeCard}
                                 />
                            </Col>
                        );
                })}
            </Row>
        </div>
    );
}

export default AddedDevices;
