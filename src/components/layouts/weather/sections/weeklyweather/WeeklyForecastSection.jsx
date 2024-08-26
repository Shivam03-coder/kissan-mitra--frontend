import { Typography } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next'; // Import the hook
import DaysForecastSection from "./DaysForecastSection";

const WeeklyForecastSection = () => {
  const { t } = useTranslation(); // Initialize the hook

  return (
    <section className="w-[96%] flex-1 md:w-[80%] mx-auto rounded-2xl shadow-glass p-4 my-4 flex flex-col items-center">
      <Typography
        className="w-[90%] flex justify-center mb-0 bg-custom-light-yellow-to-light-green shadow-inner rounded-3xl text-black items-center font-Inter py-3"
        variant="h4"
      >
        {t('Weather.weeklyForecast.title')} 
      </Typography>
      <section className="my-3 grid h-full w-full grid-rows-5 gap-5">
        <DaysForecastSection bgcolor="900" />
      </section>
    </section>
  );
};

export default WeeklyForecastSection;
