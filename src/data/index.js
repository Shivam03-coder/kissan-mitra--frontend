import {
  yieldimage,
  weatherimg,
  marketimg,
  fertilizerimg,
  plantdiseaseimg,
  ecoimage,
  freshimage,
  safeimage,
  easyimage,
  TfiAlarmClock,
  TfiDashboard,
  TfiServer,
  GoGraph,
} from "../constants";

export const ServicecardData = [
  {
    id: 1,
    img: weatherimg,
    label: "Weather Updates",
    para: "Get accurate and up-to-date weather specifically for your location.",
  },
  {
    id: 2,
    img: marketimg,
    label: "Market Trends",
    para: "Optimize your crop yield with our expert recommendations.",
  },
  {
    id: 3,
    img: plantdiseaseimg,
    label: "Check Plant Disease",
    para: "Identify and address plant diseases with ease.",
  },
  {
    id: 4,
    img: fertilizerimg,
    label: "Find Best Fertilizer",
    para: "Stay informed about the latest market trends and prices.",
  },
  {
    id: 5,
    img: yieldimage,
    label: "Calculate Yield",
    para: "Receive recommendations on the best fertilizers for your crops.",
  },
];

export const PropcardsData = [
  {
    id: 1,
    img: ecoimage,
    label: "Eco",
  },
  {
    id: 2,
    img: freshimage,
    label: "Fresh",
  },
  {
    id: 3,
    img: safeimage,
    label: "Safe",
  },
  {
    id: 4,
    img: easyimage,
    label: "Easy",
  },
];

import { CiCloudDrizzle } from "react-icons/ci";
import { GiInsectJaws } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";

export const AppinfoData = [
  {
    id: 1,
    icons: CiCloudDrizzle,
    title: "Weather Updates",
    text: "Access real-time weather forecasts to make informed decisions for your crops and farming activities.",
  },
  {
    id: 2,
    icons: GiInsectJaws,
    title: "Check Plant Disease",
    text: "Utilize our plant disease detection feature to identify potential issues early and take corrective action.",
  },
  {
    id: 3,
    icons: GiFarmer,
    title: "Calculate Yield",
    text: "Estimate your crop yield with our specialized tools, ensuring better planning and resource allocation.",
  },
  {
    id: 4,
    icons: GoGraph,
    title: "Market Trends",
    text: "Analyze market trends and make informed decisions on selling your produce for the best price.",
  },
];