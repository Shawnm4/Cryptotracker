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
          },
        };
      },
      render: (record) => {
        return (
          <div
            className=" text-xl"
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
          <div
            className="text-xl"
            onClick={() => setActiveCoinForDashboard(record)}
            style={{ whiteSpace: "nowrap" }}
          >
            <div className="flex w-2/12 gap-3">
              <img src={`${record.image}`} />
              <div className="self-center">{record.name.toUpperCase()}</div>
            </div>
          </div>
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
          },
        };
      },
      render: (record) => {
        return (
          <div
            className="text-xl"
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
            <div className="flex gap-1 text-xl">
              <div>{record.price_change_percentage_24h.toFixed(2)}%</div>
              <div style={{ color: EColors.PRIMARY }}>
                <RiseOutlined />
              </div>
            </div>
          ) : (
            <div className="flex gap-1 text-xl">
              <div>{record.price_change_percentage_24h.toFixed(2)}%</div>
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
            className="text-xl w-full"
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
