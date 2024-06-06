import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { setCurrency } from "../store/slices/coin";
import { useState } from "react";

interface ISelectProps {
  currency: string;
  format: string;
}

const Select = ({ currency }: ISelectProps) => {
  const dispatch = useAppDispatch();

  const currencies = [
    { currency: "usd", format: "en-US" },
    { currency: "aed", format: "en-AE" },
    { currency: "ars", format: "es-AR" },
  ];

  const displayOptions = currencies.map((currencyItem) => (
    <option key={currencyItem.format} value={currencyItem.currency}>
      {currencyItem.currency.toUpperCase()}
    </option>
  ));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(currencies[e.target.selectedIndex]));
  };

  return (
    <SelectInput value={currencies[currency.currency]} onChange={handleChange}>
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
