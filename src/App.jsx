import "./App.css";
import React, { useState } from "react";
import { Col, Divider, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import AddDeviceModal from "./component/AddDeviceModal";
import AddedDevices from "./component/AddedDevices";

const App = () => {
    
    // need solutions for adding and romoving
    return (
        <div>
            <Layout>
            <Header> Header</Header>
            <Content>
                <div>
                    <Row >
                        <Col span={6 } flex="1">
                            <Divider orientation="center">Wellcome</Divider>
                            <Divider orientation="center">Add Device</Divider>
                            <AddDeviceModal></AddDeviceModal>
                        </Col>

                        <Col span={18}>
                            <AddedDevices></AddedDevices>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer></Footer>
        </Layout>
        </div>
    );
};

export default App;
