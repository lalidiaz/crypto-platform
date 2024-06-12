import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Title, Tag, Stats, Select, RouteLink } from "../components";
import {
  formatDate,
  formatPercentage,
  formatCurrency,
  createMarkup,
  formatCompactNumber,
} from "../utils/helpers";
import {
  fetchCoinDetails,
  coinSelector,
  fetchCoinHistoricalChart,
} from "../store/slices/coin";
import { IOption } from "../types";
import { setCurrency } from "../store/slices/coin";

interface ICurrencyOption extends IOption {
  format: string;
  label: string;
  value: string;
}

const currencyOptions: ICurrencyOption[] = [
  { label: "USD", value: "usd", format: "en-US" },
  { label: "AED", value: "aed", format: "en-AE" },
  { label: "ARS", value: "ars", format: "es-AR" },
];

const Detail = () => {
  const { id } = useParams();
  const {
    coin,
    loading,
    error,
    currency,
    historicalChart: { historicalData, loadingHistoryChart, errorHistoryChart },
  } = useAppSelector(coinSelector);

  console.log("coin ===>", coin);

  const handleCurrencyChange = (option: ICurrencyOption) => {
    dispatch(setCurrency(option));
  };

  const days = 360;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchCoinDetails({ id }));
    dispatch(
      fetchCoinHistoricalChart({ id, days: days, currency: currency.currency })
    );
  }, [id]);

  const {
    name,
    symbol,
    image,
    categories,
    description,
    watchlist_portfolio_users,
    whitepaper,
    last_updated,
    market_cap_rank,
    market_data: {
      current_price,
      ath,
      ath_change_percentage,
      ath_date,
      atl,
      atl_change_percentage,
      atl_date,
      market_cap,
      total_volume,
      high_24h,
      low_24h,
      price_change_24h,
      price_change_percentage_24h,
      price_change_percentage_7d,
      price_change_percentage_14d,
      price_change_percentage_30d,
      price_change_percentage_60d,
      price_change_percentage_200d,
      price_change_percentage_1y,
      market_cap_change_24h,
      market_cap_change_percentage_24h,
      price_change_24h_in_currency,
      price_change_percentage_1h_in_currency,
      price_change_percentage_24h_in_currency,
      price_change_percentage_7d_in_currency,
      price_change_percentage_14d_in_currency,
      price_change_percentage_30d_in_currency,
      price_change_percentage_60d_in_currency,
      price_change_percentage_200d_in_currency,
      price_change_percentage_1y_in_currency,
      market_cap_change_24h_in_currency,
      market_cap_change_percentage_24h_in_currency,
    },
  } = coin;

  const displayTags = categories.map((category) => <Tag text={category} />);

  return (
    <DetailsContainer>
      <SelectContainer>
        <RouteLink to={`/coin/${coin.id}/history`} label="History" />
        <Select
          options={currencyOptions}
          value={currency}
          onChange={handleCurrencyChange}
        />
      </SelectContainer>

      <TopContainer>
        <RightContent>
          <Img src={image.large} />
          <NameContainer>
            <div>
              <Name>{name}</Name>
              <Symbol>{symbol.toUpperCase()}</Symbol>
            </div>
            <LastUpdated>{formatDate(last_updated)} last updated</LastUpdated>
          </NameContainer>
        </RightContent>
        <LeftContainer>
          <CurrentPrice>
            {formatCurrency(currency, current_price[currency.currency])}
          </CurrentPrice>
          <PorfolioUsers>
            {formatCompactNumber(watchlist_portfolio_users)} Portfolio users
          </PorfolioUsers>
          <MarketCapRank>Rank number {market_cap_rank}</MarketCapRank>
        </LeftContainer>
      </TopContainer>

      <DescriptionContainer>
        <Title title={`About ${name}`} />
        {description && description.en && (
          <Description dangerouslySetInnerHTML={createMarkup(description.en)} />
        )}
      </DescriptionContainer>

      <ResourcesContainer>
        <Title title="Resources" />
        <Tag text="lala" />
      </ResourcesContainer>

      <Container>
        <Title title="Market Stats" />
        <MarketStats>
          {ath && <Stats name="all time high" data={ath?.btc} />}
          {ath_change_percentage && (
            <Stats
              name="all time high change percentage"
              data={formatPercentage(ath_change_percentage[currency.currency])}
            />
          )}

          {ath_date && (
            <Stats
              name="all time high date"
              data={formatDate(ath_date[currency.currency])}
            />
          )}

          {atl && (
            <Stats
              name="all time low"
              data={formatCurrency(currency, atl[currency.currency])}
            />
          )}

          {atl_change_percentage && (
            <Stats
              name="all time low change percentage"
              data={formatPercentage(atl_change_percentage[currency.currency])}
            />
          )}

          {atl_date && (
            <Stats
              name="all time low change percentage"
              data={formatPercentage(atl_date[currency.currency])}
            />
          )}

          {market_cap && (
            <Stats
              name="all time low change percentage"
              data={formatPercentage(market_cap[currency.currency])}
            />
          )}
          {total_volume && (
            <Stats
              name="total volume"
              data={formatCurrency(currency, total_volume[currency.currency])}
            />
          )}
          {high_24h && (
            <Stats
              name="high 24h"
              data={formatCurrency(currency, high_24h[currency.currency])}
            />
          )}
          {low_24h && (
            <Stats
              name="low 24h"
              data={formatCurrency(currency, high_24h[low_24h.currency])}
            />
          )}
        </MarketStats>
      </Container>

      <Container>
        <Title title="Market Performance" />
        <MarketPerformance>
          {price_change_24h && (
            <Stats
              name="price change (24h)"
              data={formatCurrency(
                currency,
                price_change_24h[currency.currency]
              )}
            />
          )}
          {price_change_percentage_24h && (
            <Stats
              name="price change % (7d)"
              data={formatPercentage(price_change_percentage_24h)}
            />
          )}
          {price_change_percentage_7d && (
            <Stats
              name="price change % (7d)"
              data={formatPercentage(price_change_percentage_7d)}
            />
          )}
          {price_change_percentage_14d && (
            <Stats
              name="price change % (1d)"
              data={formatPercentage(price_change_percentage_14d)}
            />
          )}
          {price_change_percentage_30d && (
            <Stats
              name="price change % (30d)"
              data={formatPercentage(price_change_percentage_30d)}
            />
          )}
          {price_change_percentage_60d && (
            <Stats
              name="price change % (60d)"
              data={formatPercentage(price_change_percentage_60d)}
            />
          )}
          {price_change_percentage_200d && (
            <Stats
              name="price change % (200d)"
              data={formatPercentage(price_change_percentage_200d)}
            />
          )}
          {price_change_percentage_1y && (
            <Stats
              name="price change % (1yr)"
              data={formatPercentage(price_change_percentage_1y)}
            />
          )}
          {market_cap_change_24h && (
            <Stats
              name="market cap change (24h)"
              data={formatCurrency(
                currency,
                market_cap_change_24h[currency.currency]
              )}
            />
          )}
          {market_cap_change_percentage_24h && (
            <Stats
              name="market cap percentage change (24h)"
              data={formatPercentage(market_cap_change_percentage_24h)}
            />
          )}
          {price_change_24h_in_currency && (
            <Stats
              name="price change (24h)"
              data={formatCurrency(
                currency,
                price_change_24h_in_currency[currency.currency]
              )}
            />
          )}
        </MarketPerformance>
      </Container>
    </DetailsContainer>
  );
};

export default Detail;

const PorfolioUsers = styled.div`
  color: var(--green);
  font-size: 1rem;
`;
const LastUpdated = styled.p`
  font-size: 0.8rem;
  font-style: italic;
`;

const DetailsContainer = styled.div`
  padding: 2rem;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem 0rem 0rem;
  font-size: 2rem;
`;

const Img = styled.img`
  width: 150px;
`;

const ResourcesContainer = styled.div``;

const NameContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5rem;
  p {
    margin: 0rem;
    padding: 0.5rem 0rem;
  }
`;
const Symbol = styled.span`
  color: var(--green);
`;

const CurrentPrice = styled.p``;
const Name = styled.p``;

const Localization = styled.p``;

const Description = styled.div`
  line-height: 1.8rem;
`;

const MarketCapRank = styled.p`
  font-size: 1rem;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
`;

const LeftContainer = styled.div`
  text-align: right;
`;

const DescriptionContainer = styled.div``;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;

const MarketStats = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const MarketPerformance = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  width: 100%;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;

  a {
    margin-right: 2rem;
  }
`;
