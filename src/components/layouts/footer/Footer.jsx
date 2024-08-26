import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-tailwind/react";
import Wavesvg from "../../shared/svgs/Wavesvg";
import Contactsection from "./sections/Contactsection.jsx";

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: t('Home.footer.product'),
      items: [t('Home.footer.overview'), t('Home.footer.features')],
    },
    {
      title: t('Home.footer.company'),
      items: [t('Home.footer.aboutUs'), t('Home.footer.careers')],
    },
    {
      title: t('Home.footer.resource'),
      items: [t('Home.footer.blog'), t('Home.footer.newsletter')],
    },
  ];

  return (
    <section className="relative pt-10 pb-5">
      <Wavesvg />
      <footer className="w-full p-4">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <section className="hidden md:block">
              <Contactsection />
            </section>
            <div className="grid grid-cols-3 justify-between gap-4">
              {footerLinks.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium text-lg opacity-40"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
