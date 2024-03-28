import PrimaryButton from "../CustomAntTools/Buttons/PrimaryButton";
import { EColors } from "../Enums/EColors";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import styles from "./MobileCoinDashboard.module.css";
import useGetCoinDataById from "../Hooks/useGetCoinDataById";
import { Empty } from "antd";
import Spinner from "../CustomAntTools/Buttons/Spinner";

export default function MobileCoinDashboard({
  activeCoin,
  clearMobileActiveCoin,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  const {
    data: coinData,
    isLoading,
    error,
  } = useGetCoinDataById(activeCoin.id);

  return (
    <>
      {!error ? (
        <div
          style={{ height: "100%", backgroundColor: EColors.PRIMARYBACKGROUND }}
          className="md:hidden h-screen text-white  "
        >
          <div className="md:hidden ml-6">
            <div className="flex mb-5  ">
              <PrimaryButton
                onClick={() => clearMobileActiveCoin()}
                className="w-32 h-12 text-lg shadow-xl border-0 mt-3  "
              >
                &larr; Go Back
              </PrimaryButton>
            </div>
            <div className="flex gap-2 text-white text-3xl ">
              <div className="w-2/12">
                <img src={activeCoin.image} />
              </div>
              <div className="font-bold self-center ">
                {activeCoin.id.toUpperCase()}
              </div>
              <div className="self-center ">
                {activeCoin.symbol.toUpperCase()}
              </div>
            </div>
            <Spinner spinning={isLoading}>
              <div className="mt-10">
                <div className="text-2xl">
                  {activeCoin.symbol.toUpperCase()} Price
                </div>
                <div className="mt-2 text-4xl">
                  ${activeCoin.current_price.toFixed(2)}
                </div>
                <div className="flex mt-2 gap-2">
                  <div className="">
                    {activeCoin.price_change_24h > 0 ? (
                      <div
                        style={{ color: EColors.PRIMARY }}
                        className="flex gap-1 text-xl"
                      >
                        <div>{activeCoin.price_change_24h.toFixed(2)}$</div>
                        <div>
                          <RiseOutlined />
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{ color: "red" }}
                        className="flex gap-1 text-xl"
                      >
                        <div>
                          {activeCoin.price_change_percentage_24h.toFixed(2)}$
                        </div>
                        <div style={{ color: "red" }}>
                          <FallOutlined />
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {activeCoin.price_change_24h > 0 ? (
                      <div
                        style={{ color: EColors.PRIMARY }}
                        className="flex gap-1 text-xl"
                      >
                        <div>({activeCoin.price_change_24h.toFixed(2)}%)</div>
                      </div>
                    ) : (
                      <div
                        style={{ color: "red" }}
                        className="flex gap-1 text-xl"
                      >
                        <div>
                          ({activeCoin.price_change_percentage_24h.toFixed(2)}%)
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Spinner>
            <div className=" font-bold mt-10 text-3xl">Market Stats</div>
          </div>
          <Spinner spinning={isLoading}>
            <div className=" mt-6 flex justify-center">
              <div
                style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
                className="w-11/12 flex justify-center border  rounded-lg border-gray-200 shadow-2xl"
              >
                <div className="grid grid-cols-2 grid-rows-4 gap-14   p-6 ">
                  <div>
                    <div className=" font-bold text-xl whitespace-nowrap ">
                      Market Cap
                    </div>
                    <div className="text-2xl whitespace-nowrap">
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
                    <div className="font-bold text-xl whitespace-nowrap ">
                      ATH
                    </div>
                    <div className="text-2xl whitespace-nowrap">
                      ${activeCoin?.ath.toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className=" font-bold text-xl  ">
                      Circulating Supply
                    </div>
                    <div className="text-2xl whitespace-nowrap">
                      {activeCoin?.circulating_supply?.toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className=" font-bold text-xl whitespace-nowrap ">
                      Rank
                    </div>
                    <div className="text-4xl whitespace-nowrap">
                      #{activeCoin.market_cap_rank}
                    </div>
                  </div>
                  <div>
                    <div className="text-xl  font-bold ">Price Change(1D)</div>
                    <div className="text-2xl whitespace-nowrap">
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
                    <div className="text-xl font-bold ">Price Change(7D)</div>
                    <div className="text-2xl whitespace-nowrap">
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
                    <div className="text-xl font-bold  ">Price Change(30D)</div>
                    <div className="text-2xl whitespace-nowrap">
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
                    <div className="text-xl font-bold  ">Price Change(1Y)</div>
                    <div className="text-2xl whitespace-nowrap">
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
          </Spinner>
          <Spinner spinning={isLoading}>
            <div className=" mt-6 flex justify-center">
              <div className="w-11/12 flex justify-center">
                <div
                  style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
                  className=" border text-white  rounded-lg border-gray-200 shadow-2xl mt-10"
                >
                  <div
                    className={`${styles.description} text-xl p-10 `}
                    dangerouslySetInnerHTML={{
                      __html: coinData?.data?.description?.en,
                    }}
                  />
                </div>
              </div>
            </div>
          </Spinner>
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
    </>
  );
}
