import { render, screen, within } from "@testing-library/react";
import { CoinsRows } from "../../components";
import { Currency } from "../../types";
import { mockCoins, mockCurrency } from "../mock";
import { BrowserRouter } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

describe("CoinsRows", () => {
  it("should should render a row per coin given a coins array", () => {
    render(
      <BrowserRouter>
        <CoinsRows coins={mockCoins} currency={mockCurrency} />
      </BrowserRouter>
    );

    const rows = screen.getAllByRole("row");
    const columns = within(rows[0]).getAllByRole("cell");
    expect(columns).toHaveLength(9);

    columns.forEach((col) => {
      expect(col).toBeInTheDocument();
    });
  });
});
