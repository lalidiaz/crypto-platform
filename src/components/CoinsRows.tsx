import styled from "styled-components";
import { Coin, Currency } from "../types";
import { Link } from "react-router-dom";
import {
  formatCurrency,
  formatCompactNumber,
  formatPercentage,
} from "../utils/helpers";

type CardProps = {
  coins: Coin[];
  currency: Currency;
};

const Name = styled.p`
  grid-column: 2;
`;

const Symbol = styled.p`
  grid-column: 3;
`;

const TD = styled.td`
  font-weight: normal;
  color: var(--gray-light-1);
  padding: 1rem;
  background: var(--card);
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Ranking = styled.p`
  font-weight: bold;
`;

const CoinImg = styled.img`
  width: 50px;
  height: auto;
  padding: 0rem 0.5rem;
`;

const CoinName = styled.div`
  text-align: left;
`;

const TR = styled.tr`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
  grid-template-rows: 1;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  cursor: pointer;
`;

export default function CoinsRow({ coins, currency }: CardProps) {
  const rows = coins.map((coin: Coin) => {
    return (
      <TR key={coin.id}>
        <TD>
          <Link to={`coin/${coin.id}`}>
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
      </TR>
    );
  });

  return rows;
}
