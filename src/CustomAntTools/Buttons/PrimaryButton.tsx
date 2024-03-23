import { Button as AntButton, ButtonProps } from "antd";
import { EColors } from "../../Enums/EColors";

interface AntButtonProps extends ButtonProps {}

const Button = ({ ...props }: AntButtonProps) => {
  return (
    <AntButton
      className=""
      style={{ backgroundColor: EColors.PRIMARY, color: "white" }}
      {...props}
    />
  );
};
export default Button;
