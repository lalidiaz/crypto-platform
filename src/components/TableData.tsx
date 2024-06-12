import styled from "styled-components";
import { ICoin } from "../types";
import { Link } from "react-router-dom";
import { ICurrency } from "../types";
import {
  formatPercentage,
  formatCurrency,
  formatCompactNumber,
} from "../utils/helpers";

type ITable = {
  coins: ICoin[];
  currency: ICurrency;
};

const TableData = ({ coins, currency }: ITable) => {
  console.log("coins TableData", coins);

  const displayRow = coins.map((coin: ICoin) => {
    return (
      <TableRow>
        {" "}
        <TD>
          {" "}
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

  return (
    <TableContainer>
      <THead>
        <TableRow>
          <TH></TH>
          <TH>Price</TH>
          <TH>Market Cap</TH>
          <TH>ATH</TH>
          <TH>ATL</TH>
          <TH>Price Change (24h)</TH>
          <TH>% Price Change (24h)</TH>
          <TH>Volume</TH>
          <TH>Supply</TH>
        </TableRow>
      </THead>
      <TBody>{displayRow}</TBody>
    </TableContainer>
  );
};

export default TableData;

const TableContainer = styled.table`
  width: 100%;
  text-align: right;
  // border-collapse: collapse;
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
const TH = styled.th`
  padding: 1.5rem 0rem;
  font-weight: normal;
  color: var(--green);
`;

const Ranking = styled.p`
  font-weight: bold;
`;

const THead = styled.thead``;

const TBody = styled.tbody``;
