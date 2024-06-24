import styled from "styled-components";
import { Coin } from "../types";
import { formatCurrency } from "../utils/helpers";

type CardProps = {
  key: string;
  coin: Coin;
  currency: {
    currency: string;
    format: string;
  };
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
  grid-template-rows: 1;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Img = styled.img`
  grid-column: 1/2;
  width: 3rem;
`;

const Name = styled.p`
  grid-column: 2;
`;

const Symbol = styled.p`
  grid-column: 3;
`;

const CurrentPrice = styled.p`
  grid-column: 4;
`;

export default function Card({ coin, currency }: CardProps) {
  const { name, symbol, image, current_price } = coin;

  return (
    <CardContainer>
      <Img src={image} alt={`${name}-logo`} />
      <Name>{name}</Name>
      <Symbol>{symbol.toUpperCase()}</Symbol>
      <CurrentPrice>
        {formatCurrency(currency, current_price[currency.currency])}
      </CurrentPrice>
    </CardContainer>
  );
}
