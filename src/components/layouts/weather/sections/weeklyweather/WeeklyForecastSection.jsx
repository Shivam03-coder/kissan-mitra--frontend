import { Typography } from "@material-tailwind/react";
import DayForecastSection from "./DayForecastSection";

const WeeklyForecastSection = () => {
  return (
    <section className="w-[96%] flex-1 md:w-[80%] mx-auto rounded-2xl shadow-glass bg-pastelGreen-500 p-4 my-4 flex  flex-col items-center">
      <Typography
        className=" text-center font-Inter p-1"
        as={"div"}
        variant="h4"
      >
        TODAYS'S FORECAST
      </Typography>
      <section className="my-3 grid h-full w-full grid-rows-6 gap-3">
        <DayForecastSection bgcolor="900" />
        <DayForecastSection bgcolor="800"/>
        <DayForecastSection bgcolor="700"/>
        <DayForecastSection bgcolor="500"/>
        <DayForecastSection bgcolor="400"/>
        <DayForecastSection bgcolor="300"/>
      </section>
    </section>
  );
};

export default WeeklyForecastSection;
