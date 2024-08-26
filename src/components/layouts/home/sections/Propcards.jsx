import React from "react";
import { useTranslation } from "react-i18next";
import {
  ecoimage,
  freshimage,
  safeimage,
  easyimage,
} from "../../../../constants";

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { PropcardsData } from "../../../../data";

function Propcards() {
  const { t } = useTranslation();

  return (
    <section className="py-8">
      <Typography variant="h3" className="text-center">
        {t('Home.propcards.title')}
      </Typography>
      <div className="flex-center col-span-full w-full gap-10 py-8 flex-wrap">
        {PropcardsData.map(({ id, img, label }, i) => (
          <Card
            key={id}
            className="mt-6 w-40 md:w-60 bg-custom-greenlight-gradient flex-center shadow-dark-shadow hover:rounded-none transition-all"
          >
            <CardBody className="flex-center flex-col gap-4">
              <img src={img} alt={t(`Home.propcards.${label.toLowerCase()}`)} />
              <Typography className="!text-black" variant="h5">
                {t(`Home.propcards.${label.toLowerCase()}`)}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Propcards;
