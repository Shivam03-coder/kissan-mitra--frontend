import WeatherheaderSection from "./WeatherheaderSection";
import TodaysWeather from "./sections/TodaysWeather";
import WeeklyWeather from "./sections/WeeklyWeather";

const WeatherContainer = () => {
  return (
    <div className="size-full">
      <WeatherheaderSection />
      <div className="grid  z-40  md:grid-cols-2 min-h-[90vh] w-full ">
        <TodaysWeather />
        <WeeklyWeather />
      </div>
    </div>
  );
};

export default WeatherContainer;
