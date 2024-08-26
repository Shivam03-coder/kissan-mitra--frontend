import { Typography } from "@material-tailwind/react";
import React from "react";
import { CloudIcon } from "../../../../../constants";
import { getTodaysDatewithoutYear } from "../../../../../utils";
import { useTranslation } from 'react-i18next';

const CurrentWeatherSection = ({ ToDaysWeatherData }) => {
  const { t } = useTranslation(); // Initialize the hook

  return (
    <section className="w-[97%] md:w-[80%] mx-auto rounded-2xl h-full p-4 my-4 flex justify-center items-center flex-col">
      <Typography
        className="w-[90%] flex justify-center bg-custom-light-yellow-to-light-green shadow-inner rounded-t-3xl text-black items-center font-Inter py-3"
        variant="h4"
      >
        {t('Weather.currentWeather.title')} 
      </Typography>
      {ToDaysWeatherData && (
        <section className="grid p-5 bg-custom-light-yellow-to-light-green border rounded-2xl shadow-5xl w-full grid-cols-3 gap-4">
          <div className="text-center shadow-dark-shadow bg-custom-light-green-to-white-soft p-2 rounded-xl flex-col flex-center">
            <Typography className="font-Inter uppercase" variant="h6">
              {ToDaysWeatherData.city}
            </Typography>
            <Typography
              className="font-Inter opacity-80 font-medium text-sm"
              variant="small"
            >
              {getTodaysDatewithoutYear()} 
            </Typography>
          </div>
          <div className="text-center shadow-dark-shadow bg-custom-light-green-to-white-soft p-2 rounded-xl flex-col flex-center">
            <Typography variant="h6">
              {ToDaysWeatherData.temperature} 
            </Typography>
            <Typography
              className="font-Inter opacity-80 font-medium text-sm"
              variant="small"
            >
              {ToDaysWeatherData.weather?.[0].main}
            </Typography>
          </div>
          <div className="text-center shadow-dark-shadow bg-custom-light-green-to-white-soft p-2 rounded-xl flex-col flex-center">
            <CloudIcon className="size-14 text-black" />
          </div>
        </section>
      )}
    </section>
  );
};

export default CurrentWeatherSection;
