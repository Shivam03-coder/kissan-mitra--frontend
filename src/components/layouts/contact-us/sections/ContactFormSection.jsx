import React from "react";
import {
  Button,
  Input,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { contactUsFormSchema } from "../../../shared/validation/FormsValidation";
import MapSection from "./MapSection";
import { useSendMailtoOrganizationMutation } from "../../../../redux/endpoints/appdataapi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  message: "",
};

const ContactFormSection = () => {
  const [SendMessage, { isLoading }] = useSendMailtoOrganizationMutation();
  const formik = useFormik({
    initialValues,
    validationSchema: contactUsFormSchema,
    onSubmit: async (values, action) => {
      try {
        await SendMessage(values);
        toast.success("Mail Sent Sucessfully.");
        action.resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Failed to Send Mail.");
      }
    },
  });

  return (
    <section className="grid md:grid-cols-2 gap-7  py-8">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 w-[95%] mx-auto order-2 md:order-1 mt-6 md:mt-0"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="space-y-2 w-full md:w-auto">
            <Typography className="text-[1rem] font-Inter font-medium opacity-70">
              First name
            </Typography>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className={`!border text-[1rem] font-Inter font-medium !border-gray-300 bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 ${
                formik.touched.firstName && formik.errors.firstName
                  ? "!border-red-500"
                  : ""
              }`}
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="space-y-2 w-full md:w-auto">
            <Typography className="text-[1rem] font-Inter font-medium opacity-70">
              Last name
            </Typography>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className={`!border text-[1rem] font-Inter font-medium !border-gray-300 bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 ${
                formik.touched.lastName && formik.errors.lastName
                  ? "!border-red-500"
                  : ""
              }`}
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <Typography className="text-[1rem] font-Inter font-medium opacity-70">
            Email Address
          </Typography>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`!border text-[1rem] font-Inter font-medium !border-gray-300 bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 ${
              formik.touched.email && formik.errors.email
                ? "!border-red-500"
                : ""
            }`}
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="space-y-2">
          <Typography className="text-[1rem] font-Inter font-medium opacity-70">
            Contact Number
          </Typography>
          <Input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactNumber}
            className={`!border text-[1rem] font-Inter font-medium !border-gray-300 bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 ${
              formik.touched.contactNumber && formik.errors.contactNumber
                ? "!border-red-500"
                : ""
            }`}
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {formik.touched.contactNumber && formik.errors.contactNumber ? (
            <div className="text-red-500 text-sm">
              {formik.errors.contactNumber}
            </div>
          ) : null}
        </div>
        <div className="space-y-2">
          <Typography className="text-[1rem] font-Inter font-medium opacity-70">
            How may we help you?
          </Typography>
          <Textarea
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`!border text-[1rem] font-Inter font-medium !border-gray-300 bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 ${
              formik.touched.message && formik.errors.message
                ? "!border-red-500"
                : ""
            }`}
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>
        <Button type="submit" color="green" className="text-black text-sm flex-center">
          {isLoading ? <Spinner className="h-6 w-6" /> : "SEND MESSAGE"}
        </Button>
      </form>
      <section className="place-self-center order-1 mb-5 md:mb-0">
        <MapSection />
      </section>
    </section>
  );
};

export default ContactFormSection;
