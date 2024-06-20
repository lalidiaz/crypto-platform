import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatCurrency } from "../utils/helpers";

type ChartProps = {
  data: [string, number][];
  days: number;
  currency: {
    format: string;
    currency: string;
  };
};

const CustomTooltipContainer = styled.div`
  background: var(--btn-dark-gray);
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  border: 2px solid white;
`;

function CustomTooltip({ payload, active, currency }) {
  if (active && payload && payload.length > 0) {
    return (
      <CustomTooltipContainer>
        <p>Date: {payload[0].payload.Date}</p>
        <p>Price: {formatCurrency(currency, payload[0].payload.Price)}</p>
      </CustomTooltipContainer>
    );
  }
  return null;
}

export default function Chart({ data, currency }: ChartProps) {
  const historicalData = data.map((item: [string, number]) => {
    const [timestamp, p] = item;

    return {
      Date: new Date(timestamp).toLocaleDateString(),
      Price: p,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={historicalData}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="Date" hide />
        <YAxis hide />
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip currency={currency} />}
        />
        <Legend />

        <Line
          strokeDasharray="4 1 2"
          type="monotone"
          dataKey="Price"
          stroke="var(--green)"
          fill="var(--green)"
          activeDot={{ stroke: "white", strokeWidth: 2, r: 10 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
