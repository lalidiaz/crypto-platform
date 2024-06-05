import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Header } from "./";

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <Content>
        <Header />
        <Outlet />
      </Content>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  padding: 2rem;
`;
