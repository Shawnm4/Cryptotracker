/* eslint-disable @typescript-eslint/no-explicit-any */
import DataTabel from "./DataTabel";
import useGetCoinData from "../Hooks/useGetAllCoinData";
import { useState } from "react";
import CoinDashboard from "./CoinDashboard";
import { EColors } from "../Enums/EColors";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import PrimaryButton from "../CustomAntTools/Buttons/PrimaryButton";

export default function Home() {
  interface CoinObject {
    id: string;
  }

  const [activeCoin, setActiveCoin] = useState<any>("");
  const { data: coinData } = useGetCoinData();

  function setActiveCoinForDashboard(coinObj: CoinObject) {
    setActiveCoin(coinObj);
  }
  function clearActiveCoin() {
    setActiveCoin("");
  }

  return (
    <>
      <div className="hidden  2xl:inline-block">
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

        {!activeCoin ? (
          <section
            style={{ backgroundColor: "black" }}
            className="flex justify-center h-screen"
          >
            <div className="w-5/6 rounded-md ">
              <div className=" cursor-pointer rounded-md shadow-xl mt-10 bg-red-700">
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
      <div className=" hidden md:flex 2xl:hidden">
        <header
          style={{
            backgroundColor: EColors.SECONDARYBACKGROUND,
            borderColor: EColors.BORDERGRAY,
          }}
          className="flex w-full justify-center  items-center font-medium border-b  "
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
      </div>

      {/* CellPhone */}
      {!activeCoin ? (
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
                coinData={coin}
                setActiveCoinForDashboard={setActiveCoinForDashboard}
                activeCoin={activeCoin}
              />
            ))}
          </div>
        </div>
      ) : (
        <CoinDashboard
          activeCoin={activeCoin}
          clearActiveCoin={clearActiveCoin}
        />
      )}
    </>
  );
}

function CoinListItem({
  coinData,
  setActiveCoinForDashboard,
  activeCoin,
}: any) {
  return (
    <>
      <div
        onClick={() => setActiveCoinForDashboard(coinData)}
        className="border-b border-white "
        style={{ color: "white" }}
      >
        <div className="flex mx-4 gap-6 p-3">
          <div className="font-bold text-lg">#{coinData.market_cap_rank}</div>
          <div className="flex gap-2 ">
            <div className="w-2/12">
              <img src={coinData.image} />
            </div>
            <div>
              <div className=" font-bold text-lg">
                {coinData.name.toUpperCase()}
              </div>
              <div className="">{coinData.symbol.toUpperCase()}</div>
            </div>
          </div>
          <div>
            <div className="text-lg">${coinData.current_price.toFixed(2)}</div>
            <div className="text-lg">
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
