import { render, screen } from "@testing-library/react";
import { Header } from "../../components";

describe("Header", () => {
  it("should display heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading");
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Laura/i);
  });
});
