import React from "react";
import WeatherContainer from "../layouts/weather/WeatherContainer";
import SprinkelSvg from "../shared/svgs/SprinkelSvg";

const Weatherpage = () => {
  return (
    <div className="min-h-screen relative">
      <SprinkelSvg />
      <WeatherContainer />
    </div>
  );
};

export default Weatherpage;
