import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const FormSection = () => {
  return (
    <section className="bg-green-200 flex-center  py-8">
      <Card color="transparent" shadow={false}>
        <Typography className="text-black  font-TitilliumWeb" variant="h2">
          Find Out The Most Suitable Crop <br /> To Grow In Your Farm
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h5"
              className=" text-black font-TitilliumWeb -mb-3"
            >
              Nitrogen
            </Typography>
            <Input
              size="lg"
              placeholder="Enter The Value (example:50)"
              className="InputBoxCustom "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h5"
              className=" text-black font-TitilliumWeb -mb-3"
            >
              Phosphorous
            </Typography>
            <Input
              size="lg"
              placeholder="Enter The Value (example:50)"
              className="InputBoxCustom"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h5"
              className=" text-black font-TitilliumWeb -mb-3"
            >
              Potassium
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Enter The Value (example:50)"
              className="InputBoxCustom"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h5"
              className=" text-black font-TitilliumWeb -mb-3"
            >
              PH Level
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Enter The Value between 0-10"
              className="InputBoxCustom"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h5"
              className=" text-black font-TitilliumWeb -mb-3"
            >
              Rainfall 
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Your-state"
              className="InputBoxCustom"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h5"
              className=" text-black font-TitilliumWeb -mb-3"
            >
              Select Your State
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Selelct Your State"
              className="InputBoxCustom"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h5"
              className=" text-black font-TitilliumWeb -mb-3"
            >
              Select Your City
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Selelct Your City"
              className="InputBoxCustom"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6 text-xl" fullWidth>
            CHECK
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default FormSection;
