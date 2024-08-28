import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { ServicecardData } from "../../../../data";

function Servicecards() {
  const { t } = useTranslation();

  return (
    <section className="py-8">
      <Typography variant="h3" className="text-center w-[90%] mx-auto">
        {t("Home.servicecards.title")}
      </Typography>
      <div className="flex flex-wrap justify-center gap-6 py-8">
        {ServicecardData.map(({ id, img, label }, index) => (
          <Card
            key={id}
            className="w-[300px] md:w-[340px] bg-custom-greentransparent-gradient backdrop-blur-2xl shadow-5xl"
          >
            <CardBody className="flex flex-col items-center gap-4">
              <img className="size-32 rounded-3xl" src={img} alt="img" />
              <Typography
                className="text-black font-bold font-Roboto"
                variant="h5"
              >
                {t(`Home.servicecards.${label.replace(/\s+/g, "").toLowerCase()}`)}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Servicecards;
