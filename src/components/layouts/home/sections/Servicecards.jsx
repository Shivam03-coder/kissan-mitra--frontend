import React from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ServicecardData } from "../../../../data";

function Servicecards() {
  return (
    <section className="py-8">
      <Typography variant="h3" className="text-center">
        Comprehensive Services to Enhance Your Farming Experience
      </Typography>
      <div className="flex flex-wrap justify-center gap-6 py-8">
        {ServicecardData.map(({ id, img, label }, index) => (
          <Card
            key={id}
            className="w-[300px] md:w-[340px] bg-transparent backdrop-blur-2xl shadow-5xl"
          >
            <CardBody className="flex flex-col items-center gap-4 ">
              <img className="size-32 rounded-3xl " src={img} alt="img" />
              <Typography
                className="text-black font-bold font-Roboto"
                variant="h5"
              >
                {label.toUpperCase()}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Servicecards;
