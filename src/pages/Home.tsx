import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCoins, coinsSelector } from "../store/slices/coins";
import { Pagination, Table, Select, Loader, Error } from "../components";
import { coinSelector, setCurrency } from "../store/slices/coin";
import { Coin, CurrencyOption } from "../types";
import { Link } from "react-router-dom";
import {
  formatPercentage,
  formatCurrency,
  formatCompactNumber,
} from "../utils/helpers";
import { currencyOptions } from "../utils/constants";
import { order } from "../utils/constants";
import { device } from "../styles/breakpoints";

const CoinsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;

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

const TableRow = styled.tr``;

const Name = styled.p`
  color: var(--green);
  margin: 0rem !important;
  padding: 0rem !important;
`;

const Symbol = styled.p`
  font-size: 0.8rem;
  margin: 0rem !important;
  padding: 0rem !important;
`;
const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CoinImg = styled.img`
  width: 50px;
  height: auto;
  padding: 0rem 0.5rem;
`;

const CoinName = styled.div`
  text-align: left;
`;

const TD = styled.td`
  font-weight: normal;
  color: var(--gray-light-1);
  padding: 1rem;
  background: var(--card);
`;

const Ranking = styled.p`
  font-weight: bold;
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

export default function Home() {
  const { coins, loading, error, page, totalPages } =
    useAppSelector(coinsSelector);
  const [orderSelected, setOrderSelected] = useState({
    label: "Market cap desc",
    value: "market_cap_desc",
  });

  console.log("orderSelected", orderSelected);
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

  const rows = coins.map((coin: Coin) => {
    return (
      <TableRow>
        <TD>
          <Link key={coin.id} to={`coin/${coin.id}`}>
            <NameContainer>
              <Ranking>{coin.market_cap_rank}</Ranking>
              <CoinImg src={coin.image} alt={coin.name} />
              <CoinName>
                <Name>{coin.name}</Name>
                <Symbol>{coin.symbol.toUpperCase()}</Symbol>
              </CoinName>
            </NameContainer>
          </Link>
        </TD>
        <TD>{formatCurrency(currency, coin.current_price)}</TD>
        <TD>{formatCurrency(currency, coin.market_cap)}</TD>
        <TD>{formatCurrency(currency, coin.ath)}</TD>
        <TD>{formatCurrency(currency, coin.atl)}</TD>
        <TD>{formatCurrency(currency, coin.price_change_24h)}</TD>
        <TD>{formatPercentage(coin.price_change_percentage_24h)}</TD>
        <TD>{formatCompactNumber(coin.total_volume)}</TD>
        <TD>{formatCompactNumber(coin.total_supply)}</TD>
      </TableRow>
    );
  });

  if (error) return <Error error={error} />;

  return (
    <CoinsWrapper>
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
      <CoinsContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Table
              data={rows}
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
            />
            <PaginationContainer>
              <Pagination page={page} totalPages={totalPages} />
            </PaginationContainer>
          </>
        )}
      </CoinsContainer>
    </CoinsWrapper>
  );
}
