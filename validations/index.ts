import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  name: Yup.string()
    .required("Name is required.")
    .min(3, "at least 3 characters."),
  subject: Yup.string()
    .required("Subject is required.")
    .min(3, "at least 3 characters."),
  message: Yup.string()
    .required("Message is required.")
    .min(3, "at least 3 characters."),
});