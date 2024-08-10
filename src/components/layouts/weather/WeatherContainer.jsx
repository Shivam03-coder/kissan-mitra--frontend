import WeeklyForecast from "./sections/WeeklyForecast";
import CurrentWeatherSection from "./sections/CurrentWeatherSection";
import WeatherheaderSection from "./sections/WeatherheaderSection";

const WeatherContainer = () => {
  return (
    <div className="size-full">
      <WeatherheaderSection />
      <div className="grid md:grid-cols-2 h-full w-full place-items-center">
        <CurrentWeatherSection />
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default WeatherContainer;
