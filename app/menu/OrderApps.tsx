import Image from "next/image";
import React from "react";

const OrderApps = () => {
  return (
    <div className="bg-neutral-50">
      <div className="container py-10 md:py-25 flex flex-col md:flex-row gap-25">
        <div className="w-full space-y-3 md:max-w-86.5">
          <h2 className="font-playfair text-[45px]">
            You can order through apps
          </h2>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {ICONS.map((icon, index) => (
            <div
              key={index}
              className="bg-white items-center justify-center flex py-3 px-5 hover-scale"
            >
              <Image
                alt="order app photo"
                src={icon}
                className="w-full! "
                width={151}
                height={25}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderApps;

const ICONS = [
  "/assets/icons/uber.svg",
  "/assets/icons/gru.svg",
  "/assets/icons/post.svg",
  "/assets/icons/door.svg",
  "/assets/icons/panda.svg",
  "/assets/icons/deli.svg",
  "/assets/icons/insta.svg",
  "/assets/icons/just.svg",
  "/assets/icons/did.svg",
];
