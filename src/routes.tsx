import { RouteObject } from "react-router-dom";
import App from "./App.tsx";
import {
  Home,
  Detail,
  History,
  Coin,
  Categories,
  ErrorPage,
  NoMatch,
  MarketData,
} from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "coin/:id",
        element: <Coin />,
        children: [
          { index: true, element: <Detail /> },
          { path: "history", element: <History /> },
          { path: "market-data", element: <MarketData /> },
        ],
      },
      { path: "categories", element: <Categories /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes;

///coin/:id/details/bitcoin/history
