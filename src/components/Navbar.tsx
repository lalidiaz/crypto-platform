import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sumo-logo.svg";

const links = [{ label: "Coins", href: "/" }];

const Navbar = () => {
  const displayLinks = links.map((link) => (
    <Li key={link.label}>
      <NavLink
        to={link.href}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "var(--green)" : "var(--gray-light-1)",
          };
        }}
      >
        {link.label}
      </NavLink>
    </Li>
  ));
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <Img src={logo} alt="sumo" />{" "}
        </Link>
      </div>
      <Ul>{displayLinks}</Ul>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  padding: 2rem;
  width: 17rem;
  height: 100%;
  min-height: 100vh;
  background-color: var(--card);
`;

const Li = styled.li``;

const Ul = styled.ul`
  padding: 3rem 0;
`;

const Img = styled.img`
  max-width: 8rem;
`;
