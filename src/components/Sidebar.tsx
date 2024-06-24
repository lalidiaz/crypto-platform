import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { device } from "../styles/breakpoints";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import logo from "../assets/sumo-logo.svg";
import { motion } from "framer-motion";
import { links } from "../utils/constants";

const NavContainer = styled.aside`
  background-color: var(--card);
  padding: 2rem 1rem;
  min-width: 12rem;
`;

const Li = styled.li`
  padding: 1rem;
  margin: 0rem;
`;

const Ul = styled(motion.ul)`
  list-style: none;
  padding: 3rem 0rem;
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

  const [windowDimension, setWindowDimension] = useState<null | number>(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

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
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </HamburgerContainer>
      </LinkContainer>

      {(isOpen && isMobile) || (!isOpen && !isMobile) ? (
        <Ul
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {displayLinks}
        </Ul>
      ) : null}
    </NavContainer>
  );
}
