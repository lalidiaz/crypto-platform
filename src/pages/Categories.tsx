import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchCategories,
  categoriesSelector,
} from "../store/slices/categories";

const CategoriesContent = styled.div`
  padding: 2rem;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 27%;
  padding: 1rem;
  margin: 1rem;
  height: auto;
  border-radius: var(--radius);
  background: var(--card);
  // display: grid;
  // grid-template-columns: repeat(12, 1fr);
  // grid-template-rows: 1fr;

  // p:nth-child(1) {
  //   font-weight: bold;
  //   grid-column: 1/3;
  // }

  // p:nth-child(2) {
  //   grid-column: 3/5;
  // }
  // p:nth-child(3) {
  //   grid-column: 5/7;
  // }
  // p:nth-child(4) {
  //   grid-column: 7/9;
  // }
`;

const TopCoins = styled.div`
  grid-column: 10/13;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    border-radius: 50%;
  }
`;

export default function CategoriesList() {
  const { categories } = useAppSelector(categoriesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [categories]);

  const displayCategories = categories.map((item) => (
    <Card key={item.id}>
      <p>{item.name}</p>
      <p>{item.market_cap}</p>
      <p>{item.market_cap_change_24h}</p>
      <p>{item.volume_24h}</p>
      <TopCoins>
        {" "}
        {item.top_3_coins.map((item) => (
          <img key={item} src={item} />
        ))}
      </TopCoins>
    </Card>
  ));

  return <CategoriesContent>{displayCategories}</CategoriesContent>;
}
