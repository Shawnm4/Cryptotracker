import PrimaryButton from "../CustomAntTools/Buttons/PrimaryButton";
import { EColors } from "../Enums/EColors";
import useGetCoinDataById from "../Hooks/useGetCoinDataById";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import styles from "./TabletCoinDashboard.module.css";
import {
  addLetterToEndOfNumber,
  decimalThousandsCommaSeparated,
} from "./Helpers/Helperfunctions";
import { Empty } from "antd";
import Spinner from "../CustomAntTools/Buttons/Spinner";

export default function TabletCoinDashboard({
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
        <>
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
                Explore the Top 50 Cryptocurrencies Rankings & Real-Time Market
                Data
              </div>
            </h1>
          </header>
          <div
            className="text-white"
            style={{
              backgroundColor: EColors.PRIMARYBACKGROUND,
              height: "100%",
            }}
          >
            <div>
              {" "}
              <div>
                <PrimaryButton
                  onClick={() => clearMobileActiveCoin()}
                  className="w-48 h-16 text-2xl shadow-xl border-0 mt-10 ml-10 mb-20 "
                >
                  &larr; Go Back
                </PrimaryButton>
              </div>{" "}
            </div>
            <div
              className="text-white flex justify-center "
              style={{
                backgroundColor: EColors.PRIMARYBACKGROUND,
                height: "100%",
              }}
            >
              <div className="mb-10">
                {" "}
                <div className="flex gap-2 text-white text-3xl ">
                  <div className="w-2/12">
                    <img src={activeCoin.image} />
                  </div>
                  <div className="font-bold self-center md:text-6xl ">
                    {activeCoin.id.toUpperCase()}
                  </div>
                </div>
                <div className="">
                  <Spinner spinning={isLoading}>
                    <div className="text-4xl">
                      {activeCoin.symbol.toUpperCase()} Price
                    </div>
                    <div className="mt-2 text-4xl">
                      ${activeCoin.current_price.toLocaleString()}
                    </div>
                  </Spinner>
                </div>
              </div>
            </div>
            <div className="font-bold mb-14 ml-14 text-6xl">Market Stats</div>
            <div
              className="text-white flex justify-center "
              style={{
                backgroundColor: EColors.PRIMARYBACKGROUND,
                height: "100%",
              }}
            >
              <div style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}>
                <Spinner spinning={isLoading}>
                  <div className="grid grid-cols-2 grid-rows-4 gap-10 p-10 border  rounded-lg border-gray-200 shadow-2xl">
                    <div>
                      <div className="md:text-4xl mb-2">Market Cap</div>
                      <div className="text-3xl">
                        {" "}
                        ${addLetterToEndOfNumber(activeCoin?.market_cap)}
                      </div>
                    </div>
                    <div>
                      <div className="md:text-4xl flex mb-2">
                        <div className="mr-5">All Time High</div>
                      </div>
                      <div className="text-3xl">
                        ${decimalThousandsCommaSeparated(activeCoin?.ath)}
                      </div>
                    </div>
                    <div>
                      <div className="md:text-4xl  mb-2">
                        <div className="flex items-center">
                          Circulating Supply
                        </div>
                      </div>
                      <div className="text-3xl">
                        {addLetterToEndOfNumber(activeCoin?.circulating_supply)}
                      </div>
                    </div>
                    <div>
                      <div className="md:text-4xl mb-2">Rank</div>
                      <div className="text-3xl">
                        #{activeCoin.market_cap_rank}
                      </div>
                    </div>
                    <div>
                      <div className="md:text-4xl mb-2">Price Change(1D)</div>
                      <div className="text-3xl">
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
                      <div className="md:text-4xl mb-2">Price Change(7D)</div>
                      <div className="text-3xl">
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
                      <div className="md:text-4xl mb-2">Price Change(30D)</div>
                      <div className="text-3xl">
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
                      <div className="md:text-4xl mb-2">Price Change(1Y)</div>
                      <div className="text-3xl">
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

                            <FallOutlined />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>{" "}
                </Spinner>
              </div>
            </div>
            <div
              className="text-white flex justify-center mt-10"
              style={{
                backgroundColor: EColors.PRIMARYBACKGROUND,
                height: "100%",
              }}
            >
              <div
                style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
                className="w-3/4  p-6 border  rounded-lg border-gray-200 shadow-2xl "
              >
                <div>
                  <Spinner spinning={isLoading}>
                    <div
                      className={`${styles.description} text-4xl p-5 leading-loose  `}
                      dangerouslySetInnerHTML={{
                        __html: coinData?.data?.description?.en,
                      }}
                    />
                  </Spinner>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            backgroundColor: EColors.PRIMARYBACKGROUND,
            height: "100vh",
          }}
          className="text-white flex justify-center "
        >
          <div>
            <PrimaryButton
              onClick={() => clearMobileActiveCoin()}
              className="w-32 h-12 text-lg shadow-xl border-0 mt-6 ml-6  "
            >
              &larr; Go Back
            </PrimaryButton>
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
        </div>
      )}
    </>
  );
}

{
  /* <div>
            <PrimaryButton
              onClick={() => clearMobileActiveCoin()}
              className="w-48 h-16 text-2xl shadow-xl border-0 mt-10 ml-10 mb-20 "
            >
              &larr; Go Back
            </PrimaryButton>
          </div> */
}

{
  /* <div
style={{ backgroundColor: EColors.SECONDARYBACKGROUND }}
className="w-1/2  p-6 "
>
<div>
  <div
    className={`${styles.description} text-xl p-5 `}
    dangerouslySetInnerHTML={{
      __html: coinData?.data?.description?.en,
    }}
  />
</div>
</div> */
}

{
  /* <div className="grid grid-cols-2 grid-rows-4 gap-10 p-6 ">
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
</div> */
}
