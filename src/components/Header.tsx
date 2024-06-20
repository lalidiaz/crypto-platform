import styled from "styled-components";
import avatar from "../assets/Betty.svg";
import { useLocation } from "react-router-dom";

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

const UserName = styled.p``;

export default function Header() {
  const currDate: Date = new Date();
  const dateStr = currDate.toDateString();
  const { pathname } = useLocation();

  const normalizeString = pathname.replace("/", "");

  return (
    <HeaderContainer>
      <Avatar src={avatar} alt="avatar" />
      <UserName>Laura</UserName>
    </HeaderContainer>
  );
}
