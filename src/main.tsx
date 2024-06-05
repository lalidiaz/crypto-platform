import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes.tsx";
import { store } from "../src/store/store.ts";
import { Provider } from "react-redux";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
