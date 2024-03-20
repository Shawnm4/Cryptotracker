import { Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  rank: string;
  name: string;
  price: number;
  change: number;
  marketcap: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Rank",
    dataIndex: "market_cap_rank",
    key: "name",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "current_price",
    key: "price",
  },
  {
    title: "24 Hour Change",
    key: "pricechange",
    dataIndex: "price_change_24h",
  },
  {
    title: "Market Cap",
    key: "action",
    dataIndex: "market_cap",
  },
];

export default function DataTabel({ data }: { data: DataType[] }) {
  console.log(data);
  return <Table columns={columns} dataSource={data} pagination={false} />;
}
