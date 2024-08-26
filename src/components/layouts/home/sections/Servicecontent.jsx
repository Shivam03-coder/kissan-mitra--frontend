import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next"; 
import { Rightarrowicon } from "../../../../constants";

const Servicecontent = () => {
  const { t } = useTranslation(); 

  return (
    <section className="space-y-5 p-3">
      <Typography variant="h4">
        {t('Home.serviceContent.title')}
      </Typography>
      <Typography className="opacity-50 font-medium font-Inter" variant="paragraph">
        {t('Home.serviceContent.subtitle')}
      </Typography>
      <Typography
        className="w-60 bg-pastelGreen-600 flex justify-between p-2 items-center rounded-xl"
        as={"div"}
      >
        <Typography variant="h5" className="text-white pl-4">
          {t('Home.serviceContent.checkout')}
        </Typography>
        <IconButton className="bg-pastelGreen-500">
          <Rightarrowicon className="text-black size-5" />
        </IconButton>
      </Typography>
    </section>
  );
};

export default Servicecontent;
