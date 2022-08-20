import { Card } from "antd";
import React, { useState } from "react";

const tabList = [
    {
        key: "tab1",
        tab: "Camera",
    },
    {
        key: "tab2",
        tab: "Light",
    },
    {
        key: "tab3",
        tab: "Cleaner Robot",
    },
    {
        key: "tab4",
        tab: "Kitchen Robot",
    },
];
const contentList = {
    tab1: <p>Camera </p>,
    tab2: <p>Light</p>,
    tab3: <p>Cleaner</p>,
    tab4: <p>Kitchen</p>,
};

const DevicelistForAdd = () => {
    const [activeTabKey1, setActiveTabKey1] = useState("tab1");

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
        
    };

    return (
        <>
            <Card
                style={{
                    width: "100%",
                }}
                title="Select Device"
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={(key) => {
                    onTab1Change(key);
                    
                }}
            >
                {contentList[activeTabKey1]}
                
            </Card>
        </>
    );
};

export default DevicelistForAdd;
