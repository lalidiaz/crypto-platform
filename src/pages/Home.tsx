import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCoins, coinsSelector } from "../store/slices/coins";
import { coinSelector, setCurrency } from "../store/slices/coin";
import { currencyOptions } from "../utils/constants";
import { order } from "../utils/constants";
import { device } from "../styles/breakpoints";
import { CurrencyOption } from "../types";
import {
  Pagination,
  Table,
  Select,
  Loader,
  Error,
  Title,
  CoinsRows,
} from "../components";

const CoinsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;
  height: 90vh;
  overflow-y: scroll;

  @media ${device.laptop} {
    padding: 1rem;
  }
`;

const CoinsContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  padding: 1rem 0rem 2rem 0rem;
`;

const PaginationContainer = styled.div`
  width: 100%;
  padding: 2rem;

  @media ${device.laptop} {
    padding: 2rem 0rem;
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0rem;

  select:nth-child(1) {
    margin-right: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const NoDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  p {
    font-size: 1.6rem;
  }
`;

export default function Home() {
  const { coins, loading, error, page, totalPages } =
    useAppSelector(coinsSelector);
  const [orderSelected, setOrderSelected] = useState({
    label: "Market cap desc",
    value: "market_cap_desc",
  });

  const { currency } = useAppSelector(coinSelector);

  const dispatch = useAppDispatch();

  const handleCurrencyChange = (option: CurrencyOption) => {
    dispatch(setCurrency(option));
  };

  const handleChangeOrder = (option: { label: string; value: string }) => {
    setOrderSelected(option);
  };

  useEffect(() => {
    dispatch(
      fetchCoins({
        currency: currency.currency,
        page,
        order: orderSelected.value,
      })
    );
  }, [page, orderSelected, currency]);

  if (error) return <Error error={error} />;

  return (
    <CoinsWrapper>
      <TopContainer>
        <TitleContainer>
          <Title title="List" />
        </TitleContainer>
        <SelectContainer>
          <Select
            options={order}
            value={orderSelected}
            onChange={handleChangeOrder}
          />
          <Select
            options={currencyOptions}
            value={currency}
            onChange={handleCurrencyChange}
          />
        </SelectContainer>
      </TopContainer>
      <CoinsContainer>
        {loading ? (
          <Loader />
        ) : coins && coins.length ? (
          <>
            <Table
              tableHead={[
                "",
                "Price",
                "Market Cap",
                "ATH",
                "ATL",
                "Price Change (24h)",
                "% Price Change (24h)",
                "Volume",
                "Supply",
              ]}
            >
              <CoinsRows currency={currency} coins={coins} />
            </Table>

            <PaginationContainer>
              <Pagination page={page} totalPages={totalPages} />
            </PaginationContainer>
          </>
        ) : (
          <NoDataContainer>
            <p>No data to display.</p>
          </NoDataContainer>
        )}
      </CoinsContainer>
    </CoinsWrapper>
  );
}
