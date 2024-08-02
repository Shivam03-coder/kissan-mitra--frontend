import { lazy } from "react";

const Homepage = lazy(() => import("../components/pages/Homepage"));
const Authpage = lazy(() => import("../components/pages/Authpage"));
const Weatherpage = lazy(() => import("../components/pages/Weatherpage"));
const Yieldpage = lazy(() => import("../components/pages/Yieldproductionpage"));
const Pestspage = lazy(() => import("../components/pages/Phytopathologiespge"));
const Profilepage = lazy(() => import("../components/pages/Userprofilepage"));
const Errorpage = lazy(() => import("../components/pages/Errorpage"));
const Notfoundpage = lazy(() => import("../components/pages/Notfoundpage"));
const Marketpage = lazy(() => import("../components/pages/Marketpricepage"));
const Fertilizerpage = lazy(() => import("../components/pages/Fertilizerpage"));

export const publicRoutes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/auth",
    element: <Authpage />,
  },
  {
    path: "/error",
    element: <Errorpage />,
  },
  {
    path: "*",
    element: <Notfoundpage />,
  },
];

export const privateRoutes = [
  {
    path: "/weather/:location/:userid",
    element: Weatherpage,
  },
  {
    path: "/crop-yield/:userid",
    element: Yieldpage,
  },
  {
    path: "/plants-disease/:id",
    element: Pestspage,
  },
  {
    path: "/market-price/:id",
    element: Marketpage,
  },
  {
    path: "/crops-fertilizer/:id",
    element: Fertilizerpage,
  },
  {
    path: "/user-profile/:id",
    element: Profilepage,
  },
];
