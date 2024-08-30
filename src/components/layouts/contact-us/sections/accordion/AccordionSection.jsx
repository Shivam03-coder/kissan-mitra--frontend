import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AccordionIcon from "./AccordionIcon";
import { Accord_Data } from "../../../../../data";

const AccordionSection = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="w-[90%] md:w-5/6 mx-auto py-8">
      {Accord_Data.map((faq) => (
        <Accordion
          key={faq.id}
          open={open === faq.id}
          icon={<AccordionIcon id={faq.id} open={open} />}
        >
          <AccordionHeader
            className="text-[1rem] font-Inter font-medium"
            onClick={() => handleOpen(faq.id)}
          >
            {faq.question}
          </AccordionHeader>
          <AccordionBody className="text-[1rem] font-Inter font-medium opacity-90">
            {faq.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </section>
  );
};

export default AccordionSection;
