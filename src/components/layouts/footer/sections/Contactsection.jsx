import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@material-tailwind/react";

const Contactsection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-3">
      <textarea
        placeholder={t('Home.footer.contactsection.placeholder')}
        name=""
        id=""
        rows={5}
        className="w-[60%] border-2 border-green-400 p-3 font-Inter rounded-md bg-custom-green-gradient text-black placeholder:text-black"
      ></textarea>
      <Button className="w-[40%] bg-custom-light-green-to-white text-black text-lg">
        {t('Home.footer.contactsection.sendButton')}
      </Button>
    </div>
  );
};

export default Contactsection;
