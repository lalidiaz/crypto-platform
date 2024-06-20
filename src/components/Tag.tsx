import styled from "styled-components";

const TagContainer = styled.a`
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: var(--radius);
  font-size: var(--font-small);
  width: auto;
  padding: 0.5rem 1rem;
  text-align: center;
  height: auto;

  &:hover {
    background: white;
    color: var(--background);
  }
`;

type TagProps = {
  text: string;
  href?: string;
  download?: boolean;
};
export default function Tag({ text, href, download }: TagProps) {
  return (
    <TagContainer href={href} target="_blank" download={download}>
      {text}
    </TagContainer>
  );
}
