import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import TopNavBar from "./TopNavBar";

export default function Layout() {
  return (
    <>
      <TopNavBar />
      <main className="flex">
        <Content className="">
          <Outlet />
        </Content>
      </main>
    </>
  );
}
