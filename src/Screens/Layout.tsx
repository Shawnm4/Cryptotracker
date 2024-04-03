import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main className="flex">
        <Content className="w-full">
          <Outlet />
        </Content>
      </main>
    </>
  );
}
