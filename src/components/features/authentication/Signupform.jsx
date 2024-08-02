import { Input, Button, Typography, Spinner } from "@material-tailwind/react";
import { useFormik } from "formik";
import { IoEyeOutline } from "react-icons/io5";
import { SignupSchema } from "./validations";
import Titlesection from "../../layouts/auth/section/Titlesection";

const initialValues = {
  fullname: "",
  phonenumber: "",
  password: "",
};

const Signupform = () => {
  const isLoading = false;

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (userinfo, action) => {},
  });

  return (
    <section className="flex-center flex-col h-full">
      <Titlesection msg={"USER SIGN-UP"} />
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-80 max-w-screen-lg sm:w-96 p-8 rounded-xl mb-7 z-50 bg-primary bg-transparent backdrop-blur-sm shadow-inner"
      >
        <div className="mb-1 flex flex-col gap-4 space-y-3 ">
          <div className="space-y-2">
            <Input
              className="font-Varela  text-lg text-secondary-prime"
              variant="outlined"
              label="Your name"
              placeholder="Fullname"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
              {errors?.fullname}
            </p>
          </div>
          <div className="space-y-2">
            <Input
              className="font-Varela"
              variant="outlined"
              label="Number"
              placeholder="+91"
              name="phonenumber"
              value={values.phonenumber}
              onChange={handleChange}
            />

            <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
              {errors?.phonenumber}
            </p>
          </div>
          <div className="space-y-2">
            <Input
              className="font-Varela"
              variant="outlined"
              label="Email"
              placeholder="******@gmail.com"
              name="email"
              value={values.email}
              onChange={handleChange}
            />

            <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
              {errors?.email}
            </p>
          </div>
          <div className="space-y-2">
            <Input
              className="font-Varela"
              label="Password"
              placeholder="**********"
              name="password"
              icon={<IoEyeOutline />}
              value={values.password}
              onChange={handleChange}
            />
            <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
              {errors?.password}
            </p>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 bg-goldentainoi-600 flex-center text-black text-xl"
          fullWidth
        >
          {isLoading ? (
            <Spinner
              className="size-8 mx-auto bg-transparent"
              color="deep-orange"
            />
          ) : (
            "SIGN UP"
          )}
        </Button>
      </form>
    </section>
  );
};

export default Signupform;
