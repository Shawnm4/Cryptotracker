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

export default function Home() {
  interface CoinObject {
    id: string;
  }

  const [activeCoin, setActiveCoin] = useState<any>("");
  const [mobileActiveCoin, setMobileActiveCoin] = useState<any>("");
  const { data: coinData } = useGetCoinData();

  function setActiveCoinForDashboard(coinObj: CoinObject) {
    setActiveCoin(coinObj);
  }
  function setMobileActiveCoinForDashboard(coinObj: CoinObject) {
    console.log(coinObj);
    setMobileActiveCoin(coinObj);
  }
  function clearActiveCoin() {
    setActiveCoin("");
  }

  function clearMobileActiveCoin() {
    setMobileActiveCoin("");
  }
  return (
    <>
      <div className="hidden  2xl:inline-block">
        <header
          style={{
            backgroundColor: EColors.PRIMARYBACKGROUND,
          }}
          className="flex justify-center  items-center font-medium  "
        >
          <h1
            style={{ color: "white", fontFamily: "Inter", fontWeight: 200 }}
            className="text-4xl text-center my-10 drop-shadow-2xl"
          >
            <div>
              Explore the Top 50 Cryptocurrencies Rankings & Real-Time Market
              Data
            </div>
          </h1>
        </header>

        {!activeCoin ? (
          <section
            style={{
              backgroundColor: EColors.PRIMARYBACKGROUND,
              color: "white",
            }}
            className="flex justify-center h-screen"
          >
            <div className="w-5/6 rounded-md ">
              <div className=" cursor-pointer rounded-md shadow-2xl mt-10 bg-red-700">
                <DataTabel
                  setActiveCoinForDashboard={setActiveCoinForDashboard}
                  data={coinData?.data}
                />
              </div>
            </div>
          </section>
        ) : (
          <CoinDashboard
            activeCoin={activeCoin}
            clearActiveCoin={clearActiveCoin}
          />
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
                    Explore the Top 50 Cryptocurrencies Rankings & Real-Time
                    Market Data
                  </div>
                </h1>
              </header>
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
            </div>
            <div
              style={{ backgroundColor: EColors.PRIMARYBACKGROUND }}
              className="flex justify-center"
            >
              <div
                className="text-white  mt-10 "
                style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
              ></div>
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
          <header
            style={{
              backgroundColor: EColors.SECONDARYBACKGROUND,
              borderColor: EColors.BORDERGRAY,
            }}
            className="flex justify-center  items-center font-medium border-b  "
          >
            <h1
              style={{ color: "white", fontFamily: "Inter", fontWeight: 200 }}
              className="text-3xl text-center"
            >
              <div>
                Explore the Top 50 Cryptocurrencies Rankings & Real-Time Market
                Data
              </div>
            </h1>
          </header>
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
        </div>
      ) : (
        <MobileCoinDashboard
          activeCoin={mobileActiveCoin}
          clearMobileActiveCoin={clearMobileActiveCoin}
        />
      )}
    </>
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
            <div className="w-2/12">
              <img src={coinData.image} />
            </div>
            <div>
              <div className="md:text-xl font-bold text-lg">
                {coinData.name.toUpperCase()}
              </div>
              <div className="md:text-lg">{coinData.symbol.toUpperCase()}</div>
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
