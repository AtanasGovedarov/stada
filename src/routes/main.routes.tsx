import { RouteObject } from "react-router-dom";
import { MainLayout, Layout } from "../layouts/Layout";

import HomePage from "./../pages/home/homepage";
import BrandsPage from "./../pages/brands/brandspage";
import PharmaciesPage from "./../pages/pharmacies/pharmaciespage";

const MainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    path: "/brands",
    element: <Layout />,
    children: [
      { index: true, element: <BrandsPage /> },
    ],
  },
  {
    path: "/pharmacies",
    element: <Layout />,
    children: [
      { index: true, element: <PharmaciesPage /> },
    ],
  },
];

export default MainRoutes;
