import { render, screen } from "@testing-library/react";
import { Stats } from "../../components";

describe("Stats", () => {
  it("should renders the formatted name", () => {
    render(<Stats name="test_name" data="12345" />);
    const nameElement = screen.getByText(/TEST NAME/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the data", () => {
    render(<Stats name="test_name" data="12345" />);
    const dataElement = screen.getByText(/12345/i);
    expect(dataElement).toBeInTheDocument();
  });
});
