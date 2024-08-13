import { Typography } from "@material-tailwind/react";
import React from "react";
import { CloudIcon } from "../../../../../constants";

const CurrentWeatherSection = () => {
  return (
    <section className="w-[96%] md:w-[80%] mx-auto rounded-2xl shadow-glass bg-pastelGreen-500 p-4 my-4 flex justify-center items-center flex-col">
      <Typography
        className="flex flex-1 items-center font-Inter p-1"
        as={"div"}
        variant="h4"
      >
        CURRENT WEATHER
      </Typography>
      <section className="grid p-7 w-full grid-cols-3 gap-4">
        <div className="text-center bg-green-500 p-2 rounded-xl  flex-col flex-center">
          <Typography variant="h6">KOLKATA INDIA</Typography>
          <Typography
            className="font-medium opacity-80 text-center"
            variant="paragraph"
          >
            Today 13 Feb
          </Typography>
        </div>
        <div className="text-center bg-green-400 p-2 rounded-xl  flex-col flex-center">
          <Typography variant="h6">7 °C</Typography>
          <Typography
            className="font-medium opacity-80 text-center"
            variant="paragraph"
          >
            Today 13 Feb
          </Typography>
        </div>
        <div className="text-center bg-green-300 p-2 rounded-xl  flex-col flex-center">
          <CloudIcon className="size-14 text-black" />
        </div>
      </section>
    </section>
  );
};

export default CurrentWeatherSection;
