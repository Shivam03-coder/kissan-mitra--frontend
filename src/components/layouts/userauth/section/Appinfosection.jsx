import { Typography } from "@material-tailwind/react";
import { AppinfoData } from "../../../../data";

function Appinfosection() {
  return (
    <section className="grid grid-rows-4 place-content-center place-items-start md:place-self-stretch p-9 min-h-screen">
      {AppinfoData.map((info, index) => {
        const Iconcomponets = info.icons;
        return (
          <div
            key={info.id}
            className="text-primary flex-center py-4 md:py-7 z-50 gap-5"
          >
            <Typography as={"div"}>
              <Iconcomponets className="bg-goldentainoi-500 size-[80px] md:size-[90px] rounded-xl shadow-glass p-5  " />
            </Typography>
            <Typography as={"div"}>
              <Typography className="font-Varela" as={"title"} variant="h4">
                {info.title}
              </Typography>
              <Typography
                variant={"h4"}
                className="ShowOndesktopOnly text-lg font-Roboto font-normal opacity-90 hidden md:block"
              >
                {info.text}
              </Typography>
            </Typography>
          </div>
        );
      })}
    </section>
  );
}

export default Appinfosection;
