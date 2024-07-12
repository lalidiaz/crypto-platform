import { render, screen } from "@testing-library/react";
import { Title } from "../../components";

describe("Title", () => {
  it("should render title", () => {
    render(<Title title="My title" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/My title/i);
  });
});
