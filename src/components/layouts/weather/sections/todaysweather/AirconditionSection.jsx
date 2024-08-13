import { Typography } from "@material-tailwind/react";
import { AircondtionsData } from "../../../../../data";
import { useMemo } from "react";

const AirconditionSection = () => {
  const AirconditionNewData = useMemo(() => {
    let Bgcolor = 600;
    return AircondtionsData.map((items) => {
      Bgcolor = Bgcolor - 100;
      return {
        ...items,
        Bgcolor,
      };
    });
  });

  return (
    <section className="w-[97%] md:w-[80%] mx-auto rounded-2xl shadow-glass h-full p-4 my-4  flex justify-center bg-pastelGreen-500 items-center flex-col">
      <Typography
        className="flex flex-1 items-center font-Inter p-1 mb-1"
        as={"div"}
        variant="h4"
      >
        AIR CONDITIONS
      </Typography>
      <section className="grid p-2 w-full grid-cols-3 gap-4 place-items-center">
        {AirconditionNewData.map(
          ({ id, icon, label, value, Bgcolor }, index) => {
            const ICON = icon;
            return (
              <div
                key={id}
                className={`text-center w-[100px] h-[70px]  bg-green-${Bgcolor}  rounded-xl  flex-col flex-center`}
              >
                <div className="flex items-center justify-center gap-1">
                  <i>
                    <ICON className="size-5" />
                  </i>
                  <span>{label}</span>
                </div>
                <Typography className="opacity-80" variant="h6">
                  {value}
                </Typography>
              </div>
            );
          }
        )}
      </section>
    </section>
  );
};

export default AirconditionSection;
