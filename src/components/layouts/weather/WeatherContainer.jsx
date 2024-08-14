import { useEffect } from "react";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { useGetweatherDataQuery } from "../../../redux/endpoints/userauthapi";
import HeaderSection from "./HeaderSection";
import TodaysWeather from "./sections/TodaysWeather";
import WeeklyWeather from "./sections/WeeklyWeather";
import {
  clearWeatherData,
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
    if (location && isSuccess && data) {
      dispatch(setToDaysWeatherData(data.CurrentWeatherData));
      dispatch(setWeeklyWeatherData(data.Next5DaysWeatherData));
    }

    if (error) {
      dispatch(clearWeatherData());
    }
  }, [location, dispatch]);

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
