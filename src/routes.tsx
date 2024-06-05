import { RouteObject } from "react-router-dom";
import App from "./App.tsx";
import { Coins, Detail } from "./pages/index.ts";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Coins /> },
      { path: "coin/:id", element: <Detail /> },
    ],
    // errorElement: <ErrorPage />,
    // children: [
    //   { index: true, element: <HomePage /> },
    //   { path: "playground", element: <PlaygroundPage /> },
    //   { path: "products", element: <ProductListPage /> },
    //   { path: "products/:id", element: <ProductDetailPage /> },
    //   {
    //     path: "admin",
    //     element: <AdminLayout />,
    //     children: [
    //       { index: true, element: <AdminHomePage /> },
    //       { path: "products", element: <AdminProductListPage /> },
    //       { path: "products/new", element: <NewProductPage /> },
    //       { path: "products/:id/edit", element: <EditProductPage /> },
    //     ],
    //   },
    // ],
  },
];

export default routes;
