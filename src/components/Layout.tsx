import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Header } from "./";

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <Wrapper>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  display: flex;
`;

const Wrapper = styled.div``;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 2rem 0rem;
`;
