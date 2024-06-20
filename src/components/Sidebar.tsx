import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { device } from "../styles/breakpoints";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import logo from "../assets/sumo-logo.svg";
import { motion } from "framer-motion";
import { links } from "../utils/constants";

const NavContainer = styled.aside`
  background-color: var(--card);
  padding: 2rem 1rem;
  min-width: 12rem;

  @media ${device.laptop} {
  }
`;

const Li = styled.li`
  padding: 1rem 0rem;
  margin: 0rem;
`;

const Ul = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Img = styled.img`
  max-width: 8rem;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HamburgerContainer = styled.button`
  background: pink;
  display: none;

  @media ${device.laptop} {
    display: inline-block;
  }
`;

const Span = styled.span`
  margin-right: 1rem;
`;

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isMobile) setIsSidebarOpen(false);
  }, [isMobile]);

  const displayLinks = links.map((link) => (
    <Li key={link.label}>
      <NavLink
        to={link.href}
        style={({ isActive }) => {
          return {
            display: "flex",
            alignItems: "center",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "var(--green)" : "var(--gray-light-1)",
          };
        }}
      >
        <Span> {link.icon}</Span>
        {link.label}
      </NavLink>
    </Li>
  ));

  return (
    <NavContainer>
      <LinkContainer>
        <Link to="/">
          <Img src={logo} alt="sumo" />{" "}
        </Link>
        <HamburgerContainer onClick={toggleSidebar}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </HamburgerContainer>
      </LinkContainer>

      {isSidebarOpen && isMobile ? (
        <Ul
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {displayLinks}
        </Ul>
      ) : !isMobile ? (
        <div>{displayLinks}</div>
      ) : null}
    </NavContainer>
  );
}
