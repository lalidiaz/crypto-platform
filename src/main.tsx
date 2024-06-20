import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "../src/styles/globalStyle.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes.tsx";
import { store } from "../src/store/store.ts";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <ChakraProvider>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
