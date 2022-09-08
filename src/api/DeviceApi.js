import axios from "axios";
import { openSuccessNotification } from "../util/NotificationHandler";
const backendEndPoint = process.env.REACT_APP_BACKEND_URL + "/api/device";
class DeviceApi {
    getDeviceList(setState) {
        axios
            .get(backendEndPoint)
            .then((response) => {
                console.log(response);
                setState(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    deleteDevice(id,refreshCallback,message) {
        axios
            .delete(`${backendEndPoint}/${id}`)
            .then((response) => {
                console.log(response);
                openSuccessNotification(message)
                refreshCallback()
        
            })
            .catch((error) => {
                console.log(error);
            });
    }
    /*createDevice(data) {
        return dashApiClient.post(/api/devices, data);
    }

    updateDevice(data) {
        return dashApiClient.put(/api/devices, data);
    }

    */
}

export default new DeviceApi();
