import DataTabel from "./DataTabel";
import useGetCoinData from "../Hooks/useGetAllCoinData";
import { useState } from "react";
import CoinDashboard from "./CoinDashboard";
import { EColors } from "../Enums/EColors";

export default function Home() {
  const [activeCoin, setActiveCoin] = useState("");
  const { data: coinData } = useGetCoinData();

  function setActiveCoinForDashboard(coinObj: any) {
    setActiveCoin(coinObj);
  }
  function clearActiveCoin() {
    setActiveCoin("");
  }

  return (
    <>
      <header
        style={{
          backgroundColor: EColors.BACKGROUNDGRAY,
          borderColor: EColors.BORDERGRAY,
        }}
        className="flex justify-center  items-center font-medium border-b  "
      >
        <h1
          style={{ color: "white", fontFamily: "Inter", fontWeight: 200 }}
          className="text-3xl text-center"
        >
          <div>
            Explore the Top 50 Cryptocurrencies Rankings & Real-Time Market Data
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
    </>
  );
}
