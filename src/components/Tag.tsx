import styled from "styled-components";

interface ITag {
  text: string;
}
const Tag = ({ text }: ITag) => {
  return (
    <TagContainer>
      <Name>{text}</Name>
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div`
  background-color: var(--gray-light-2);
  padding: 0rem 1rem;
  border-radius: var(--radius);
  font-size: var(--font-small);
`;

const Name = styled.p``;
