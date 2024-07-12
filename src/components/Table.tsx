import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TH = styled.th`
  padding: 1rem;
  font-weight: normal;
  color: var(--green);
  text-align: left;
`;

const THead = styled.thead``;

const TR = styled.tr`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
  grid-template-rows: 1;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  cursor: pointer;
`;

const TBody = styled.tbody``;

type TableProps = {
  children: JSX.Element;
  tableHead: string[];
};

export default function Table({ children, tableHead }: TableProps) {
  const displayTableHead = tableHead.map((th, index) => (
    <TH key={`${th}-${index}`}>{th}</TH>
  ));
  return (
    <TableContainer>
      <THead>
        <TR>{displayTableHead}</TR>
      </THead>
      <TBody>{children}</TBody>
    </TableContainer>
  );
}
