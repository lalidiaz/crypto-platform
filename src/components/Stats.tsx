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
  }
`;

const Name = styled.p`
  height: 70%;
  font-size: 1rem;
`;

const Data = styled.p`
  color: ${(props) => (props.isNegative ? "var(--red)" : "var(--green)")};
  text-align: right;
  padding-right: 1rem;
`;

type StatsProps = {
  name: string;
  data: string | number | null;
};

export default function Stats({ name, data }: StatsProps) {
  let isNegative = data?.toString().includes("-");

  return (
    <StatsContainer>
      <Name>{name.toUpperCase()}</Name>
      <Data isNegative={isNegative}>{data}</Data>
    </StatsContainer>
  );
}
