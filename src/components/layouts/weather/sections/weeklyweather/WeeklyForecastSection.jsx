import { Typography } from "@material-tailwind/react";
import DaysForecastSection from "./DaysForecastSection";

const WeeklyForecastSection = () => {
  return (
    <section className="w-[96%] flex-1 md:w-[80%] mx-auto rounded-2xl shadow-glass bg-pastelGreen-500 p-4 my-4 flex  flex-col items-center">
      <Typography
        className=" text-center font-Inter p-1"
        as={"div"}
        variant="h4"
      >
        WEEKLY FORECAST
      </Typography>
      <section className="my-3 grid h-full w-full grid-rows-5 gap-3">
        <DaysForecastSection bgcolor="900" />
      </section>
    </section>
  );
};

export default WeeklyForecastSection;
