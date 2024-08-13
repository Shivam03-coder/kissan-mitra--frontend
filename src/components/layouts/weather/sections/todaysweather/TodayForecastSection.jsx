import { Typography } from "@material-tailwind/react";
import { TodaysForecastData } from "../../../../../data";
import { CloudIcon } from "../../../../../constants";

const TodayForecastSection = () => {
  return (
    <section className="w-[96%] md:w-[80%] mx-auto rounded-2xl shadow-glass bg-pastelGreen-500 p-4 my-4 flex justify-center items-center flex-col">
      <Typography
        className="flex flex-1 items-center font-Inter p-1"
        as={"div"}
        variant="h4"
      >
        TODAYS'S FORECAST
      </Typography>
      <section className="grid p-2 w-full grid-cols-3 gap-4 place-items-center">
        <div className="flex-center flex-col p-2 size-[100px] rounded-2xl bg-green-500 ">
          <Typography variant="h6" className="opacity-70">
            06:00
          </Typography>
          <CloudIcon className="size-12 text-black" />
          <Typography className="text-lg font-Poppins font-medium">
            7 °C
          </Typography>
        </div>
        <div className="flex-center flex-col p-2  size-[100px] rounded-2xl bg-green-400 ">
          <Typography variant="h6" className="opacity-70">
            06:00
          </Typography>
          <CloudIcon className="size-12 text-black" />
          <Typography className="text-lg font-Poppins font-medium">
            7 °C
          </Typography>
        </div>
        <div className="flex-center flex-col p-2  size-[100px] rounded-2xl bg-green-300 ">
          <Typography variant="h6" className="opacity-70">
            06:00
          </Typography>
          <CloudIcon className="size-12 text-black" />
          <Typography className="text-lg font-Poppins font-medium">
            7 °C
          </Typography>
        </div>
      </section>
    </section>
  );
};

export default TodayForecastSection;
