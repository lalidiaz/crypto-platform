import styled from "styled-components";
import { IOption } from "../types";

const SelectInput = styled.select`
  background-color: var(--card);
  border: 1px solid white;
  color: white;
  border-radius: var(--radius);
  padding: 0.5rem 0.8rem;
`;

type SelectProps<T extends IOption> = {
  options: T[];
  value: T;
  onChange: (option: T) => void;
};

export default function Select<T extends IOption>({
  options,
  value,
  onChange,
}: SelectProps<T>) {
  const displayOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (option) => option.value === e.target.value
    );
    if (selectedOption) {
      onChange(selectedOption);
    }
  };

  return (
    <SelectInput value={value.value} onChange={handleChange}>
      {displayOptions}
    </SelectInput>
  );
}
