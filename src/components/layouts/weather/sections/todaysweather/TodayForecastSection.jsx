import { Typography } from "@material-tailwind/react";
import { CloudIcon } from "../../../../../constants";
import { useTranslation } from 'react-i18next';

const TodayForecastSection = ({ ThreeHoursWeatherData }) => {
  const { t } = useTranslation(); // Initialize the hook

  const getTime = (date) => date.split(" ")[1].substring(0, 5);

  return (
    <section className="w-[97%] md:w-[80%] mx-auto rounded-2xl h-full p-4 my-4 flex justify-center items-center flex-col">
      <Typography
        className="w-[90%] flex justify-center bg-custom-light-yellow-to-light-green shadow-inner rounded-t-3xl text-black items-center font-Inter py-3"
        variant="h4"
      >
        {t('Weather.todayForecast.title')}
      </Typography>
      <section className="grid border bg-custom-light-yellow-to-light-green shadow-glass rounded-2xl p-5 w-full grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        {ThreeHoursWeatherData.map((weather) => {
          const Time = getTime(weather.date);
          return (
            <div className="flex-center flex-col p-2 size-[100px] rounded-2xl shadow-glass-card bg-custom-light-yellow-to-light-green">
              <Typography variant="h6" className="opacity-70">
                {Time}
              </Typography>
              <CloudIcon className="size-12 text-black" />
              <Typography className="text-lg font-Poppins font-medium">
                {weather.temperature} °C
              </Typography>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TodayForecastSection;
