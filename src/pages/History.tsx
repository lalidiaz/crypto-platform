import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { coinSelector, fetchCoinHistoryChart } from "../store/slices/coin";
import { Chart, Button, Loader, Error, Back, Title } from "../components";
import { device } from "../styles/breakpoints";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;

  @media ${device.laptop} {
    padding: 0rem 1rem 4rem 1rem;
  }
`;

const ChartContainer = styled.div`
  padding: 2rem 1rem 3rem;
  border-radius: var(--radius);
  background: var(--card);
`;

const BtnContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button:nth-child(1) {
    margin-right: 2rem;
  }
  button:nth-child(2) {
    margin-right: 2rem;
  }
  button:nth-child(3) {
    margin-right: 2rem;
  }
  button:nth-child(4) {
    margin-right: 2rem;
  }

  @media ${device.laptop} {
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 2rem;

    button:nth-child(1) {
      margin-right: 0rem;
    }
    button:nth-child(2) {
      margin-right: 0rem;
    }
    button:nth-child(3) {
      margin-right: 0rem;
    }
    button:nth-child(4) {
      margin-right: 0rem;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function History() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [days, setDays] = useState<number>(360);
  const {
    currency,
    historyChart: { dataHistoryChart, loadingHistoryChart, errorHistoryChart },
  } = useAppSelector(coinSelector);

  useEffect(() => {
    dispatch(
      fetchCoinHistoryChart({
        id,
        days: days,
        currency: currency.currency,
      })
    );
  }, [id, days]);

  const buttons = [
    { label: "1W", days: 7 },
    { label: "1M", days: 14 },
    { label: "30D", days: 30 },
    { label: "1Y", days: 360 },
  ];

  const displayBtns = buttons.map((item) => (
    <Button
      key={item.label}
      label={item.label}
      onClick={() => setDays(item.days)}
      selected={days === item.days}
    />
  ));

  if (errorHistoryChart) {
    return <Error error={errorHistoryChart} />;
  }

  return (
    <Wrapper>
      <Back />
      <TitleContainer>
        <Title title="History" />
      </TitleContainer>
      <BtnContainer>{displayBtns}</BtnContainer>

      <ChartContainer>
        {loadingHistoryChart ? (
          <Loader />
        ) : dataHistoryChart ? (
          <Chart data={dataHistoryChart} currency={currency} />
        ) : null}
      </ChartContainer>
    </Wrapper>
  );
}
