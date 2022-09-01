import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { VideoCameraOutlined } from "@ant-design/icons";
import { Avatar, Card, Modal } from "antd";
import DeviceApi from "../api/DeviceApi";

const { Meta } = Card;

const DeviceCard = ({ device, editCard, controlCard, refreshCallback }) => {
    const removeCard = () => {
        Modal.confirm({
            maskClosable: true,
            className: "confirm-modal",
            icon: <DeleteOutlined />,
            title: "Delete Warning",
            content: device.name + ": do you wanna delete this device?",
            okText: "Delete",
            cancelText: "Cancel",
            onOk: onDelete,
        });
    };
    const onDelete = () => {
        DeviceApi.deleteDevice(device.id, refreshCallback, "Device deleted");
        
    };
    return (
        <Card
            //pop up card modal
            onClick={() => controlCard(device.id)}
            hoverable
            itemID={device.id}
            style={{ width: "100%", height: "100%", boxSizing: "border-box" }}
            headstyle={{ backgroundColor: "#E6ECF0" }}
            bodystyle={{ padding: "5px" }}
            type="inner"
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            //pop up delete and edit modals
            actions={[
                <EditOutlined
                    key="edit"
                    onClick={(event) => {
                        event.stopPropagation();
                        editCard(device.id);
                    }}
                />,
                <DeleteOutlined
                    key="delete"
                    onClick={(event) => {
                        event.stopPropagation();
                        removeCard(device.id);
                    }}
                />,
            ]}
        >
            <div style={{ height: "100%", width: "100%" }}>
                <Meta
                    avatar={<Avatar icon={<VideoCameraOutlined />} />}
                    title={device.name}
                    headstyle={{ backgroundColor: "#E6ECF0" }}
                    bodystyle={{ padding: "5px" }}
                />
            </div>
        </Card>
    );
};

export default DeviceCard;
