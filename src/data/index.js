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
  Framericon,
  Insectsicon,
  Graphicon,
  Cloudicon,
  WindIcon,
  HumidityIcon,
  PhImg,
  NitrogenImg,
  RainingImg,
  PhosphorousImg,
  PotassiumImg,
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

export const AppinfoData = [
  {
    id: 1,
    icons: Cloudicon,
    title: "Weather Updates",
    text: "Access real-time weather forecasts to make informed decisions for your crops and farming activities.",
  },
  {
    id: 2,
    icons: Insectsicon,
    title: "Check Plant Disease",
    text: "Utilize our plant disease detection feature to identify potential issues early and take corrective action.",
  },
  {
    id: 3,
    icons: Framericon,
    title: "Calculate Yield",
    text: "Estimate your crop yield with our specialized tools, ensuring better planning and resource allocation.",
  },
  {
    id: 4,
    icons: Graphicon,
    title: "Market Trends",
    text: "Analyze market trends and make informed decisions on selling your produce for the best price.",
  },
];

export const Footerlinks = [
  {
    title: "Product",
    items: ["Overview", "Features"],
  },
  {
    title: "Company",
    items: ["About us", "Careers"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter"],
  },
];

export const AircondtionsData = [
  {
    id: 1,
    icon: WindIcon,
    label: "Wind",
    value: "123",
  },
  {
    id: 2,
    icon: Cloudicon,
    label: "Cloud",
    value: "123",
  },
  {
    id: 3,
    icon: HumidityIcon,
    label: "Humidity",
    value: "123",
  },
];

export const TodaysForecastData = [
  {
    id: 1,
    time: "9:00",
  },
  {
    id: 2,
    time: "9:00",
  },
  {
    id: 3,
    time: "9:00",
  },
  {
    id: 4,
    time: "9:00",
  },
  {
    id: 5,
    time: "9:00",
  },
];

export const FertilizerPageInfoData = [
  {
    id: 2,
    img: NitrogenImg,
    label: "Nitrogen",
    content:
      "Nitrogen is essential for plant growth as it is a major component of chlorophyll and amino acids.",
  },
  {
    id: 3,
    img: RainingImg,
    label: "Rainfall",
    content:
      "Rainfall provides the water necessary for plant growth, affecting soil moisture and nutrient availability.",
  },
  {
    id: 4,
    img: PhosphorousImg,
    label: "Phosphorous",
    content:
      "Phosphorous supports the development of roots, flowers, seeds, and fruits in plants.",
  },
  {
    id: 5,
    img: PotassiumImg,
    label: "Potassium",
    content:
      "Potassium helps with the overall health of plants, improving disease resistance and water efficiency.",
  },
  {
    id: 1,
    img: PhImg,
    label: "pH Level",
    content:
      "pH measures the acidity or alkalinity of soil, which is important for nutrient availability and plant growth.",
  },
];

export const navListMenuItems = [
  {
    title: "Weather",
    description: "Find the perfect solution for your needs.",
    icon: Insectsicon,
    path: "/weather/:location/:userid",
  },
  {
    title: "Crop Yield Prediction",
    description: "Meet and learn about our dedication",
    icon: Insectsicon,
    path: "/crop-yield-prediction/:userid",
  },
  {
    title: "Plant Disease Prediction",
    description: "Find the perfect solution for your needs.",
    icon: Insectsicon,
    path: "/plants-disease-prediction/:id",
  },
  {
    title: "Market Price",
    description: "Learn how we can help you achieve your goals.",
    icon: Insectsicon,
    path: "/market-price/:id",
  },
  {
    title: "Crop Prediction",
    description: "Reach out to us for assistance or inquiries",
    icon: Insectsicon,
    path: "/crop-prediction/:id",
  },
  {
    title: "Fertilizer Prediction",
    description: "Find the perfect solution for your needs.",
    icon: Insectsicon,
    path: "/fertilizer-prediction/:id",
  },
  // {
  //   title: "News",
  //   description: "Read insightful articles, tips, and expert opinions.",
  //   icon: Insectsicon,
  //   path: "/news",
  // },
  // {
  //   title: "Blog",
  //   description: "Find the perfect solution for your needs.",
  //   icon: Insectsicon,
  //   path: "/blog",
  // },
];
