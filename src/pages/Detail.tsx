import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails, coinSelector } from "../store/slices/coin";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Detail = () => {
  const { id } = useParams();
  const { coin, loading, error } = useAppSelector(coinSelector);

  console.log("---id -----", id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchCoinDetails({ id }));
  }, [id]);

  // const {
  //   name,
  //   symbol,
  //   links,
  //   image,
  //   high_24h,
  //   low_24h,
  //   price_change_24h,
  //   price_change_percentage_24h,
  //   price_change_percentage_7d,
  //   price_change_percentage_14d,
  //   price_change_percentage_30d,
  //   price_change_percentage_60d,
  //   price_change_percentage_200d,
  //   price_change_percentage_1y,
  //   market_cap_change_24h,
  //   market_cap_change_percentage_24h,
  // } = coin;

  console.log("----coin----", coin);

  return (
    <DetailsContainer>
      <TopContainer>{id}</TopContainer>
    </DetailsContainer>
  );
};

export default Detail;

const DetailsContainer = styled.div``;

const TopContainer = styled.div``;
