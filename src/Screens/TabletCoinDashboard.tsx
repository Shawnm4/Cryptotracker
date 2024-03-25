import PrimaryButton from "../CustomAntTools/Buttons/PrimaryButton";
import { EColors } from "../Enums/EColors";
import useGetCoinDataById from "../Hooks/useGetCoinDataById";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import styles from "./TabletCoinDashboard.module.css";

export default function TabletCoinDashboard({
  activeCoin,
  clearMobileActiveCoin,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  const { data: coinData } = useGetCoinDataById(activeCoin.id);
  return (
    <div
      style={{ backgroundColor: EColors.PRIMARYBACKGROUND, height: "100vh" }}
    >
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
            Explore the Top 50 Cryptocurrencies Rankings & Real-Time Market Data
          </div>
        </h1>
      </header>
      <div
        className="text-white w-full  "
        style={{ backgroundColor: EColors.PRIMARYBACKGROUND, height: "100vh" }}
      >
        <div>
          <PrimaryButton
            onClick={() => clearMobileActiveCoin()}
            className="w-48 h-16 text-2xl shadow-xl border-0 mt-10 ml-10 mb-20 "
          >
            &larr; Go Back
          </PrimaryButton>
        </div>
        <div className="flex justify-center text-7xl mb-20">
          <div>Bitcoin</div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-between gap-20 mx-10 ">
            <div
              style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
              className=" w-1/2 self-start"
            >
              <div className="flex justify-center  ">
                <div className="grid grid-cols-2 grid-rows-4 gap-10 p-6 ">
                  <div>
                    <div>Market Cap</div>
                    <div>
                      {" "}
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
                    <div>ATH</div>
                    <div>${activeCoin?.ath.toFixed(2)}</div>
                  </div>
                  <div>
                    <div>Circulating Supply</div>
                    <div>{activeCoin?.circulating_supply?.toFixed(2)}</div>
                  </div>
                  <div>
                    <div>Rank</div>
                    <div>#{activeCoin.market_cap_rank}</div>
                  </div>
                  <div>
                    <div>Price Change(1D)</div>
                    <div>
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
                    <div>Price Change(7D)</div>
                    <div>
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
                    <div>Price Change(30D)</div>
                    <div>
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
                    <div>Price Change(1Y)</div>
                    <div>
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
              className="w-1/2 self-start p-6 "
            >
              <div>
                <div
                  className={`${styles.description} text-xl p-5 `}
                  dangerouslySetInnerHTML={{
                    __html: coinData?.data?.description?.en,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
