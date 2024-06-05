import styled from "styled-components";
import { ICoin } from "../types";
import { Link } from "react-router-dom";

interface ICoins {
  coins: ICoin[];
}
const Table = ({ coins }: ICoins) => {
  //   const displayTableRow = coins.map((coin) => (
  //     <li key={coin.id}>
  //       <Link to={`/coin/${coin.id}`}>{coin.</Link>
  //     </li>
  //   ));

  //   const displayRow = coins.map((coin: ICoin) => (
  //     <tr key={coin.id}>
  //       <td>{coin.name}</td>
  //     </tr>
  //   ));

  return (
    <div>
      <TableContainer>
        <thead>
          <tr>
            <th>Assets</th>
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
