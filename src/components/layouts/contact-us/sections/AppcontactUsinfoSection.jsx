import { Typography } from "@material-tailwind/react";
import React from "react";
import AdminOfficeinfoSection from "./AdminOfficeinfoSection";
import { ConsultImage } from "../../../../constants";

const AppcontactUsinfoSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-7 mx-auto place-items-center">
      <section className="order-2 md:order-1 space-y-4 w-[95%] mx-auto">
        <Typography className="font-Varela text-green-900" variant="h2">
         CONTACT US
        </Typography>
        <Typography className="text-[1rem] font-Inter font-medium opacity-70">
          Have questions or need support? The Kisaan Mitra team is here to help.
          Whether it's about using the app, providing feedback, or reporting an
          issue, reach out to us anytime. Your input is valuable in making
          Kisaan Mitra better for everyone. Let's grow together!
        </Typography>
        <AdminOfficeinfoSection />
      </section>
      <section className="order-1 md:order-2">
        <img className="rounded-lg shadow-glass" src={ConsultImage} alt="" />
      </section>
    </section>
  );
};

export default AppcontactUsinfoSection;
