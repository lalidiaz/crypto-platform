import { render, screen } from "@testing-library/react";
import { Select } from "../../components";
import { currencyOptions } from "../../utils/constants";
import { mockCurrency } from "../mock";

describe("Select", () => {
  it("should call onChange ", () => {
    render(
      <Select
        options={currencyOptions}
        value={mockCurrency}
        // onChange={() => vn}
      />
    );
  });
});
