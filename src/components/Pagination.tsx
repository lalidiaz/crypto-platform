import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { setPage } from "../store/slices/coins";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 0rem;
`;

const ButtonPage = styled.button`
  background-color: ${(props) =>
    props.selected ? "var(--green)" : "var(--card)"};
  border: none;
  color: var(--white);
  padding: 0.8rem 2rem;
  border-radius: var(--radius);
  cursor: pointer;
`;

type PaginationProps = {
  page: number;
  totalPages: number;
};

export default function Pagination({ page, totalPages }: PaginationProps) {
  const dispatch = useAppDispatch();

  const pagesBtn = Array.from({ length: totalPages }, (_, index) => {
    return (
      <ButtonPage
        key={index + 1}
        selected={page === index + 1 ? true : false}
        onClick={() => dispatch(setPage(index + 1))}
      >
        {index + 1}
      </ButtonPage>
    );
  });

  const handleChangePrev = () => {
    if (page === 1) {
      return;
    } else dispatch(setPage(page - 1));
  };

  const handleChangeNext = () => {
    if (page === 10) {
      return;
    } else dispatch(setPage(page + 1));
  };

  return (
    <PaginationContainer>
      <ButtonPage onClick={handleChangePrev}>Previous</ButtonPage>
      {pagesBtn}
      <ButtonPage onClick={handleChangeNext}>Next</ButtonPage>
    </PaginationContainer>
  );
}
