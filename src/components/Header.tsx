import styled from "styled-components";
import avatar from "../assets/Betty.svg";

const Header = () => {
  const currDate: Date = new Date();
  const dateStr = currDate.toDateString();

  return (
    <HeaderContainer>
      <RightContainer>
        <Title>Coins</Title>
        <Today>{dateStr}</Today>
      </RightContainer>
      <LeftContainer>
        <Avatar src={avatar} alt="avatar" />
        <UserName>Laura</UserName>
      </LeftContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

const RightContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

const Title = styled.h1``;

const Today = styled.p`
  color: va(--gray-light-2);
  font-style: italic;
  font-weight: lighter;
  font-size: var(--font-small);
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 992px) {
    width: 10%;
  }
`;

const Avatar = styled.img`
  width: 3rem;
  padding-right: 1rem;
`;

const UserName = styled.p``;
