"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

const WhatOurCustomerSays = () => {
  return (
    <div className="container py-30 flex  w-full flex-col items-center gap-15">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
        className="text-[45px] font-playfair "
      >
        What Our Customers Say
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full  "
        >
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 w-full"
              >
                <div className="p-1 flex! items-center! justify-center!">
                  <div className="bg-neutral-100 p-8.75 rounded-lg flex flex-col gap-8 w-full max-w-86.5">
                    <div className="flex flex-col gap-4">
                      <h4 className="text-primary font-semibold ">
                        “The best restaurant”
                      </h4>
                      <p className="text-[12px]">
                        Last night, we dined at place and were simply blown away.
                        From the moment we stepped in, we were enveloped in an
                        inviting atmosphere and greeted with warm smiles.
                      </p>
                    </div>

                    <div className="h-0.5 bg-neutral-200"></div>

                    <div className="flex gap-5 items-center justify-start ">
                      <Image
                        alt="person 1"
                        width={55}
                        height={55}
                        className="rounded-full"
                        src={"/assets/person.png"}
                      />
                      <div className="flex flex-col ">
                        <p className="font-bold text-[14px]">Matt Cannon</p>
                        <p className="text-[14px]">San Diego, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default WhatOurCustomerSays;
