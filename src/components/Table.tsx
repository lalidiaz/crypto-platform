import styled from "styled-components";
import { IMarketData } from "../types";

interface ITable {
  market_data: IMarketData;
}

const Table = ({ market_data }: ITable) => {
  console.log("market_data", market_data);

  const {
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
    market_cap,
    total_volume,
    high_24h,
    low_24h,
    price_change_24h,
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_14d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_200d,
    price_change_percentage_1y,
    market_cap_change_24h,
    market_cap_change_percentage_24h,
    price_change_24h_in_currency,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_14d_in_currency,
    price_change_percentage_30d_in_currency,
    price_change_percentage_60d_in_currency,
    price_change_percentage_200d_in_currency,
    price_change_percentage_1y_in_currency,
    market_cap_change_24h_in_currency,
    market_cap_change_percentage_24h_in_currency,
  } = market_data;

  // const displayRow = coins.map((coin: ICoin) => (
  //   <tr key={coin.id}>
  //     <td>{ath}</td>
  //   </tr>
  // ));

  return (
    <div>
      <TableContainer>
        <thead>
          <tr>
            <th>All Time High</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h volume</th>
            <th>Market cap</th>
          </tr>
        </thead>
        <tbody>{/* {displayRow} */}</tbody>
      </TableContainer>
    </div>
  );
};

export default Table;

const TableContainer = styled.table``;
