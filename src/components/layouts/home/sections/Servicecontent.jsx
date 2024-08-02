import { IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import { Rightarrowicon } from "../../../../constants";

const Servicecontent = () => {
  return (
    <section className="space-y-5 p-3">
      <Typography variant="h4">
        At Kissan Mitra, we provide cutting-edge <br /> technology to support
        farmers in their <br /> daily activities.
      </Typography>
      <Typography className="opacity-50 font-medium font-Inter" variant="p">
        At Kissan Mitra, we're committed to equipping <br /> farmers with the latest
         technology, designed to  <br /> enhance productivity.
      </Typography>

      <Typography
        className="w-60 bg-pastelGreen-800  flex justify-between p-2 items-center rounded-xl "
        as={"div"}
      >
        <Typography variant="h5" className="text-white pl-4">
          CHECKOUT
        </Typography>
        <IconButton className="bg-pastelGreen-500">
          <Rightarrowicon className="text-black size-5" />
        </IconButton>
      </Typography>
    </section>
  );
};

export default Servicecontent;
