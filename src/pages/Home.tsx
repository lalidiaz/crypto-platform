import styled from "styled-components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCoins, coinsSelector } from "../store/slices/coins";
import { Pagination, TableData } from "../components";
import { coinSelector } from "../store/slices/coin";

const Coins = () => {
  const { coins, loading, error, page, totalPages } =
    useAppSelector(coinsSelector);

  const { currency } = useAppSelector(coinSelector);

  console.log("coins", coins);

  const dispatch = useAppDispatch();

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
          <LoadingWrapper>
            <p>Loading...</p>
          </LoadingWrapper>
        ) : (
          <TableData coins={coins} currency={currency} />
        )}
      </CoinsContainer>
      <PaginationContainer>
        <Pagination page={page} totalPages={totalPages} />
      </PaginationContainer>
    </CoinsWrapper>
  );
};

export default Coins;

const CoinsWrapper = styled.div``;

const CoinsContainer = styled.div`
  padding: 1rem;
  height: 100%;
`;

const PaginationContainer = styled.div``;

const LoadingWrapper = styled.div`
  padding: 2rem;
  height: 100%;
  min-height: 400px;
`;
