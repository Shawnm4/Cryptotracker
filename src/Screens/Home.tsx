import { Dropdown, Space, Divider } from "antd";
import { DownOutlined, FilterFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import DataTabel from "./DataTabel";
import useGetCoinData from "../Hooks/useGetCoinData";

export default function Home() {
  const { data: coinData } = useGetCoinData();

  return (
    <>
      <header className="flex justify-center h-48 items-center font-medium">
        <h1 style={{ fontFamily: "Inter" }} className="text-4xl text-center">
          <div>Explore the Top 50 Cryptocurrencies</div>
          <div>Rankings & Real-Time Market Data</div>
        </h1>
      </header>
      <Divider />
      <section className="flex justify-center">
        <div className="w-5/6 rounded-md ">
          <div className=" text-2xl ">
            {" "}
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div style={{ color: "#495057" }} className="">
                    <FilterFilled />
                  </div>
                  Sort By
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className=" rounded-md shadow-xl mt-6 bg-gray-700">
            <DataTabel data={coinData?.data} />
          </div>
        </div>
      </section>
    </>
  );
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Last Hour",
  },
  {
    key: "2",
    label: "Last 24 Hours",
  },
  {
    key: "3",
    label: "Last 7 Days",
  },
  {
    key: "4",

    label: "Last 30 Days",
  },
  {
    key: "5",

    label: "Last Year",
  },
];
