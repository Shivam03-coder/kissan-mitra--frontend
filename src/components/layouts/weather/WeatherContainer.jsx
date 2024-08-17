import { useEffect } from "react";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { useGetweatherDataQuery } from "../../../redux/endpoints/userauthapi";
import HeaderSection from "./HeaderSection";
import TodaysWeather from "./sections/TodaysWeather";
import WeeklyWeather from "./sections/WeeklyWeather";
import Mainloader from "../../shared/apploaders/Mainloader"
import {
  clearWeatherData,
  setThreeHoursWeatherData,
  setToDaysWeatherData,
  setWeeklyWeatherData,
} from "../../../redux/states/weatherdataSlice";
import { useDispatch } from "react-redux";

const WeatherContainer = () => {
  const location = useGeolocation();
  const { latitude, longitude } = location;
  const dispatch = useDispatch();

  const { data, error, isSuccess } = useGetweatherDataQuery(
    { latitude, longitude },
    {
      skip: !latitude || !longitude,
    }
  );

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setToDaysWeatherData(data.CurrentWeatherData));
      dispatch(setWeeklyWeatherData(data.Next5DaysWeatherData));
      dispatch(setThreeHoursWeatherData(data.ThreeHoursWeatherData));
    } else if (error) {
      console.error("Error fetching weather data:", error);
      dispatch(clearWeatherData());
    }
  }, [location, isSuccess, data, error, dispatch]);

  if (!isSuccess && !error) {
    return <Mainloader />;
  }

  if (error) {
    return <div>Error loading weather data.</div>;
  }

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
