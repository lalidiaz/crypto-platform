import { render, screen } from "@testing-library/react";
import { Tag } from "../../components";

describe("Tag", () => {
  it("should render text, download and href", () => {
    render(<Tag href="https://react.dev/" target="_blank" download={true} />);

    const a = screen.getByRole("link");
    expect(a).toBeInTheDocument();
    expect(a).toHaveAttribute("target");
    expect(a).toHaveAttribute("href", "https://react.dev/");
    expect(a).toHaveAttribute("download");
  });
});
