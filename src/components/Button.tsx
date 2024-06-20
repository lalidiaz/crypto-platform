import styled from "styled-components";

type ButtonProps = {
  label: string;
  onClick: () => void;
  key?: string;
  selected?: boolean;
};

const Btn = styled.button<{ selected?: boolean }>`
  background: ${(props) =>
    props.selected ? "var(--green)" : "var(--btn-dark-gray)"};
  border: ${(props) =>
    props.selected
      ? "1px solid var(--green)"
      : "1px solid var(--btn-dark-gray)"};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius);
  cursor: pointer;

  &:hover {
    background: var(--green);
    border: 1px solid var(--green);
  }
`;

export default function Button({ key, label, onClick, selected }: ButtonProps) {
  return (
    <Btn key={key} onClick={onClick} selected={selected}>
      {label}
    </Btn>
  );
}
