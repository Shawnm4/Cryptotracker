import { Tooltip as AntTooltip, TooltipProps } from "antd";
import { EColors } from "../../../Enums/EColors";

const Tooltip = ({ ...props }: TooltipProps) => {
  return (
    <AntTooltip
      className=""
      overlayInnerStyle={{
        color: "black",
        backgroundColor: "white",
        border: `1px solid ${EColors.PRIMARY}`,
      }}
      {...props}
    />
  );
};
export default Tooltip;
