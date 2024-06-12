import styled from "styled-components";

type ITag = {
  text: string;
  href?: string;
  download?: boolean;
};
const Tag = ({ text, href, download }: ITag) => {
  return (
    <TagContainer>
      <Name href={href} target="_blank" download={download}>
        {text}
      </Name>
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div`
  background: var(--green);
  padding: 0rem 1rem;
  border-radius: var(--radius);
  font-size: var(--font-small);
  max-width: 100px;
  width: auto;
  padding: 1rem 1.5rem;
`;

const Name = styled.a``;
