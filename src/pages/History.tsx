import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { coinSelector, fetchCoinHistoricalChart } from "../store/slices/coin";
import { Chart } from "../components";

const History = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    currency,
    historicalChart: { historicalData, loadingHistoryChart, errorHistoryChart },
  } = useAppSelector(coinSelector);
  const days = 360;

  useEffect(() => {
    dispatch(
      fetchCoinHistoricalChart({
        id,
        days: days,
        currency: currency.currency,
      })
    );
  }, [id]);

  return (
    <div>
      <h1>History</h1>
      <Chart data={historicalData} currency={currency} />
    </div>
  );
};

export default History;
