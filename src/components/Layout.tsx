import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Sidebar, Header } from "./";
import { device } from "../styles/breakpoints";

const Main = styled.main``;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  height: 100%;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export default function Layout() {
  return (
    <Content>
      <Sidebar />
      <Container>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </Content>
  );
}
