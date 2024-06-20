import styled from "styled-components";
import { formatCompactNumber } from "../utils/helpers";
import { device } from "../styles/breakpoints";

const StatCardWrapper = styled.div`
  background: var(--gray-medium);
  border-radius: var(--radius);
  padding: 0rem 1rem;
  width: 100%;
  margin-top: 1rem;

  @media ${device.laptop} {
    margin-right: 1rem;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  padding: 1rem 0rem;
`;

const Item = styled.div`
  background: var(--card);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

type Data = {
  name: string;
  value: string;
};

type StatsCardProps = {
  data: Data[];
  title: string;
};

export default function StatsCard({ data, title }: StatsCardProps) {
  const displayCards = data.map((item, index) => (
    <Item key={`${item.value}-${index}`}>
      <p>{item.name}</p>
      <p>{formatCompactNumber(item.value)}</p>
    </Item>
  ));
  return (
    <StatCardWrapper>
      <Title>{title}</Title>
      {displayCards}
    </StatCardWrapper>
  );
}
