import { notification } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";

const showErrorNotification = () =>
  notification.error({
    message: "Ran Out of API Calls!",
    description: (
      <div className="text-md" style={{ fontFamily: "Inter" }}>
        The coingecko API request limit has been reached. Please wait a minute
        before trying again. For more information, visit the
        <a
          href="https://www.coingecko.com/en/api"
          target="_blank"
          rel="noreferrer"
        >
          Coingecko API documentation
        </a>
        .
      </div>
    ),
    icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
    duration: 5,
  });

export default showErrorNotification;
