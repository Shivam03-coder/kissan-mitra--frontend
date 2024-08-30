import { Typography } from "@material-tailwind/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { askquestionImage } from "../../../../constants";
import AccordionSection from "./accordion/AccordionSection";

const QuestionSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-7 space-y-6 py-8 mx-auto place-items-center">
      <section>
        <img
          className="rounded-lg shadow-glass"
          src={askquestionImage}
          alt=""
        />
      </section>
      <section>
        <Typography className="ml-10" variant="h5">
          What You Get When Asking Your Question ?
        </Typography>
        <section className="space-y-2">
          <AccordionSection />
        </section>
      </section>
    </section>
  );
};

export default QuestionSection;
