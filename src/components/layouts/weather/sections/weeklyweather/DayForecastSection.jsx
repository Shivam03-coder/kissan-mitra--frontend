import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  CloudIcon,
  HumidityIcon,
  TempIcon,
  WindIcon,
} from "../../../../../constants";

const DayForecastSection = () => {
  return (
      <section className="flex justify-evenly items-center bg-green-500 rounded-xl py-6 md:py-1">
      <div className="flex-center flex-col">
        <Typography
          className="opacity-70 font-Rubik text-sm font-semibold"
          variant="small"
        >
          TUESADY
        </Typography>
        <span className="flex-center gap-2">
          <CloudIcon className="size-7 text-black" />
          <Typography
            className="font-Inter opacity-80 font-medium text-sm"
            variant="small"
          >
            Overcast cloud
          </Typography>
        </span>
      </div>
      <div className="flex-center flex-col">
        <span className="flex-center gap-2">
          <TempIcon className="size-7 text-black" />
          <Typography
            className="font-Inter opacity-80 font-medium text-sm"
            variant="small"
          >
            7 °C
          </Typography>
        </span>
        <span className="flex-center gap-2">
          <CloudIcon className="size-7 text-black" />
          <Typography
            className="font-Inter opacity-80 font-medium text-sm"
            variant="small"
          >
            61%
          </Typography>
        </span>
      </div>
      <div className="flex-center flex-col">
        <span className="flex-center gap-2">
          <WindIcon className="size-7 text-black" />
          <Typography
            className="font-Inter opacity-80 font-medium text-sm"
            variant="small"
          >
            2.6 m/s
          </Typography>
        </span>
        <span className="flex-center gap-2">
          <HumidityIcon className="size-7 text-black" />
          <Typography
            className="font-Inter opacity-80 font-medium text-sm"
            variant="small"
          >
            61%
          </Typography>
        </span>
      </div>
    </section>
  );
};

export default DayForecastSection;
