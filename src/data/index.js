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
  RainyCloudIcon,
  GrainsIcon,
  CgTreesIcons,
  FertlizerIcon,
  CommunityIcons,
  EducationIcon,
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



export const FertilizerPageInfoData = (t) => [
  {
    id: 2,
    img: NitrogenImg,
    label: t('Appinfo.fertilizerInfo.nitrogen.label'),
    content: t('Appinfo.fertilizerInfo.nitrogen.content'),
  },
  {
    id: 3,
    img: RainingImg,
    label: t('Appinfo.fertilizerInfo.rainfall.label'),
    content: t('Appinfo.fertilizerInfo.rainfall.content'),
  },
  {
    id: 4,
    img: PhosphorousImg,
    label: t('Appinfo.fertilizerInfo.phosphorous.label'),
    content: t('Appinfo.fertilizerInfo.phosphorous.content'),
  },
  {
    id: 5,
    img: PotassiumImg,
    label: t('Appinfo.fertilizerInfo.potassium.label'),
    content: t('Appinfo.fertilizerInfo.potassium.content'),
  },
  {
    id: 1,
    img: PhImg,
    label: t('Appinfo.fertilizerInfo.phLevel.label'),
    content: t('Appinfo.fertilizerInfo.phLevel.content'),
  },
];


export const navListMenuItems = [
  {
    title: "Navbar.weather",
    description: "Navbar.weather_description",
    icon: RainyCloudIcon,
    path: "/weather/:location/:userid",
  },
  {
    title: "Navbar.crop_yield_prediction",
    description: "Navbar.crop_yield_prediction_description",
    icon: GrainsIcon,
    path: "/crop-yield-prediction/:userid",
  },
  {
    title: "Navbar.plant_disease_prediction",
    description: "Navbar.plant_disease_prediction_description",
    icon: Insectsicon,
    path: "/plants-disease-prediction/:id",
  },
  {
    title: "Navbar.market_price",
    description: "Navbar.market_price_description",
    icon: Graphicon,
    path: "/market-price/:id",
  },
  {
    title: "Navbar.crop_prediction",
    description: "Navbar.crop_prediction_description",
    icon: CgTreesIcons,
    path: "/crop-prediction/:id",
  },
  {
    title: "Navbar.fertilizer_prediction",
    description: "Navbar.fertilizer_prediction_description",
    icon: FertlizerIcon,
    path: "/fertilizer-prediction/:id",
  },
  {
    title: "Navbar.community",
    description: "Navbar.community_description",
    icon: CommunityIcons,
    path: "/kissan-mitra/comuunity/:id",
  },
  {
    title: "Navbar.education",
    description: "Navbar.education_description",
    icon: EducationIcon,
    path: "/kissan-mitra/education/:id",
  },
];

