"use client";
import InputField from "@/components/fields/InputField";
import HeadingWithTitle from "@/components/shared/HeadingWithTitle";
import { Button } from "@/components/ui/button";
import { ContactUsValidationSchema } from "@/validations";
import { Form, Formik } from "formik";

export const metadata = {
  title: "Bistro Bliss | Contact Us",
  description:
    "Get in touch with Bistro Bliss for reservations, feedback, or inquiries.",
};

const initialValues = {
  email: "",
  name: "",
  subject: "",
  message: "",
};
const ContactUs = () => {
  const handleSubmit = (values: {
    email: string;
    name: string;
    subject: string;
    message: string;
  }) => {};
  return (
    <div className="bg-neutral-50">
      <div className="container flex flex-col items-center justify-center gap-15 pb-15 pt-25">
        <HeadingWithTitle
          title="Contact Us"
          containerClassName="flex items-center"
          subTitleClassName="text-neutral text-center text-[16px] "
          subTitle="We consider all the drivers of change gives you the components you need to change to create a truly happens."
        />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ContactUsValidationSchema}
          validateOnMount={false}
          validateOnBlur={true}
        >
          {({ isValid }) => (
            <Form className="w-full items-center justify-center flex ">
              <div className="flex gap-7 items-center p-10 rounded-lg bg-white border border-neutral-200 justify-center max-w-179.25 w-full flex-col">
                <div className="flex gap-6 w-full item-center ">
                  <InputField
                    label="Name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <InputField
                  label="Subject"
                  name="subject"
                  placeholder="Write a subject"
                />

                <InputField
                  label="Message"
                  name="message"
                  placeholder="Write your message"
                  type="textarea"
                />
                <Button
                  type="submit"
                  disabled={!isValid}
                  className="w-full"
                  variant={"default"}
                >
                  Send
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="w-full max-w-180 flex-col md:flex-row gap-10 md:gap-0 flex items-center justify-between">
          <div className="space-y-4 w-full  md:max-w-45.5">
            <h2 className="text-[20px]">Call Us:</h2>
            <h2 className="text-[24px] text-primary">+1-234-567-8900</h2>
          </div>

          <div className="space-y-4 w-full md:max-w-33.5">
            <h2 className="text-[20px]">Hours:</h2>
            <div>
              <p className="text-[14px]">Mon-Fri: 11am - 8pm</p>
              <p className="text-[14px]">Sat, Sun: 9am - 10pm</p>
            </div>
          </div>

          <div className="space-y-4 w-full md:max-w-33.5">
            <h2 className="text-[20px]">Our Location:</h2>
            <p className="text-[14px] ">
              123 Bridge Street Nowhere Land, LA 12345 United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
