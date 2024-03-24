/* eslint-disable @typescript-eslint/no-explicit-any */
import PrimaryButton from "../CustomAntTools/Buttons/PrimaryButton";
import {
  InfoCircleOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import useGetCoinDataById from "../Hooks/useGetCoinDataById";
import styles from "./CoinDashboard.module.css";
import Tooltip from "../CustomAntTools/Buttons/ToolTips/ToolTip";
import { XAxis, YAxis, AreaChart, Area } from "recharts";
import useGetCoinGraphData from "../Hooks/useGetCoinGraphData";
import { EColors } from "../Enums/EColors";
import { useState } from "react";
import _ from "lodash";

import { Tooltip as RechartsTooltip } from "recharts";

export default function CoinDashboard({
  activeCoin,
  clearActiveCoin,
}: {
  activeCoin: any;
  clearActiveCoin: () => void;
}) {
  const { data: coinData } = useGetCoinDataById(activeCoin.id);
  const [graphDate, setGraphDate] = useState(7);

  const { data: lineData } = useGetCoinGraphData(graphDate, activeCoin.id);
  interface LineDataObject {
    name: number;
  }

  const handleCreateLineData = (value: number) => {
    return { name: value };
  };

  const lineDataObjects: LineDataObject[] = lineData?.data?.prices?.map(
    (item: any) => {
      return handleCreateLineData(item[1]);
    }
  );

  const minItem = _.minBy(lineDataObjects, "name");

  function subtractMinFromData(array: { name: number }[], min: number) {
    const newArr = array?.map((item: { name: number }) => {
      return { name: item.name - min };
    });

    return newArr;
  }
  const lineObjectsSubtracted = subtractMinFromData(
    lineDataObjects,
    minItem?.name as number
  );

  function changeGraphDate(date: number) {
    setGraphDate(date);
  }
  return (
    <>
      <section
        style={{ backgroundColor: EColors.PRIMARYBACKGROUND }}
        className="  flex justify-center  h-screen "
      >
        <div className="w-11/12 mt-14">
          <div className="flex gap-96 ">
            <div className="">
              <PrimaryButton
                onClick={() => clearActiveCoin()}
                className="w-44 h-12 text-xl shadow-xl "
              >
                &larr; Go Back
              </PrimaryButton>
            </div>
            <div className="flex gap-3  drop-shadow-md">
              <img className="w-2/12" src={`${activeCoin.image}`} />
              <div
                style={{
                  color: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
                className=" self-center text-7xl"
              >
                {activeCoin?.name?.toUpperCase()}
              </div>
            </div>
          </div>

          <div className="flex justify-between  mt-14">
            <div className="">
              <div
                style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
                className=" border  rounded-lg border-gray-200 shadow-2xl"
              >
                <div className="grid grid-cols-3 grid-rows-3 p-10 gap-10 text-white">
                  <div>
                    <div className="font-bold text-white flex gap-1">
                      <div>Market Cap</div>
                      <span>
                        <Tooltip title="Crypto market cap is the total value of all cryptocurrencies, calculated by multiplying each coin's current price by its circulating supply. It measures the market's size and dominance of different coins.">
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">
                      $
                      {activeCoin?.market_cap?.toString().length > 9
                        ? `${(
                            Number(activeCoin?.market_cap) / 1000000000
                          )?.toFixed(1)}B`
                        : `${(
                            Number(activeCoin?.market_cap) / 1000000
                          )?.toFixed(1)}M`}{" "}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white flex gap-1 ">
                      <div>All Time High</div>
                      <span>
                        <Tooltip title="The all-time high (ATH) of a cryptocurrency refers to the highest price it has ever reached in its history. This metric is often used by investors to gauge a coin's performance and potential.">
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">${activeCoin?.ath}</div>
                  </div>
                  <div>
                    <div className="font-bold text-white flex gap-1 ">
                      <div>All Time Low</div>
                      <span>
                        <Tooltip
                          title=" 
The all-time low (ATL) of a cryptocurrency is the lowest price it has ever reached since its inception. It provides insight into the coin's historical lows and market resilience."
                        >
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">
                      ${activeCoin?.atl?.toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white flex gap-1 ">
                      <div>Rank</div>
                      <span>
                        <Tooltip
                          title=" 
                        The rank of a cryptocurrency is its position relative to others based on market capitalization. It indicates its dominance and size within the market"
                        >
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">
                      #{activeCoin.market_cap_rank}
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="font-bold text-white flex gap-1 ">
                        <div>Circulating Supply</div>
                        <span>
                          <Tooltip title="Circulating supply refers to the number of cryptocurrency coins or tokens that are publicly available and circulating in the market, excluding those locked, reserved, or not for sale.">
                            <InfoCircleOutlined />
                          </Tooltip>
                        </span>
                      </div>
                      <div className="text-2xl">
                        {activeCoin?.circulating_supply?.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white flex gap-1 ">
                      <div>Price Change(24Hr)</div>
                      <span>
                        <Tooltip
                          title="
                        The 24-hour price change measures the percentage increase or decrease in the price of a cryptocurrency over the last 24 hours, indicating its short-term market movement."
                        >
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">
                      {coinData?.data?.market_data?.price_change_percentage_24h?.toFixed(
                        2
                      ) > 0 ? (
                        <span className="text-green-500">
                          {coinData?.data?.market_data?.price_change_percentage_24h?.toFixed(
                            2
                          )}
                          %
                          <RiseOutlined />
                        </span>
                      ) : (
                        <span className="text-red-500">
                          {coinData?.data?.market_data?.price_change_percentage_24h?.toFixed(
                            2
                          )}
                          %
                          <FallOutlined />
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white flex gap-1 ">
                      <div>Price Change(1Week)</div>
                      <span>
                        <Tooltip
                          title="
                        The 1-week price change percent reflects the percentage change in the price of a cryptocurrency over the past week, providing insight into its short-term market trends and volatility."
                        >
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">
                      {coinData?.data?.market_data?.price_change_percentage_7d?.toFixed(
                        2
                      ) > 0 ? (
                        <span className="text-green-500">
                          {coinData?.data?.market_data?.price_change_percentage_7d?.toFixed(
                            2
                          )}
                          %
                          <RiseOutlined />
                        </span>
                      ) : (
                        <span className="text-red-500">
                          {coinData?.data?.market_data?.price_change_percentage_7d?.toFixed(
                            2
                          )}
                          %
                          <FallOutlined />
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white flex gap-1 ">
                      <div>Price Change(1Month)</div>
                      <span>
                        <Tooltip
                          title="
                        The 1-month price change percent indicates the percentage change in a cryptocurrency's price over the past month, offering insights into its mid-term market performance and trends."
                        >
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">
                      {coinData?.data?.market_data?.price_change_percentage_30d?.toFixed(
                        2
                      ) > 0 ? (
                        <span className="text-green-500">
                          {coinData?.data?.market_data?.price_change_percentage_30d?.toFixed(
                            2
                          )}
                          %
                          <RiseOutlined />
                        </span>
                      ) : (
                        <span className="text-red-500">
                          {coinData?.data?.market_data?.price_change_percentage_30d?.toFixed(
                            2
                          )}
                          %
                          <FallOutlined />
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white flex gap-1 ">
                      <div>Price Change(1Year)</div>
                      <span>
                        <Tooltip title="The 1-year price change percent measures the percentage change in the price of a cryptocurrency over the past year, highlighting its long-term market trends and performance.">
                          <InfoCircleOutlined />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="text-2xl">
                      {coinData?.data?.market_data?.price_change_percentage_1y?.toFixed(
                        2
                      ) > 0 ? (
                        <span className="text-green-500">
                          {coinData?.data?.market_data?.price_change_percentage_1y?.toFixed(
                            2
                          )}
                          %
                          <RiseOutlined />
                        </span>
                      ) : (
                        <span className="text-red-500">
                          {coinData?.data?.market_data?.price_change_percentage_1y?.toFixed(
                            2
                          )}
                          %
                          <FallOutlined />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
              className="border    rounded-lg border-gray-200 shadow-2xl p-4 pr-0"
            >
              <div className="  ">
                <ul className="flex gap-8 text-lg font-bold text-white">
                  <li onClick={() => changeGraphDate(1)}>1Day</li>
                  <li onClick={() => changeGraphDate(7)}>1Week</li>
                  <li onClick={() => changeGraphDate(30)}>1Month</li>
                  <li onClick={() => changeGraphDate(365)}>1Year</li>
                </ul>
                <div className="">
                  <div className="w-full">
                    <AreaChart
                      width={900}
                      height={300}
                      data={lineObjectsSubtracted}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis hide={true} dataKey="name" />
                      <YAxis hide={true} />
                      <RechartsTooltip />

                      <Area
                        type="monotone"
                        dataKey="name"
                        stroke={EColors.PRIMARY}
                        fill={EColors.PRIMARY}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
            className=" border text-white  rounded-lg border-gray-200 shadow-2xl mt-10"
          >
            <div
              className={`${styles.description} p-10 text-lg`}
              dangerouslySetInnerHTML={{
                __html: coinData?.data?.description?.en,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
