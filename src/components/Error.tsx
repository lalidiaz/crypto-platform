import styled from "styled-components";
import { device } from "../styles/breakpoints";

const ErrorWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem;

  @media ${device.laptop} {
    padding: 4rem;
  }
`;

const ErrorMsg = styled.p`
  color: red;
`;

type Props = {
  error: string | null;
};

export default function Error({ error }: Props) {
  return (
    <ErrorWrapper>
      <ErrorMsg>{error}</ErrorMsg>
    </ErrorWrapper>
  );
}
