import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const MenuItem = (props: {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}) => {
  return (
    <div className="border border-neutral-400 w-full hover-scale hover:shadow-xl hover:bg-primary hover:text-white group md:max-w-76.5 rounded-lg">
      <Image
        alt="menu image"
        src={props.image}
        className="w-full! h-66.5! md:h-56.5! rounded-t-lg"
        width={230}
        height={306}
      />
      <div className="flex flex-col items-center justify-center gap-3 p-8">
        <p className="font-bold text-[22px] text-primary group-hover:text-white font-playfair">
          $ {props.price}
        </p>
        <p className="italic [22px] font-semibold">{props.title}</p>
        <p className="text-[12px] text-center">{props.description}</p>
        <Button
          className="rounded-full w-full mt-2 hover:bg-white/90  hover:text-primary group-hover:bg-white group-hover:text-primary  "
          size={"sm"}
        >
          {" "}
          Add Dish{" "}
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default MenuItem;
