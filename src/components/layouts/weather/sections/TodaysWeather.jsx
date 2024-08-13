import React from "react";
import AirconditionSection from "./todaysweather/AirconditionSection";
import CurrentWeatherSection from "./todaysweather/CurrentWeatherSection";
import TodayForecastSection from "./todaysweather/TodayForecastSection";

const TodaysWeather = () => {
  return (
    <section className="place-self-stretch w-full h-full flex flex-col">
      <CurrentWeatherSection className="flex-1" />
      <AirconditionSection className="flex-1" />
      <TodayForecastSection className="flex-1" />
    </section>
  );
};

export default TodaysWeather;
