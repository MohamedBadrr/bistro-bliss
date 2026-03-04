import HeadingWithTitle from "@/components/shared/HeadingWithTitle";
import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "Bistro Bliss | Contact Us",
  description:
    "Get in touch with Bistro Bliss for reservations, feedback, or inquiries.",
};
const ContactUs = () => {
  return (
    <div className="bg-neutral-50">
      <div className="container flex flex-col items-center justify-center gap-15 pb-15 pt-25">
        <HeadingWithTitle
          title="Contact Us"
          containerClassName="flex items-center"
          subTitleClassName="text-neutral text-center text-[16px] "
          subTitle="We consider all the drivers of change gives you the components you need to change to create a truly happens."
        />

        <ContactForm />
        <div
          className="w-full max-w-180 flex-col md:flex-row gap-10 md:gap-0 flex items-center justify-between"
        >
          <div className="space-y-4 w-full  md:max-w-45.5 duration-300 hover:scale-105 transition-all">
            <h2 className="text-[20px]">Call Us:</h2>
            <h2 className="text-[24px] text-primary">+1-234-567-8900</h2>
          </div>

          <div className="space-y-4 w-full md:max-w-33.5 duration-300 hover:scale-105 transition-all">
            <h2 className="text-[20px]">Hours:</h2>
            <div>
              <p className="text-[14px]">Mon-Fri: 11am - 8pm</p>
              <p className="text-[14px]">Sat, Sun: 9am - 10pm</p>
            </div>
          </div>

          <div className="space-y-4 w-full md:max-w-33.5 duration-300 hover:scale-105 transition-all">
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
