import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { setNextPage, setPrevPage, setPage } from "../store/slices/coins";

type IPagination = {
  page: number;
  totalPages: number;
};
const Pagination = ({ page, totalPages }: IPagination) => {
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
    dispatch(setPrevPage());
  };

  const handleChangeNext = () => {
    dispatch(setNextPage());
  };

  return (
    <PaginationContainer>
      <ButtonPage onClick={handleChangePrev}>Previous</ButtonPage>
      {pagesBtn}
      <ButtonPage onClick={handleChangeNext}>Next</ButtonPage>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 4rem;
`;

const ButtonPage = styled.button`
  background-color: ${(props) =>
    props.selected ? "var(--green)" : "var(--card)"};
  border: none;
  color: var(--white);
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
  cursor: pointer;
`;
