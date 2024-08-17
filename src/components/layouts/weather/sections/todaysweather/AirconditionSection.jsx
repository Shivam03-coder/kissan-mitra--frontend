import { Typography } from "@material-tailwind/react";
import { AircondtionsData } from "../../../../../data";
import { Cloudicon, HumidityIcon, WindIcon } from "../../../../../constants";

const AirconditionSection = ({ ToDaysWeatherData }) => {
  console.log(
    "🚀 ~ AirconditionSection ~ ToDaysWeatherData:",
    ToDaysWeatherData
  );
  return (
    <section className="w-[97%] md:w-[80%] mx-auto rounded-2xl  h-full  p-4 my-4  flex justify-center  items-center flex-col">
      <Typography
        className="w-[90%] flex justify-center bg-green-100 shadow-inner rounded-t-3xl  text-black   items-center font-Inter py-3 "
        variant="h4"
      >
        AIR CONDITIONS
      </Typography>
      <section className="grid border border-green-900 shadow-glass  rounded-2xl p-5 w-full grid-cols-3 gap-4 place-items-center">
        <div
          className={`text-center w-[120px] h-[70px]  bg-yellow-500 shadow-dark-shadow rounded-xl  flex-col flex-center`}
        >
          <div className="flex items-center justify-center gap-1">
            <i>
              <WindIcon className="size-5" />
            </i>
            <span>Wind</span>
          </div>
          <Typography className="opacity-80" variant="h6">
            {ToDaysWeatherData.wind} m/s
          </Typography>
        </div>
        <div
          className={`text-center w-[120px] h-[70px]  bg-yellow-500 shadow-dark-shadow rounded-xl  flex-col flex-center`}
        >
          <div className="flex items-center justify-center gap-1">
            <i>
              <Cloudicon className="size-5" />
            </i>
          </div>
          <Typography className="opacity-80" variant="h6">
            {ToDaysWeatherData.weather?.[0].main}
          </Typography>
        </div>
        <div
          className={`text-center w-[120px] h-[70px]  bg-yellow-500 shadow-dark-shadow rounded-xl  flex-col flex-center`}
        >
          <div className="flex items-center justify-center gap-1">
            <i>
              <HumidityIcon className="size-5" />
            </i>
            <span>Humidity</span>
          </div>
          <Typography className="opacity-80" variant="h6">
            {ToDaysWeatherData.humidity} %
          </Typography>
        </div>
      </section>
    </section>
  );
};

export default AirconditionSection;
