export const metadata = {
  title: "Bistro Bliss | About Us",
  description: "Learn more about our story, values, and what makes us special.",
};

import ProvideHealthy from "../_components/ProvideHealthy";
import WhatOurCustomerSays from "../_components/WhatOurCustomerSays";
import AboutVideo from "./components/AboutVideo";
import LittleInformation from "./components/LittleInformation";

const About = () => {
  return (
    <>
      <div className="pt-25 bg-neutral-50 items-center justify-center flex flex-col gap-2 mb-[-60px]!">
        <h1 className="text-[55px] font-playfair text-center">About us</h1>
        <p className="w-[90%] md:w-1/2 text-center">
          We believe that great food brings people together. At our restaurant,
          every dish is crafted with passion, fresh ingredients, and a love for
          creating unforgettable dining experiences.
        </p>
      </div>
      <ProvideHealthy />
      <AboutVideo />
      <LittleInformation />
      <WhatOurCustomerSays />
    </>
  );
};

export default About;
