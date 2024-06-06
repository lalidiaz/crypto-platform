import styled from "styled-components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCoins, coinsSelector } from "../store/slices/coins";
import { Card, Pagination } from "../components";
import { Link } from "react-router-dom";
import { coinSelector } from "../store/slices/coin";

const Coins = () => {
  const { coins, loading, error, page, totalPages } =
    useAppSelector(coinsSelector);

  const { currency } = useAppSelector(coinSelector);

  const dispatch = useAppDispatch();
  console.log("page", page);

  useEffect(() => {
    dispatch(fetchCoins({ page }));
  }, [page]);

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <CoinsWrapper>
      <CoinsContainer>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {coins.map((coin) => (
              <Link key={coin.id} to={`/coin/${coin.id}`}>
                <Card key={coin.id} coin={coin} currency={currency} />
              </Link>
            ))}
          </>
        )}
      </CoinsContainer>
      <Pagination page={page} totalPages={totalPages} />
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
