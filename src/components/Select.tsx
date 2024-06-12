import styled from "styled-components";
import { IOption } from "../types";

type ISelectProps<T extends IOption> = {
  options: T[];
  value: T;
  onChange: (option: T) => void;
};

const Select = <T extends IOption>({
  options,
  value,
  onChange,
}: ISelectProps<T>) => {
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
};

export default Select;

const SelectInput = styled.select`
  background-color: var(--green);
  border-radius: var(--radius);
  border: none;
  padding: 0.5rem 0.8rem;
`;
