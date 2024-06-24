import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Title, Loader, Error } from "../components";
import { formatCompactNumber } from "../utils/helpers";
import {
  fetchCategories,
  categoriesSelector,
} from "../store/slices/categories";
import { device } from "../styles/breakpoints";

const CategoriesWrapper = styled.div`
  padding: 2rem;
  overflow-y: scroll;
  height: 90vh;

  @media ${device.laptop} {
    padding: 0rem;
  }
`;

const CategoriesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 28%;
  padding: 1rem 2rem;
  margin: 1rem;
  height: auto;
  border-radius: var(--radius);
  background: var(--card);

  @media ${device.laptop} {
    width: 100%;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;

const TopCoins = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-left: 0.5rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function CategoriesList() {
  const { categories, loadingCategories, errorCategories } =
    useAppSelector(categoriesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (errorCategories) return <Error error={errorCategories} />;

  const displayCategories = categories.map((item) => {
    return (
      <Card key={item.id}>
        <p>
          <Span>Name:</Span> {item.name}
        </p>
        <p>
          <Span>Market Cap:</Span> {formatCompactNumber(item.market_cap)}
        </p>
        <p>
          <Span>Market Cap Change 24h:</Span>
          {formatCompactNumber(item.market_cap_change_24h)}
        </p>
        <p>
          <Span>Volume 24h:</Span> {formatCompactNumber(item.volume_24h)}
        </p>
        <TopCoins>
          <Span>Top 3 Coins:</Span>
          {item.top_3_coins.map((item) => (
            <img key={item} src={item} />
          ))}
        </TopCoins>
      </Card>
    );
  });
  console.log("loadingCategories", loadingCategories);
  return (
    <CategoriesWrapper>
      <TitleContainer>
        <Title title="Categories" />
      </TitleContainer>
      {loadingCategories ? (
        <Loader />
      ) : (
        <CategoriesContent>{displayCategories}</CategoriesContent>
      )}
    </CategoriesWrapper>
  );
}
