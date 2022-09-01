import { notification } from "antd";

const openSuccessNotification = (message, description, seconds = 2) => {
    notification["success"]({
        message: message,
        description: description,
        duration: seconds,
    });
};

const openWarningNotification = (message, description, seconds = 2) => {
    notification["warning"]({
        message: message,
        description: description,
        duration: seconds,
    });
};

const openErrorNotification = (message, description, seconds = 2) => {
    notification["error"]({
        message: message,
        description: description,
        duration: seconds,
    });
};

export { openSuccessNotification, openWarningNotification, openErrorNotification };
