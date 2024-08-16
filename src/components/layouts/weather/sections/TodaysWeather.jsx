import React from "react";
import AirconditionSection from "./todaysweather/AirconditionSection";
import CurrentWeatherSection from "./todaysweather/CurrentWeatherSection";
import TodayForecastSection from "./todaysweather/TodayForecastSection";
import { useSelector } from "react-redux";

const TodaysWeather = () => {
  const { ToDaysWeatherData } = useSelector((state) => state.weather);
  return (
    <section className="place-self-stretch w-full h-full flex flex-col">
      {ToDaysWeatherData && (
        <>
          <CurrentWeatherSection
            ToDaysWeatherData={ToDaysWeatherData}
            className="flex-1"
          />
          <AirconditionSection
            ToDaysWeatherData={ToDaysWeatherData}
            className="flex-1"
          />
          <TodayForecastSection
            ToDaysWeatherData={ToDaysWeatherData}
            className="flex-1"
          />
        </>
      )}
    </section>
  );
};

export default TodaysWeather;
