import { render, screen } from "@testing-library/react";
import { RouteLink } from "../../components";
import { BrowserRouter } from "react-router-dom";

describe("RouteLink", () => {
  it("should display label and to properties", () => {
    render(
      <BrowserRouter>
        <RouteLink to="/categories" label="Categories" />
      </BrowserRouter>
    );

    const a = screen.getByRole("link");
    expect(a).toBeInTheDocument();
  });
});
