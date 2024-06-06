import styled from "styled-components";

interface ITitle {
  title: string;
}
const Title = ({ title }: ITitle) => {
  return <TitleText>{title}</TitleText>;
};

export default Title;

const TitleText = styled.h2`
  padding-bottom: 2rem;
`;
