import { RouteObject } from "react-router-dom";
import { MainLayout, Layout } from "../layouts/Layout";

import HomePage from "./../pages/home/homepage";
import BrandsPage from "./../pages/brands/brandspage";
import PharmaciesPage from "./../pages/pharmacies/pharmaciespage";
import PharmacyPage from "../pages/pharmacy/pharmacypage";
import LoginPage from "../pages/login/loginpage";

const MainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LoginPage /> },
    ],
  },
  {
    path: "/home",
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
  {
    path: "/pharmacy/:pharmacyid",
    element: <Layout />,
    children: [
      { index: true, element: <PharmacyPage /> },
    ],
  },
];

export default MainRoutes;
