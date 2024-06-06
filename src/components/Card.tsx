import styled from "styled-components";
import { ICoin } from "../types";
import { formatCurrency } from "../utils/helpers";

interface ICard {
  key: string;
  coin: ICoin;
  currency: {
    currency: string;
    format: string;
  };
}

const Card = ({ coin, currency }: ICard) => {
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
};

export default Card;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
  grid-template-rows: 1;
  background-color: var(--card);
  border-radius: var(--radius);
  padding: 1rem;
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
