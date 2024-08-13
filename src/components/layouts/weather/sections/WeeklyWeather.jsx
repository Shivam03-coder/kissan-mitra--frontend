import React from "react";
import WeeklyForecastSection from "./weeklyweather/WeeklyForecastSection";

const WeeklyWeather = () => {
  return (
    <section className="place-self-stretch w-full h-full flex flex-col ">
      <WeeklyForecastSection />
    </section>
  );
};

export default WeeklyWeather;
