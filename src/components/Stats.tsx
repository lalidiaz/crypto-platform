import styled from "styled-components";

type IStats = {
  name: string;
  data: string | number | null;
};
const Stats = ({ name, data }: IStats) => {
  let isNegative = data?.toString().includes("-");

  return (
    <StatsContainer>
      <Name>{name.toUpperCase()}</Name>
      <Data isNegative={isNegative}>{data}</Data>
    </StatsContainer>
  );
};

export default Stats;

const StatsContainer = styled.div`
  width: 100%;
  margin: 0.5rem;
  background-color: var(--card);
  padding: 1rem;

  @media only screen and (min-width: 992px) {
    width: 20%;
  }
`;

const Name = styled.p``;

const Data = styled.p`
  color: ${(props) => (props.isNegative ? "var(--red)" : "var(--green)")};
`;
