import { Typography } from "@material-tailwind/react";
import DaysForecastSection from "./DaysForecastSection";

const WeeklyForecastSection = () => {
  return (
    <section className="w-[96%] flex-1 md:w-[80%] mx-auto rounded-2xl shadow-glass  p-4 my-4 flex  flex-col items-center">
    <Typography
        className="w-[90%] flex justify-center mb-0 bg-green-100 shadow-inner rounded-3xl  text-black   items-center font-Inter py-3 "
        variant="h4"
      >
        WEEKLY FORECAST
      </Typography>
      <section className="my-3 grid h-full w-full grid-rows-5 gap-5">
        <DaysForecastSection bgcolor="900" />
      </section>
    </section>
  );
};

export default WeeklyForecastSection;
