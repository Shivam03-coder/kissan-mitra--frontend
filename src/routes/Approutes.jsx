import { lazy } from "react";

const Homepage = lazy(() => import("../components/pages/Homepage"));
const UserAuthpage = lazy(() => import("../components/pages/UserAuthpage"));
const Weatherpage = lazy(() => import("../components/pages/Weatherpage"));
const YieldPredictionpage = lazy(() =>
  import("../components/pages/YieldPredictionpage")
);
const DiseasePredictionpage = lazy(() =>
  import("../components/pages/DiseasePredictionpage")
);
const Profilepage = lazy(() => import("../components/pages/Userprofilepage"));
const Errorpage = lazy(() => import("../components/pages/Errorpage"));
const Notfoundpage = lazy(() => import("../components/pages/Notfoundpage"));
const Marketpage = lazy(() => import("../components/pages/Marketpricepage"));
const CropPredictionpage = lazy(() =>
  import("../components/pages/CropPredictionpage")
);
const FertilizerPredictionpage = lazy(() =>
  import("../components/pages/FertilizerPredictionpage")
);
const Communitypage = lazy(() => import("../components/pages/Communitypage"));
const Educationalpage = lazy(() => import("../components/pages/Educationalpage"));
const ContactUspage = lazy(() => import("../components/pages/ContactUspage"));

export const publicRoutes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/auth",
    element: <UserAuthpage />,
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
    path: "/crop-yield-prediction/:userid",
    element: YieldPredictionpage,
  },
  {
    path: "/plants-disease-prediction/:id",
    element: DiseasePredictionpage,
  },
  {
    path: "/market-price/:id",
    element: Marketpage,
  },
  {
    path: "/crop-prediction/:id",
    element: CropPredictionpage,
  },
  {
    path: "/fertilizer-prediction/:id",
    element: FertilizerPredictionpage,
  },
  {
    path: "/kissan-mitra/comuunity/:id",
    element: Communitypage,
  },
  {
    path: "/kissan-mitra/education/:id",
    element: Educationalpage,
  },
  {
    path: "/kissan-mitra/contact-us/:id",
    element: ContactUspage,
  },
  {
    path: "/user-profile/:id",
    element: Profilepage,
  },
];
