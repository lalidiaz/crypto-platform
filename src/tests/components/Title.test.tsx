import { it, expect, describe } from "vitest";
import { Title } from "../../components";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Title", () => {
  it("should render title", () => {
    render(<Title title="My title" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/My title/i);
  });
});
