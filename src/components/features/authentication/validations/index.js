import * as Yup from "yup";

export const SignupSchema = Yup.object({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phonenumber: Yup.number().required("Phonenumber is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
  check: Yup.boolean(),
});