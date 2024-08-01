import React from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

const Carddata = [
  {
    id: 1,
    feature: "WEATHER",
    para: "Get accurate and up-to-date weather specifically for your location.",
  },
  {
    id: 2,
    feature: "YIELD",
    para: "Optimize your crop yield with our expert recommendations.",
  },
  {
    id: 3,
    feature: "PLANT DISEASE",
    para: "Identify and address plant diseases with ease.",
  },
  {
    id: 4,
    feature: "MARKET",
    para: "Stay informed about the latest market trends and prices.",
  },
  {
    id: 5,
    feature: "FERTILIZER",
    para: "Receive recommendations on the best fertilizers for your crops.",
  },
];

function Servicescards() {
  return (
    <section className="py-8">
      <Typography variant="h3" className="text-center">
        Comprehensive Services to Enhance Your Farming Experience 
      </Typography>
      <div className="flex flex-wrap justify-center gap-6 py-8">
        {Carddata.map(({ id, feature, para }) => (
          <Card
            key={id}
            className="w-[330px] sm:w-1/2 md:w-1/3 bg-pastelGreen-500 shadow-glass-card"
          >
            <CardBody className="flex flex-col items-center gap-4 p-4">
              <Typography
                className="text-black font-bold font-Varela"
                variant="h5"
              >
                {feature.toUpperCase()}
              </Typography>
              <Typography
                variant="body2"
                className="text-center text-black font-Inter text-lg"
              >
                {para}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Servicescards;
