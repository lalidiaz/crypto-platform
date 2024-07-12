import styled from "styled-components";
import avatar from "../assets/Betty.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 3rem;
`;

const Avatar = styled.img`
  width: 3rem;
  padding-right: 1rem;
`;

const UserName = styled.h6``;

export default function Header() {
  return (
    <HeaderContainer>
      <Avatar src={avatar} alt="avatar" />
      <UserName>Laura</UserName>
    </HeaderContainer>
  );
}
