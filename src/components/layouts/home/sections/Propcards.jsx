import React from "react";
import {
  ecoimage,
  freshimage,
  safeimage,
  easyimage,
} from "../../../../constants";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PropcardsData } from "../../../../data";

function Propcards() {
  return (
    <section className="py-8">
      <Typography variant="h3" className="text-center">
        Empowering Farmers with Smart Solutions - Kissan Mitra
      </Typography>
      <div className="flex-center  col-span-full w-full gap-10  py-8 flex-wrap">
        {PropcardsData.map(({ id, img, label }, i) => (
          <Card
            key={id}
            className="mt-6 w-40 md:w-60 bg-pastelGreen-300 flex-center shadow-dark-shadow hover:rounded-none transition-all"
          >
            <CardBody className="flex-center flex-col gap-4" >
              <img src={img} alt="img" />
              <Typography className="!text-black" variant="h5">
                {label.toUpperCase()}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Propcards;
