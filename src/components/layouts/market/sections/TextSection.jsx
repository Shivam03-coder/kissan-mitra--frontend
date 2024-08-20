import { Typography } from "@material-tailwind/react";
import React from "react";

const TextSection = () => {
  return (
    <section className="flex flex-col py-6    px-4 md:px-8 lg:px-16">
      <Typography
        variant="h3"
        color="blue-gray"
        className="text-lg font-Inter md:text-xl lg:text-2xl"
      >
        Access MSP Information with Ease
      </Typography>
      <Typography
        variant="paragraph"
        color="gray"
        className="mt-4 text-base font-Inter font-medium md:text-lg lg:text-xl"
      >
        Our platform empowers users to effortlessly find the Minimum <br />
        Support Price (MSP) of various agricultural products within their
        locality.
      </Typography>
    </section>
  );
};

export default TextSection;
