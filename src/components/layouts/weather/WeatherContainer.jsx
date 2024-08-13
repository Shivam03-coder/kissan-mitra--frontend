import { useGeolocation } from "../../../hooks/useGeolocation";
import HeaderSection from "./HeaderSection";
import TodaysWeather from "./sections/TodaysWeather";
import WeeklyWeather from "./sections/WeeklyWeather";

const WeatherContainer = () => {

  const loaction = useGeolocation()
  console.log("🚀 ~ WeatherContainer ~ loaction:", loaction)
  return (
    <div className="size-full">
      <HeaderSection />
      <div className="grid  z-40 py-4  md:grid-cols-2 min-h-[90vh] w-full ">
        <TodaysWeather />
        <WeeklyWeather />
      </div>
    </div>
  );
};

export default WeatherContainer;
