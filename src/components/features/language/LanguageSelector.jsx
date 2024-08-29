import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-full mx-3">
      <select
        id="language"
        className="block w-full p-2 rounded-xl bg-green-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:border-green-500 sm:text-lg"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option className="bg-green-300 text-gray-900" value="en">
          English
        </option>
        <option className="bg-green-300 text-gray-900" value="hi">
          हिन्दी
        </option>
        <option className="bg-green-300 text-gray-900" value="mr">
          मराठी
        </option>
        <option className="bg-green-300 text-gray-900" value="gj">
          ગુજરાતી
        </option>
        <option className="bg-green-300 text-gray-900" value="pb">
          ਪੰਜਾਬੀ
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
