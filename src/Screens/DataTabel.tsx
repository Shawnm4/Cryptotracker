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

export default function DataTabel({ data, setActiveCoinForDashboard }: any) {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Rank",
      key: "rank",
      onCell: (record, rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.BACKGROUNDGRAY,
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
      onCell: (record, rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.BACKGROUNDGRAY,
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
      onCell: (record, rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.BACKGROUNDGRAY,
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
      onCell: (record, rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.BACKGROUNDGRAY,
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
      onCell: (record, rowIndex) => {
        return {
          style: {
            backgroundColor: EColors.BACKGROUNDGRAY,
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
            .
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
            headerBg: EColors.BACKGROUNDGRAY,
            headerColor: "white",
            headerSplitColor: "white",
            rowExpandedBg: EColors.BACKGROUNDGRAY,
            headerSortActiveBg: EColors.BACKGROUNDGRAY,
            bodySortBg: EColors.BACKGROUNDGRAY,
            borderColor: EColors.BORDERGRAY,
            footerColor: EColors.BACKGROUNDGRAY,
            rowSelectedHoverBg: "red",
            stickyScrollBarBg: EColors.BACKGROUNDGRAY,
          },
        },
      }}
    >
      <Table
        style={{ backgroundColor: EColors.BACKGROUNDGRAY }}
        scroll={{ y: 700 }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </ConfigProvider>
  );
}
