import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  CloudIcon,
  HumidityIcon,
  RainIcon,
  TempIcon,
  WindIcon,
} from "../../../../../constants";
import { useSelector } from "react-redux";

const DaysForecastSection = () => {
  const { WeeklyWeatherData } = useSelector((state) => state.weather);

  return (
    <>
      {WeeklyWeatherData?.map((weather, i) => (
        <section
          key={weather._id}
          className="flex justify-evenly items-center bg-custom-light-yellow-to-light-green shadow-glass-card  rounded-xl py-6 md:py-1"
        >
          <div className="flex-center flex-col">
            <Typography
              className="opacity-70 font-Rubik uppercase text-sm font-semibold"
              variant="small"
            >
              {weather.day}
            </Typography>
            <span className="flex-center gap-2">
              <CloudIcon className="size-7 text-black" />
              <Typography
                className="font-Inter opacity-80 font-medium text-sm"
                variant="small"
              >
                {weather.weather_description}
              </Typography>
            </span>
          </div>
          <div className="flex-center flex-col">
            <span className="flex-center gap-1">
              <TempIcon className="size-7 text-black" />
              <Typography
                className="font-Inter opacity-80 font-medium text-sm"
                variant="small"
              >
                {weather.temperature} °C
              </Typography>
            </span>
            <span className="flex-center gap-3">
              <RainIcon className="size-6 text-black opacity-75" />
              <Typography
                className="font-Inter opacity-80 font-medium text-sm"
                variant="small"
              >
                {weather.rain}
              </Typography>
            </span>
          </div>
          <div className="flex-center flex-col">
            <span className="flex-center gap-2">
              <WindIcon className="size-7 text-black" />
              <Typography
                className="font-Inter opacity-80 font-medium text-sm"
                variant="small"
              >
                {weather.wind_speed} m/s
              </Typography>
            </span>
            <span className="flex-center gap-2">
              <HumidityIcon className="size-7 text-black opacity-75" />
              <Typography
                className="font-Inter opacity-80 font-medium text-sm"
                variant="small"
              >
                {weather.humidity}%
              </Typography>
            </span>
          </div>
        </section>
      ))}
    </>
  );
};

export default DaysForecastSection;
