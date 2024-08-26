import React from "react";
import { FertilizerPageInfoData } from "../../../../data";
import { Typography } from "@material-tailwind/react";

const InfoSection = () => {
  return (
    <section className="grid grid-rows-4 bg-custom-white-with-light-green-edges  place-content-center place-items-start md:place-self-stretch p-9 min-h-screen">
      {FertilizerPageInfoData.map((info, index) => {
        return (
          <div
            key={info.id}
            className="text-primary flex-center gap-5"
          >
              <img className="size-[5rem]" src={info.img} alt="IMAGE" />
            <Typography as={"div"}>
              <Typography className="font-Varela" as={"title"} variant="h4">
                {info.label}
              </Typography>
              <Typography
                variant={"h4"}
                className="ShowOndesktopOnly text-lg font-Roboto font-normal opacity-90 hidden md:block"
              >
                {info.content}
              </Typography>
            </Typography>
          </div>
        );
      })}
    </section>
  );
};

export default InfoSection;
