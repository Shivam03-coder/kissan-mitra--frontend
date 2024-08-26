import { Typography } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from 'react-i18next';

const TextSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col py-6 px-4 md:px-8 lg:px-16">
      <Typography
        variant="h3"
        color="blue-gray"
        className="text-lg font-Inter md:text-xl lg:text-2xl"
      >
        {t('market-price.text-section.heading')}
      </Typography>
      <Typography
        variant="paragraph"
        color="gray"
        className="mt-4 text-base font-Inter font-medium md:text-lg lg:text-xl"
      >
        {t('market-price.text-section.paragraph')}
      </Typography>
    </section>
  );
};

export default TextSection;
