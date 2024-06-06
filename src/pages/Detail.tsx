import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails, coinSelector } from "../store/slices/coin";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Table, Title, Tag, Stats, Select } from "../components";
import { formatDate, formatPercentage, formatCurrency } from "../utils/helpers";

const Detail = () => {
  const { id } = useParams();
  const { coin, loading, error, currency } = useAppSelector(coinSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchCoinDetails({ id }));
  }, [id]);

  const {
    name,
    symbol,
    image,
    categories,
    description,
    whitepaper,
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

  let descriptionText = description.en?.split(",")[0];

  return (
    <DetailsContainer>
      <SelectContainer>
        <Select currency={currency} />
      </SelectContainer>
      <TopContainer>
        <NameBanner>
          <Img src={image.large} />
          <NameContainer>
            <Name>{name}</Name>
            <Symbol>{symbol.toUpperCase()}</Symbol>
          </NameContainer>

          {/* <MarketCapRank>{market_cap_rank}</MarketCapRank> */}
        </NameBanner>
        <CurrentPrice>
          {formatCurrency(currency, current_price[currency.currency])}
        </CurrentPrice>
      </TopContainer>

      {/* <Localization>{localization?.en}</Localization> */}
      <DescriptionContainer>
        <Title title={`About ${name}`} />
        <Description>{descriptionText}</Description>
      </DescriptionContainer>
      {/* <TagsContainer>{displayTags}</TagsContainer> */}

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

const DetailsContainer = styled.div`
  padding: 2rem;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-light-2);
  padding: 0rem 2rem 0rem 0rem;
  font-size: 2rem;
`;

const Img = styled.img`
  width: 100px;
`;

const NameContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;
const Symbol = styled.span`
  font-weight: bold;
  color: var(--green);
  padding-left: 1rem;
`;

const CurrentPrice = styled.p``;
const Name = styled.p``;

const Localization = styled.p``;

const Description = styled.p``;

const MarketCapRank = styled.p``;

const NameBanner = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
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

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Container = styled.div``;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
`;
