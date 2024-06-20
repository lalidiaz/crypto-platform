import styled from "styled-components";

const TitleText = styled.h2`
  font-weight: bold;
  padding-bottom: 1rem;
`;

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return <TitleText>{title}</TitleText>;
}
