import { Input, Button, Typography, Spinner } from "@material-tailwind/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginSchema } from "./validations";
import Titlesection from "../../layouts/userauth/section/Titlesection";
import { useLoginUserMutation } from "../../../redux/endpoints/userauthapi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Passwordchnagemodel from "./Passwordchnagemodel";
import { Passwordeye } from "../../../constants";

const initialValues = {
  email: "",
  password: "",
};

function LoginForm({ Showpassword, setShowpassword }) {
  const [LoginUser, { isLoading }] = useLoginUserMutation();

  const [ShowpasswordchangeModel, setShowpasswordchangeModel] = useState(false);

  const Navigate = useNavigate();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (userlogininfo, action) => {
      try {
        const response = await LoginUser(userlogininfo).unwrap();

        const { message, status } = response;

        if (status === "success") {
          action.resetForm();

          toast.success(message);

          Navigate("/");

          window.location.reload();
        }
      } catch (error) {
        if (error.data.status === "failed") {
          toast.error(error.data.message);
        }
      }
    },
  });

  return (
    <section className="flex-center flex-col h-full">
      <Titlesection msg={"USER LOG-IN"} />
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-80 max-w-screen-lg sm:w-96 p-8 rounded-xl mb-7 z-50 bg-primary bg-transparent backdrop-blur-sm shadow-inner"
      >
        <div className="mb-1 flex flex-col gap-4 space-y-3 ">
          <div className="space-y-2">
            <Input
              className="font-Varela text-secondary-prime"
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
              type={Showpassword ? "text" : "password"}
              label="Password"
              placeholder="**********"
              name="password"
              icon={
                <Passwordeye
                  className="cursor-pointer"
                  onClick={() => setShowpassword(!Showpassword)}
                />
              }
              value={values.password}
              onChange={handleChange}
            />
            <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
              {errors?.password}
            </p>
          </div>
        </div>
        <Typography
          as={"button"}
          variant="paragraph"
          onClick={() => setShowpasswordchangeModel(true)}
          className="text-blue-700 hover:underline text-[15px] font-normal mx-2"
        >
          forgotten password ?
        </Typography>
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
            "LOGIN"
          )}
        </Button>
      </form>
      {ShowpasswordchangeModel && (
        <Passwordchnagemodel
          ShowpasswordchangeModel={ShowpasswordchangeModel}
          setShowpasswordchangeModel={setShowpasswordchangeModel}
          Showpassword={Showpassword}
          setShowpassword={setShowpassword}
        />
      )}
    </section>
  );
}

export default LoginForm;
