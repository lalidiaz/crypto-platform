import styled from "styled-components";
import { useEffect } from "react";
import { coinSelector, fetchCoinDetails } from "../store/slices/coin";
import { Title, Stats, Select, Back, Loader, Error } from "../components";
import { CurrencyOption } from "../types";
import { setCurrency } from "../store/slices/coin";
import { currencyOptions } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import { device } from "../styles/breakpoints";
import {
  formatDate,
  formatPercentage,
  formatCurrency,
  formatCompactNumber,
} from "../utils/helpers";

const Wrapper = styled.div`
  padding: 2rem;
  height: 100vh;

  @media ${device.laptop} {
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem;

  a {
    margin-right: 2rem;
  }

  @media ${device.laptop} {
    padding: 0rem 2rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  width: 100%;
  padding: 2rem 0rem;

  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.laptop} {
    flex-wrap: no-wrap;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function MarketData() {
  const { id } = useParams();
  const { coin, loading, error, currency } = useAppSelector(coinSelector);

  const dispatch = useAppDispatch();

  const handleCurrencyChange = (option: CurrencyOption) => {
    dispatch(setCurrency(option));
  };

  useEffect(() => {
    dispatch(fetchCoinDetails({ id }));
  }, [id]);

  const {
    market_data: {
      atl_change_percentage,
      ath_change_percentage,
      currencies,
      numbers,
      dates,
      percentages,
      ath,
      percentages_currency,
    },
  } = coin;

  const displayCurrencies = Object.entries(currencies).map((item) => {
    return (
      item[1] && (
        <Stats
          name={item[0]}
          data={formatCurrency(currency, item[1][currency.currency])}
        />
      )
    );
  });

  const displayNumbers = Object.entries(numbers).map((item) => {
    return (
      item[1] && <Stats name={item[0]} data={formatCompactNumber(item[1])} />
    );
  });

  const displayDates = Object.entries(dates).map((item) => {
    return (
      item[1] && (
        <Stats name={item[0]} data={formatDate(item[1][currency.currency])} />
      )
    );
  });

  const displayPercentages = Object.entries(percentages).map((item) => {
    return item[1] && <Stats name={item[0]} data={formatPercentage(item[1])} />;
  });

  const displayPercentagesCurrency = Object.entries(percentages_currency).map(
    (item) => {
      return (
        item[1] && (
          <Stats
            name={item[0]}
            data={formatPercentage(item[1][currency.currency])}
          />
        )
      );
    }
  );

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Back />
            <SelectContainer>
              <Select
                options={currencyOptions}
                value={currency}
                onChange={handleCurrencyChange}
              />
            </SelectContainer>
            <TitleContainer>
              <Title title="Market Data" />
            </TitleContainer>
            <StatsContainer>
              {ath && ath.usd && (
                <Stats
                  name="All Time High USD"
                  data={formatCurrency(currency, ath.usd)}
                />
              )}
              {ath.eth && (
                <Stats
                  name="All Time High Ethereum"
                  data={`${formatCompactNumber(ath.eth)} ETH`}
                />
              )}

              {atl_change_percentage && (
                <Stats
                  name="atl_change_percentage"
                  data={formatPercentage(
                    atl_change_percentage[currency.currency]
                  )}
                />
              )}
              {atl_change_percentage && (
                <Stats
                  name="ath_change_percentage"
                  data={formatPercentage(
                    ath_change_percentage[currency.currency]
                  )}
                />
              )}

              {displayCurrencies}
              {displayNumbers}
              {displayDates}
              {displayPercentages}
              {displayPercentagesCurrency}
            </StatsContainer>
          </Container>
        </>
      )}
    </Wrapper>
  );
}
