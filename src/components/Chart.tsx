import { IHistoricalChart } from "../types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatCurrency, formatDate } from "../utils/helpers";

type IChart = {
  data: IHistoricalChart;
  //   days: number;
  currency: {
    format: string;
    currency: string;
  };
};

const Chart = ({ data, currency }: IChart) => {
  console.log("------> data CHART ------>", data);
  const historicalData = data.map((item) => {
    const [timestamp, p] = item;

    return {
      Date: timestamp,
      Price: p,
    };
  });

  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <AreaChart
        width={600}
        height={400}
        data={historicalData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </>
  );
};

export default Chart;
