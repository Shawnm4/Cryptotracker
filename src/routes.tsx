import { RouteObject } from "react-router";
import { ERoutes } from "./Enums/ERoutes";
import Home from "./Screens/Home";
import Layout from "./Screens/Layout";
import CoinDashboard from "./Screens/CoinDashboard";

export const routes: RouteObject[] = [
  {
    path: ERoutes.HOME,
    element: <Layout />,
    children: [
      { path: ERoutes.HOME, element: <Home /> },
      { path: ERoutes.COINDASHBOARD, element: <CoinDashboard /> },
    ],
  },
];
