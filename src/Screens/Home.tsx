/* eslint-disable @typescript-eslint/no-explicit-any */
import DataTabel from "./DataTabel";
import useGetCoinData from "../Hooks/useGetAllCoinData";
import { useState } from "react";
import CoinDashboard from "./CoinDashboard";
import { EColors } from "../Enums/EColors";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import MobileCoinDashboard from "./MobileCoinDashboard";
import TabletCoinDashboard from "./TabletCoinDashboard";
import lodash from "lodash";

import Spinner from "../CustomAntTools/Buttons/Spinner";
import { Empty } from "antd";
import TopNavBar from "./TopNavBar";

export default function Home() {
  interface CoinObject {
    id: string;
  }

  const [activeCoin, setActiveCoin] = useState<any>("");
  const [mobileActiveCoin, setMobileActiveCoin] = useState<any>("");
  const { data: coinData, isLoading: tableIsLoading, error } = useGetCoinData();

  function setActiveCoinForDashboard(coinObj: CoinObject) {
    setActiveCoin(coinObj);
  }
  function setMobileActiveCoinForDashboard(coinObj: CoinObject) {
    setMobileActiveCoin(coinObj);
  }
  function clearActiveCoin() {
    setActiveCoin("");
  }

  function clearMobileActiveCoin() {
    setMobileActiveCoin("");
  }

  return (
    <div>
      <div className="hidden w-full  2xl:inline-block">
        {!activeCoin ? (
          <>
            <TopNavBar />
            <header
              style={{
                backgroundColor: EColors.PRIMARYBACKGROUND,
              }}
              className="flex justify-center  w-full items-center font-medium  "
            >
              <h1
                style={{ color: "white", fontFamily: "Inter", fontWeight: 200 }}
                className="text-4xl text-center my-10 drop-shadow-2xl"
              >
                <div>
                  Explore the Top 25 Cryptocurrencies Rankings & Real-Time
                  Market Data
                </div>
              </h1>
            </header>
            <section
              style={{
                backgroundColor: EColors.PRIMARYBACKGROUND,
                color: "white",
              }}
              className="flex justify-center h-screen "
            >
              <div className="w-5/6 rounded-md ">
                <div className=" cursor-pointer rounded-md shadow-2xl  ">
                  <Spinner spinning={tableIsLoading}>
                    <DataTabel
                      setActiveCoinForDashboard={setActiveCoinForDashboard}
                      data={coinData?.data}
                    />
                  </Spinner>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div
            style={{
              backgroundColor: EColors.SECONDARYBACKGROUND,
            }}
            className="h-screen "
          >
            <CoinDashboard
              activeCoin={activeCoin}
              clearActiveCoin={clearActiveCoin}
            />
          </div>
        )}
      </div>
      {/* Tablet */}
      <div className=" hidden md:inline-block w-full 2xl:hidden ">
        {!mobileActiveCoin ? (
          <>
            <div>
              <header
                style={{
                  backgroundColor: EColors.SECONDARYBACKGROUND,
                  borderColor: EColors.BORDERGRAY,
                }}
                className="flex w-full justify-center  items-center font-medium border-b  "
              >
                <h1
                  style={{
                    color: "white",
                    fontFamily: "Inter",
                    fontWeight: 200,
                  }}
                  className="text-3xl text-center"
                >
                  <div>
                    Explore the Top 25 Cryptocurrencies Rankings & Real-Time
                    Market Data
                  </div>
                </h1>
              </header>
              {!error ? (
                <div style={{ backgroundColor: EColors.PRIMARYBACKGROUND }}>
                  {coinData?.data?.map((coin: any) => (
                    <CoinListItem
                      key={lodash.uniqueId()}
                      coinData={coin}
                      setMobileActiveCoinForDashboard={
                        setMobileActiveCoinForDashboard
                      }
                    />
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: EColors.PRIMARYBACKGROUND,
                    height: "100vh",
                  }}
                  className="text-white flex justify-center "
                >
                  <div>
                    <div className="mt-14 ">
                      <Empty description="" />
                      <div className="flex justify-center">
                        <div
                          className="text-md w-1/2 flex justify-center text-center "
                          style={{ fontFamily: "Inter", color: "white" }}
                        >
                          <div>
                            The coingecko API request limit has been reached.
                            Please wait a minute before trying again. For more
                            information, visit the{" "}
                            <a
                              href="https://www.coingecko.com/en/api"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Coingecko API documentation.
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <TabletCoinDashboard
              activeCoin={mobileActiveCoin}
              clearMobileActiveCoin={clearMobileActiveCoin}
            />
          </>
        )}
      </div>

      {/* CellPhone */}
      {!mobileActiveCoin ? (
        <div className="md:hidden">
          {!error ? (
            <Spinner className="mt-20" spinning={tableIsLoading} size="large">
              <div style={{ backgroundColor: EColors.PRIMARYBACKGROUND }}>
                {coinData?.data?.map((coin: any) => (
                  <CoinListItem
                    key={lodash.uniqueId()}
                    coinData={coin}
                    setMobileActiveCoinForDashboard={
                      setMobileActiveCoinForDashboard
                    }
                  />
                ))}
              </div>
            </Spinner>
          ) : (
            <div
              style={{
                backgroundColor: EColors.PRIMARYBACKGROUND,
                height: "100vh",
              }}
              className="text-white flex justify-center "
            >
              <div>
                <div className="mt-14 ">
                  <Empty description="" />
                  <div className="flex justify-center">
                    <div
                      className="text-md w-1/2 flex justify-center text-center "
                      style={{ fontFamily: "Inter", color: "white" }}
                    >
                      <div>
                        The coingecko API request limit has been reached. Please
                        wait a minute before trying again. For more information,
                        visit the{" "}
                        <a
                          href="https://www.coingecko.com/en/api"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Coingecko API documentation.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <MobileCoinDashboard
          activeCoin={mobileActiveCoin}
          clearMobileActiveCoin={clearMobileActiveCoin}
        />
      )}
    </div>
  );
}

function CoinListItem({ coinData, setMobileActiveCoinForDashboard }: any) {
  return (
    <>
      <div
        onClick={() => setMobileActiveCoinForDashboard(coinData)}
        className="border-b border-white "
        style={{ color: "white" }}
      >
        <div className="flex mx-4 gap-6 p-3 md:flex justify-between">
          <div className=" md:text-2xl font-bold text-lg">
            #{coinData.market_cap_rank}
          </div>
          <div className="flex gap-2 ">
            <div className="w-8 md:w-10 ">
              <img src={coinData.image} />
            </div>
            <div>
              <div className="md:hidden  text-2xl ">
                {coinData.symbol.toUpperCase()}
              </div>
            </div>
            <div>
              <div className="hidden md:inline-block   text-2xl ">
                {coinData.id.toUpperCase()}
              </div>
            </div>
          </div>
          <div>
            <div className="md:text-2xl ">
              ${coinData.current_price.toFixed(2)}
            </div>
            <div className="md:text-2xl">
              {coinData.price_change_percentage_24h > 0 ? (
                <div
                  style={{ color: EColors.PRIMARY }}
                  className="flex gap-1 text-xl"
                >
                  <div>{coinData.price_change_percentage_24h.toFixed(2)}%</div>
                  <div>
                    <RiseOutlined />
                  </div>
                </div>
              ) : (
                <div style={{ color: "red" }} className="flex gap-1 text-xl">
                  <div>{coinData.price_change_percentage_24h.toFixed(2)}%</div>
                  <div style={{ color: "red" }}>
                    <FallOutlined />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
