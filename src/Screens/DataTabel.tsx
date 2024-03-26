import { ConfigProvider, Table } from "antd";
import type { TableProps } from "antd";
import { EColors } from "../Enums/EColors";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
interface DataType {
  rank: string;
  name: string;
  price: number;
  change: number;
  marketcap: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DataTabel({ data, setActiveCoinForDashboard }: any) {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Rank",
      key: "rank",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCell: (_record, _rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.SECONDARYBACKGROUND,
            color: "white",
            fontFamily: "Inter",
            fontWeight: 200,
          },
        };
      },
      render: (record) => {
        return (
          <div
            className=" text-xl 2xl:text-3xl"
            onClick={() => setActiveCoinForDashboard(record)}
          >
            #{record.market_cap_rank}
          </div>
        );
      },
    },
    {
      title: "Name",
      key: "name",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCell: (_record, _rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.SECONDARYBACKGROUND,
            color: "white",
          },
        };
      },
      render: (record) => {
        return (
          <>
            <div
              className="text-xl hidden lg:flex"
              onClick={() => setActiveCoinForDashboard(record)}
              style={{
                whiteSpace: "nowrap",
                fontFamily: "Inter",
                fontWeight: 300,
              }}
            >
              <div className="flex w-2/12 gap-6 ">
                <img src={`${record.image}`} />
                <div className="self-center  2xl:text-2xl ">
                  {record.name.toUpperCase()}
                </div>
              </div>
            </div>
            <div
              className="text-xl lg:hidden"
              onClick={() => setActiveCoinForDashboard(record)}
              style={{}}
            >
              <div className="flex items-center  gap-3 ">
                <div className="w-1/2">
                  <img src={`${record.image}`} />
                </div>
                <div className="self-center md:text-sm ">
                  {record.name.toUpperCase()}
                </div>
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "Price",
      key: "price",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCell: (_record, _rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.SECONDARYBACKGROUND,
            color: "white",
            fontFamily: "Inter",
            fontWeight: 200,
          },
        };
      },
      render: (record) => {
        return (
          <div
            className="text-xl md:text-lg w-full 2xl:text-3xl"
            onClick={() => setActiveCoinForDashboard(record)}
          >
            ${record.current_price.toFixed(2)}
          </div>
        );
      },
    },
    {
      title: "24 Hour Change",
      key: "pricechange",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCell: (_record, _rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.SECONDARYBACKGROUND,
            color: "white",
          },
        };
      },
      render: (record) => {
        {
          return record.price_change_percentage_24h > 0 ? (
            <div className="flex gap-1 text-xl 2xl:text-3xl">
              <div style={{ fontFamily: "Inter", fontWeight: "200" }}>
                {record.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div style={{ color: EColors.PRIMARY }}>
                <RiseOutlined />
              </div>
            </div>
          ) : (
            <div className="flex gap-1 text-xl 2xl:text-3xl">
              <div style={{ fontFamily: "Inter", fontWeight: "200" }}>
                {record.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div style={{ color: "red" }}>
                <FallOutlined />
              </div>
            </div>
          );
        }
      },
    },
    {
      title: "Market Cap",
      key: "action",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCell: (_record, _rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.SECONDARYBACKGROUND,
            color: "white",
          },
        };
      },
      render: (record) => {
        return (
          <div
            style={{ fontFamily: "Inter", fontWeight: "200" }}
            className="text-xl w-full 2xl:text-3xl"
            onClick={() => setActiveCoinForDashboard(record)}
          >
            {record.market_cap.toString().length > 9
              ? `$${(Number(record.market_cap) / 1000000000).toFixed(1)}B`
              : `$${(Number(record.market_cap) / 1000000).toFixed(1)}M`}{" "}
          </div>
        );
      },
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: EColors.SECONDARYBACKGROUND,
            headerColor: "white",
            headerSplitColor: "white",
            borderColor: EColors.BORDERGRAY,
            stickyScrollBarBg: EColors.SECONDARYBACKGROUND,
          },
        },
      }}
    >
      <Table
        scroll={{ y: 700 }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </ConfigProvider>
  );
}
