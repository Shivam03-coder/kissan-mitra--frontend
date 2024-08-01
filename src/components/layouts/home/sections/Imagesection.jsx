import React from "react";
import { Farmbackground } from "../../../../constants";
import { Button, Typography } from "@material-tailwind/react";

function Imagesection() {
  return (
    <div className="w-full p-0 relative">
      <img
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[540px] xl:h-[540px] object-cover"
        src={Farmbackground}
        alt="Farmbackground"
      />
      {/* OVER LAY CONTENT */}
      <div className="overlay-content flex flex-col bg-fadedarken text-white justify-center space-y-4 pl-10">
        <Typography variant="h1">
          Smart Farming <br /> Better Yields
        </Typography>
        <Typography className="hidden md:block" variant="h5">
          "Get Expert Crop Advice, Weather Forecasts, and Market Updates"
        </Typography>
        <Button className="w-[8rem] bg-pastelGreen-600" >
          More info
        </Button>
      </div>
    </div>
  );
}

export default Imagesection;
