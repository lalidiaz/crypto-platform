import { Link } from "react-router-dom";
import styled from "styled-components";

type IRouteLink = {
  to: string;
  label: string;
};
const RouteLink = ({ to, label }: IRouteLink) => {
  return <LinkElement to={to}>{label}</LinkElement>;
};

export default RouteLink;

const LinkElement = styled(Link)`
  padding: 0.5rem 1rem;
  border: 1px solid var(--green);
  border-radius: var(--radius);
  background-color: var(--green);
  color: black;
`;
