import { LoadingOutlined } from "@ant-design/icons";
import { Spin as LoadingSpinner } from "antd";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Spinner = ({ ...props }: any) => {
  return (
    <LoadingSpinner
      className=""
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      {...props}
    />
  );
};
export default Spinner;
