import * as  yup from "yup"

export const RegisterSchema = yup.object({
  email: yup.string().email("Email Not Valid!").required("Email is required!"),
  password: yup.string().min(6, "Password must be longer than 6 characters!").required("Password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("You must confirm your password!")
})

export const LoginSchema = yup.object({
  email: yup.string().email("Email Not Valid!").required("Email is required!"),
  password: yup.string().min(6, "Password must be longer than 6 characters!").required("Password is required!")
})