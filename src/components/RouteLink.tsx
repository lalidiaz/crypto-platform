import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkElement = styled(Link)`
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
  border: 1px solid var(--green);
  border-radius: var(--radius);
  background-color: var(--green);
  color: black;
  text-align: center;
`;

type RouteLinkProps = {
  to: string;
  label: string;
};
export default function RouteLink({ to, label }: RouteLinkProps) {
  return <LinkElement to={to}>{label}</LinkElement>;
}
