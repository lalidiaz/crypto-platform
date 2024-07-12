import { render, screen } from "@testing-library/react";
import { StatsCard } from "../../components";
import { Data } from "../../types";

describe("StatsCard", () => {
  it("should display name of first element if data array is provided", () => {
    const data: Data[] = [
      { name: "Forks", value: 12 },
      { name: "Stars", value: 100 },
      { name: "Subscribers", value: 20 },
    ];

    render(<StatsCard data={data} title="💻 Developer Data" />);

    expect(screen.getByText(/💻 Developer Data/i)).toBeInTheDocument();

    data.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
  it("should display No data available when the data array is empty", () => {
    render(<StatsCard data={[]} title="💻 Developer Data" />);

    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });
});
