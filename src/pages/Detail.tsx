import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Title, Tag, RouteLink, StatsCard, Loader, Error } from "../components";
import {
  formatDate,
  formatCurrency,
  createMarkup,
  formatCompactNumber,
} from "../utils/helpers";
import { fetchCoinDetails, coinSelector } from "../store/slices/coin";
import { device } from "../styles/breakpoints";

const PorfolioUsers = styled.div`
  color: var(--green);
  font-size: 1rem;
`;
const LastUpdated = styled.p`
  font-size: 0.8rem;
  font-style: italic;
`;

const DetailsContainer = styled.div`
  overflow-y: scroll;
  max-height: 90vh;
  padding: 0rem 0rem 4rem 0rem;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem 0rem 0rem;
  font-size: 2rem;
  flex-direction: row;
  text-align: left;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    text-aling: center;
  }
`;

const Img = styled.img`
  width: 150px;
  @media ${device.laptop} {
    width: 100px;
  }
`;

const ResourcesContainer = styled.div`
  padding: 1rem 0rem 3rem 0rem;
`;

const NameContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;

  p {
    margin: 0rem;
    padding: 0.5rem 0rem;
    text-align: left;
  }

  @media ${device.laptop} {
    p {
      text-align: center;
    }
  }
`;
const Symbol = styled.span`
  color: var(--green);
  text-align: left;

  @media ${device.laptop} {
    text-align: center;
  }
`;

const CurrentPrice = styled.p``;

const Name = styled.p``;

const Localization = styled.p``;

const Description = styled.div`
  line-height: 1.8rem;
`;

const MarketCapRank = styled.p`
  font-size: 1rem;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  flex-direction: row;

  @media ${device.laptop} {
    padding-bottom: 1rem;
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  text-align: left;
  @media ${device.laptop} {
    text-align: center;
  }
`;

const DescriptionContainer = styled.div``;

const StatsCardContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const NameSymbol = styled.div`
  display: flex;

  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  padding: 0rem 2rem;
`;

const CategoriesContainer = styled.div`
  padding: 0rem 0rem 2rem 0rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 4rem 0rem 2rem 0rem;
`;

export default function Detail() {
  const { id } = useParams();
  const { coin, loading, error, currency } = useAppSelector(coinSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoinDetails({ id }));
  }, [id]);

  const {
    name,
    symbol,
    image,
    categories,
    description,
    watchlist_portfolio_users,
    last_updated,
    links: {
      homepage,
      whitepaper,
      repos_url: { github, bitbucket },
    },
    developer_data: { forks, stars, subscribers },
    community_data: {
      twitter_followers,
      reddit_average_posts_48h,
      facebook_likes,
    },
    market_cap_rank,
    market_data: {
      currencies: { current_price },
    },
  } = coin;

  const displayTags = categories.map((category) => <Tag text={category} />);

  const developerData = [
    { name: "Forks", value: forks },
    { name: "Stars", value: stars },
    { name: "Subscribers", value: subscribers },
  ];

  const communityData = [
    { name: "X followers", value: twitter_followers },
    { name: "Reddit Average Posts (48h)", value: reddit_average_posts_48h },
    { name: "Facebook Likes", value: facebook_likes },
  ];

  if (error) {
    return <Error error={error} />;
  }

  return (
    <DetailsContainer>
      {loading ? (
        <Loader />
      ) : (
        <Content>
          <TopContainer>
            <RightContent>
              <Img src={image.large} />
              <NameContainer>
                <NameSymbol>
                  <Name>{name}</Name>
                  <Symbol>{symbol.toUpperCase()}</Symbol>
                </NameSymbol>
                <LastUpdated>
                  {formatDate(last_updated)} last updated
                </LastUpdated>
              </NameContainer>
            </RightContent>
            <LeftContainer>
              <CurrentPrice>
                {current_price &&
                  formatCurrency(currency, current_price[currency.currency])}
              </CurrentPrice>
              <PorfolioUsers>
                {formatCompactNumber(watchlist_portfolio_users)} Portfolio users
              </PorfolioUsers>
              <MarketCapRank>Rank number {market_cap_rank}</MarketCapRank>
            </LeftContainer>
          </TopContainer>

          <LinksContainer>
            <RouteLink to={`/coin/${coin.id}/history`} label="History" />
            <RouteLink
              to={`/coin/${coin.id}/market-data`}
              label="Market Data"
            />
          </LinksContainer>

          <StatsCardContainer>
            <StatsCard data={developerData} title="💻 Developer Data" />{" "}
            <StatsCard data={communityData} title="🚀 Community Data" />
          </StatsCardContainer>

          <ResourcesContainer>
            <Title title="Resources" />
            {homepage ? <Tag text="website" href={homepage} /> : null}
            {whitepaper ? <Tag text="whitepaper" href={whitepaper} /> : null}
            {github ? <Tag text="github" href={github} /> : null}
            {bitbucket ? <Tag text="bitbucket" href={bitbucket} /> : null}
          </ResourcesContainer>

          <CategoriesContainer>
            <Title title="Categories" />
            <Tags>{displayTags}</Tags>
          </CategoriesContainer>

          <DescriptionContainer>
            <Title title={`About ${name}`} />
            {description && description.en && (
              <Description
                dangerouslySetInnerHTML={createMarkup(description.en)}
              />
            )}
          </DescriptionContainer>
        </Content>
      )}
    </DetailsContainer>
  );
}
