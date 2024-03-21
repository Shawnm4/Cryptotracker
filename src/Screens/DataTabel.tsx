import { Table } from "antd";
import type { TableProps } from "antd";

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
      render: (record) => {
        return (
          <div
            className="text-xl"
            onClick={() => setActiveCoinForDashboard(record)}
            style={{ whiteSpace: "nowrap" }}
          >
            <div className="flex w-2/12 gap-3">
              <img src={`${record.image}`} />
              <div className="self-center">{record.name}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Price",
      key: "price",
      render: (record) => {
        return (
          <div
            className="text-xl"
            onClick={() => setActiveCoinForDashboard(record)}
          >
            ${record.current_price}
          </div>
        );
      },
    },
    {
      title: "24 Hour Change",
      key: "pricechange",
      render: (record) => {
        return (
          <div
            className="text-xl"
            onClick={() => setActiveCoinForDashboard(record)}
          >
            {record.price_change_24h}
          </div>
        );
      },
    },
    {
      title: "Market Cap",
      key: "action",
      render: (record) => {
        return (
          <div
            className="text-xl"
            onClick={() => setActiveCoinForDashboard(record)}
          >
            ${record.market_cap}.
          </div>
        );
      },
    },
  ];

  return (
    <Table
      scroll={{ y: 500 }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
}
