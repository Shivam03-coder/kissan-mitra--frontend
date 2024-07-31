import { lazy } from "react";

const Homepage = lazy(() => import("../components/pages/Homepage"));
const Authpage = lazy(() => import("../components/pages/Authpage"));
const Weatherpage = lazy(() => import("../components/pages/Weatherpage"));
const Yeildpage = lazy(() => import("../components/pages/Yeildproductionpage"));
const Pestspage = lazy(() => import("../components/pages/Phytopathologiespge"));
const Profilepage = lazy(() => import("../components/pages/Userprofilepage"));
const Errorpage = lazy(() => import("../components/pages/Errorpage"));
const Notfoundpage = lazy(() => import("../components/pages/Notfoundpage"));
const Marketpage = lazy(() => import("../components/pages/Marketpricepage"));

export const publicRoutes = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "auth",
        element: <Authpage />,
      },
    ],
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
    path: "/crop-yeild/:userid",
    element: Yeildpage,
  },
  {
    path: "/palnt-disease/:id",
    element: Pestspage,
  },
  {
    path: "/market-price/:id",
    element: Marketpage,
  },
  {
    path: "/user-profile/:id",
    element: Profilepage,
  },
];
