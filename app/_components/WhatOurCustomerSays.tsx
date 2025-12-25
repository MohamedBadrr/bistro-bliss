import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const WhatOurCustomerSays = () => {
  return (
    <div className="container py-30 flex  w-full flex-col items-center gap-15 ">
      <h1 className="text-[45px] font-playfair ">What Our Customers Say</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default WhatOurCustomerSays;
