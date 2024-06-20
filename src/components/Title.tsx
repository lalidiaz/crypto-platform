import styled from "styled-components";

const TitleText = styled.h2`
  font-weight: bold;
  padding: 2rem 0rem 1rem 0rem;
  font-size: 1.5rem;
`;

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return <TitleText>{title}</TitleText>;
}
