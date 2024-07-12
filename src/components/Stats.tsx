import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StatsContainer = styled.div`
  margin: 0.5rem;
  width: 28%;
  background-color: var(--card);
  padding: 2rem;
  border-radius: 2rem;

  @media ${device.laptop} {
    width: 100%;
    margin: 0rem 0rem 1rem 0rem;
  }
`;

const Name = styled.p`
  font-size: 1rem;
`;

const Data = styled.p`
  color: ${(props) => (props.negative ? "var(--red)" : "var(--green)")};
  text-align: right;
  padding-right: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

type StatsProps = {
  name: string;
  data: string | number | null;
};

export default function Stats({ name, data }: StatsProps) {
  let negative = data && data.toString().includes("-");

  const formatDate = name.replace(/_/g, " ").toUpperCase();

  return (
    <StatsContainer>
      <Name>{formatDate}</Name>
      <Data negative={negative}>{data}</Data>
    </StatsContainer>
  );
}
