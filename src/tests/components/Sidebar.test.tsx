import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "../../components";

describe("Sidebar", () => {
  it("should display list of links", () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const aTags = screen.getAllByRole("link");
    const image = screen.getByRole("img");
    const unorderedList = screen.getByRole("ul");

    expect(image).toBeInTheDocument();
    expect(unorderedList).toBeInTheDocument();

    aTags.forEach((tag) => {
      expect(tag).toBeInTheDocument();
    });
  });
});
