import styled from "styled-components";
import avatar from "../assets/Betty.svg";

const Header = () => {
  const currDate: Date = new Date();
  const dateStr = currDate.toDateString();
  console.log(dateStr);

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
`;

const RightContainer = styled.div``;

const Title = styled.h1``;

const Today = styled.p`
  color: va(--gray-light-2);
  font-style: italic;
  font-weight: lighter;
`;

const LeftContainer = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 3rem;
  padding-right: 1rem;
`;

const UserName = styled.p``;
