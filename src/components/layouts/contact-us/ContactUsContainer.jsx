import React from "react";
import AppcontactUsinfoSection from "./sections/AppcontactUsinfoSection";
import QuestionSection from "./sections/QuestionSection";
import ContactFormSection from "./sections/ContactFormSection";

const ContactUsContainer = () => {
  return (
    <div className="h-full w-[95%] md:w-[80%] py-10 space-y-10 mx-auto">
      <AppcontactUsinfoSection />
      <QuestionSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactUsContainer;
