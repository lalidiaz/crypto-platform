import { Spinner } from "@chakra-ui/react";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

const SpinnerContainer = styled.div`
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

export default function Loader() {
  return (
    <SpinnerContainer>
      <Spinner size="xl" />
    </SpinnerContainer>
  );
}
