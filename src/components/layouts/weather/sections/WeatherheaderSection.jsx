import { Typography } from "@material-tailwind/react";
import React from "react";
import { getTodaysDate } from "../../../../utils";
import { GithubIcon } from "../../../../constants";

const WeatherheaderSection = () => {
  const ToDaysDay = getTodaysDate();
  return (
    <section className="flex px-10 py-2 md:px-0 justify-between md:justify-around items-center min-h-[10vh] w-full md:w-[90%] bg-transparent backdrop-blur-sm mx-auto">
      <div className=" max-w-[50%] md:max-w-[15%] break-words md:text-center">
        <Typography variant="h5">
          <span className="text-3xl text-pastelGreen-600">THE</span>{" "}
          <span className="text-2xl text-portgore-600">W</span>EATHER FORE
          <span className="text-portgore-500">CASTING</span>
        </Typography>
      </div>
      <Typography
        className="text-portgore-800 font-Varela hidden md:block"
        variant="h6"
      >
        {ToDaysDay}
      </Typography>
      <div className="flex flex-col items-center gap-2">
        <GithubIcon className="size-10 text-green-700" />
        <Typography className="text-portgore-800 font-Varela" variant="h6">
          {ToDaysDay}
        </Typography>
      </div>
    </section>
  );
};

export default WeatherheaderSection;
