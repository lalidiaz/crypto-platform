import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
  text-align: right;
  border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TH = styled.th`
  padding: 1rem;
  font-weight: normal;
  color: var(--green);
`;

const THead = styled.thead`
  background: var(--btn-dark-gray);
`;

const TBody = styled.tbody``;

type TableProps = {
  data: JSX.Element[];
  tableHead: string[];
};

export default function Table({ data, tableHead }: TableProps) {
  const displayTableHead = tableHead.map((th, index) => (
    <TH key={`${th}-${index}`}>{th}</TH>
  ));
  return (
    <TableContainer>
      <THead>
        <TableRow>{displayTableHead}</TableRow>
      </THead>
      <TBody>{data}</TBody>
    </TableContainer>
  );
}
