import { render, screen } from "@testing-library/react";
import { Table } from "../../components";

describe("Table", () => {
  it("should display a table", () => {
    render(
      <Table
        data={[<tr>children 1</tr>, <tr>children 2</tr>]}
        tableHead={["Column 1", "Column 2"]}
      />
    );

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
