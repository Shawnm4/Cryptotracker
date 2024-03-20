import { Divider } from "antd";
import { EColors } from "../Enums/EColors";

export default function TopNavBar() {
  return (
    <>
      <nav className="h-20 flex items-end justify-center">
        <div
          style={{ fontFamily: "Inter", color: EColors.PRIMARY }}
          className="text-7xl font-bold"
        >
          CryptoTracker
        </div>
      </nav>
      <Divider />
    </>
  );
}
