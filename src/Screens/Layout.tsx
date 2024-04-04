import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { EColors } from "../Enums/EColors";

export default function Layout() {
  return (
    <>
      <main style={{}} className="flex">
        <Content
          style={{
            backgroundColor: EColors.PRIMARYBACKGROUND,
            height: "100vh",
            overflow: "auto",
          }}
          className="w-full"
        >
          <Outlet />
        </Content>
      </main>
    </>
  );
}
