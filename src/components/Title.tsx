import styled from "styled-components";

type ITitle = {
  title: string;
};
const Title = ({ title }: ITitle) => {
  return <TitleText>{title}</TitleText>;
};

export default Title;

const TitleText = styled.h2`
  font-weight: normal;
`;
