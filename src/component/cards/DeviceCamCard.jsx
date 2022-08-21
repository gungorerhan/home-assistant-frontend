import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { VideoCameraOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const DeviceCamCard = ({ device, removeCard, editCard, controlCard }) => (
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

export default DeviceCamCard;
