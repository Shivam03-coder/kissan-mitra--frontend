import React from "react";
import WeeklyForecastSection from "./weeklyweather/WeeklyForecastSection";

const WeeklyWeather = ({WeeklyWeatherData}) => {
  return (
    <section className="place-self-stretch w-full h-full flex flex-col ">
      <WeeklyForecastSection WeeklyWeatherData={WeeklyWeatherData} />
    </section>
  );
};

export default WeeklyWeather;
