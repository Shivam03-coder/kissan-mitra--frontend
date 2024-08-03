import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Spinner,
} from "@material-tailwind/react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Passwordeye } from "../../../constants";
import { useFormik } from "formik";
import { LoginSchema } from "./validations";
import { usePasswordChangeMutation } from "../../../redux/endpoints/userauthapi";

const initialValues = {
  email: "",
  password: "",
};

function Passwordchnagemodel({
  ShowpasswordchangeModel,
  setShowpasswordchangeModel,
  Showpassword,
  setShowpassword,
}) {
  const [Changepassword, { isLoading }] = usePasswordChangeMutation();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (password, action) => {
      try {
        const response = await Changepassword(password).unwrap();
        const { message, status } = response;

        if (status === "success") {
          action.resetForm();
          setShowpasswordchangeModel(false);
          toast.success(message);
        }
      } catch (error) {
        if (error.data.status === "failed") {
          setShowpasswordchangeModel(false);
          toast.error(error.data.message);
        }
      }
    },
  });

  return createPortal(
    <section>
      <Dialog
        size="xs"
        open={ShowpasswordchangeModel}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] text-black">
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" className="text-center">
                CHANGE PASSWORD
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>

              <Input
                label="Email"
                size="lg"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
                {errors?.email}
              </p>
              <Typography className="-mb-2" variant="h6">
                New Password
              </Typography>
              <Input
                label="Password"
                type={Showpassword ? "text" : "password"}
                size="lg"
                name="password"
                value={values.password}
                onChange={handleChange}
                icon={
                  <Passwordeye
                    className="cursor-pointer"
                    onClick={() => setShowpassword(!Showpassword)}
                  />
                }
              />
              <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
                {errors?.password}
              </p>
            </CardBody>
            <CardFooter className="pt-0">
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
                  "CONFIRM"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </section>,
    document.getElementById("dialog-root")
  );
}
export default Passwordchnagemodel;
