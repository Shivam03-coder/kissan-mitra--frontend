import { Typography } from "@material-tailwind/react";
import { TodaysForecastData } from "../../../../../data";
import { CloudIcon } from "../../../../../constants";
import { useMemo } from "react";

const TodayForecastSection = ({ ThreeHoursWeatherData }) => {
  const getTime = (date) => date.split(" ")[1].substring(0, 5);

  return (
    <section className="w-[97%] md:w-[80%] mx-auto rounded-2xl  h-full  p-4 my-4  flex justify-center  items-center flex-col">
      <Typography
        className="w-[90%] flex justify-center bg-green-100 shadow-inner rounded-t-3xl  text-black   items-center font-Inter py-3 "
        variant="h4"
      >
        AIR CONDITIONS
      </Typography>
      <section className="grid border border-green-900 shadow-glass  rounded-2xl p-5 w-full grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        {ThreeHoursWeatherData.map((weather) => {
          const Time = getTime(weather.date);
          return (
            <div className="flex-center flex-col p-2 size-[100px] rounded-2xl shadow-glass-card bg-yellow-500 ">
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
