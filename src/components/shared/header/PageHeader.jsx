import { Typography } from "@material-tailwind/react";
import React from "react";
import { GithubIcon } from "../../../constants";
import { getTodaysDate } from "../../../utils";

const PageHeader = () => {
  const ToDaysDay = getTodaysDate();
  return (
    <nav className="sticky z-40 bg-green-100  top-0">
      <header className="flex px-10 py-1 md:px-0 justify-between md:justify-between items-center min-h-[10vh] w-full md:w-[85%] bg-transparent backdrop-blur-sm mx-auto">
        <div className=" max-w-[50%] md:max-w-[30%] break-words md:text-center">
          <Typography className="text-lg md:text-2xl font-semibold">
            <span className="text-4xl text-pastelGreen-600">THE </span>{" "}
            <span className="text-3xl text-portgore-600">K</span>ISSAN - MITRA
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-2">
          <GithubIcon className="size-10 text-black" />
          <Typography className="text-portgore-800 font-Varela" variant="h6">
            {ToDaysDay}
          </Typography>
        </div>
      </header>
    </nav>
  );
};

export default PageHeader;
