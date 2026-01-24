import * as Yup from "yup";

export const ContactUsValidationSchema = Yup.object({
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

export const UpdateProfileSchema = Yup.object({
  id: Yup.string(),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]*$/, "Phone number must contain only numbers")
    .nullable(),
  street_address: Yup.string().nullable(),
  country: Yup.string().nullable(),
  city: Yup.string().nullable(),
  file: Yup.mixed().nullable().notRequired(),
});

export const AddProductValidationSchema = (isEdit: boolean) =>
  Yup.object({
    name: Yup.string().required("Product Name is Required").min(3),
    description: Yup.string().required("Product Description is Required."),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Must be Greater than 0")
      .required("Price is Required"),
    category: Yup.string().required("Category is Required"),
    sizes: Yup.array().of(
      Yup.object({
        name: Yup.string().required("Size name is required"),
        price: Yup.number()
          .typeError("Size price must be a number")
          .required("Size price is required"),
      })
    ),
    file: isEdit
      ? Yup.mixed().optional().nullable()
      : Yup.mixed().required("Product Image is required"),
    extras: Yup.array().of(
      Yup.object({
        name: Yup.string().required("Size name is required"),
        price: Yup.number()
          .typeError("Size price must be a number")
          .required("Size price is required"),
      })
    ),
  });



export const checkoutValidationSchema = Yup.object({
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^(01)[0-9]{9}$/, "Invalid Egyptian phone number"),

  address: Yup.string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters"),

  postalCode: Yup.string()
    .required("Postal code is required")
    .min(4, "Invalid postal code"),

  city: Yup.string()
    .required("City is required"),

  country: Yup.string()
    .required("Country is required"),
});
