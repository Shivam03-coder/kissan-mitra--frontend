import { useGeolocation } from "../../../hooks/useGeolocation";
import { useGetweatherDataQuery } from "../../../redux/endpoints/userauthapi";
import HeaderSection from "./HeaderSection";
import TodaysWeather from "./sections/TodaysWeather";
import WeeklyWeather from "./sections/WeeklyWeather";

const WeatherContainer = () => {
  const location = useGeolocation();
  console.log("🚀 ~ WeatherContainer ~ location:", location);

  const { latitude, longitude } = location;
  const { data, error, isLoading } = useGetweatherDataQuery(
    { latitude, longitude },
    {
      skip: !latitude || !longitude,
    }
  );

  console.log("🚀 ~ WeatherContainer ~ data:", data);
  return (
    <div className="size-full">
      <HeaderSection />
      <div className="grid z-40 py-4 md:grid-cols-2 min-h-[90vh] w-full">
        <TodaysWeather />
        <WeeklyWeather />
      </div>
    </div>
  );
};

export default WeatherContainer;
