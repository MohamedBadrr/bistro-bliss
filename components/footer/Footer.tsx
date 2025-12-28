import { Facebook, Instagram, Phone, Twitter  } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#474747]">
      <div className="container pt-20 pb-10 flex flex-col gap-5">
        <div className="flex justify-between flex-col gap-5 md:gap-0 md:flex-row ">
          <div className=" flex flex-col gap-6 w-full max-w-73.25">
            <div className="flex gap-5 flex-warp items-center justify-center">
              <Image
                alt="footer image "
                src={"/assets/logo.png"}
                width={46}
                height={45}
              />
              <p className="text-[35px] italic font-playfair text-white ">
                {" "}
                Bistro Bliss
              </p>
            </div>
            <div className="text-sm text-neutral-400">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </div>
            <div className="flex gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary w-9 h-9 hover:bg-primary/50  hover:scale-105 duration-300 transition-all cursor-pointer">
                <Twitter className="text-sm text-white" size={"16"} />
              </div>
              <div className="flex items-center justify-center rounded-full bg-primary w-9 h-9 hover:bg-primary/50  hover:scale-105 duration-300 transition-all cursor-pointer">
                <Facebook className="text-sm text-white" size={"16"} />
              </div>
              <div className="flex items-center justify-center rounded-full bg-primary w-9 h-9 hover:bg-primary/50  hover:scale-105 duration-300 transition-all cursor-pointer">
                <Instagram className="text-sm text-white" size={"16"} />
              </div>
              <div className="flex items-center justify-center rounded-full  bg-primary w-9 h-9 hover:bg-primary/50 hover:scale-105 duration-300 transition-all cursor-pointer">
                <Phone className="text-sm text-white" size={"16"} />
              </div>
            </div>
          </div>

          {/* pages */}
          <div className="flex flex-col gap-5">
            <p className="font-bold text-md text-white">Pages</p>
            {pages.map((page) => (
              <p
                className="text-sm hover:underline cursor-pointer text-neutral-400"
                key={page}
              >
                {page}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-bold text-md text-white">Pages</p>
            {UtilityPages.map((page) => (
              <p
                className="text-sm hover:underline cursor-pointer text-neutral-400"
                key={page}
              >
                {page}
              </p>
            ))}
          </div>

          <div className="hidden md:block">
            <p className="mb-10 text-white font-bold">Follow Us On Instagram</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Image
                alt=""
                src={"/assets/egg.png"}
                className="rounded-lg hover-scale"
                width={194}
                height={170}
              />
              <Image
                alt=""
                src={"/assets/newfries.png"}
                className="rounded-lg hover-scale"
                width={194}
                height={170}
              />
              <Image
                alt=""
                src={"/assets/goodfood.png"}
                className="rounded-lg hover-scale"
                width={194}
                height={170}
              />
              <Image
                alt=""
                src={"/assets/buncakes.png"}
                className="rounded-lg hover-scale"
                width={194}
                height={170}
              />
            </div>
          </div>
        </div>
        <div className="h-px rounded-full bg-[#414536]"></div>
        <div className="flex items-center justify-center">
          <p className="text-neutral-400">
            Copyright © 2023 Hashtag Developer. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const pages = ["Home", "Menu", "About", "Contact us", "Blog"];
const UtilityPages = ["View More", "Changelog", "Licenses", "Styleguide"];
