import styled from "styled-components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCoins, coinsSelector } from "../store/slices/coins";
import { Card } from "../components";
import { Link } from "react-router-dom";

const Coins = () => {
  const { coins, loading, error } = useAppSelector(coinsSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <CoinsWrapper>
      <CoinsContainer>
        {coins.map((coin) => (
          <Link key={coin.id} to={`/coin/${coin.id}`}>
            <Card key={coin.id} coin={coin} />
          </Link>
        ))}
      </CoinsContainer>
    </CoinsWrapper>
  );
};

export default Coins;

const CoinsWrapper = styled.div`
  border: 2px solid pink;
  width: 100%;
  height: 100%;
`;

const CoinsContainer = styled.div`
  padding: 1rem;
`;
