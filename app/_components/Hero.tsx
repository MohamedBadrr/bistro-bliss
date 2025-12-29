import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/bg.png')] bg-full bg-center h-screen w-full flex items-center justify-center flex-col ">
      <div className="items-center flex justify-center flex-col w-full max-w-166.75 gap-8">
        <h1 className="leading-24 px-5 text-[80px] md:text-[100px] text-center font-playfair">
          Best food for your taste
        </h1>
        <p className="text-center max-w-100.25  flex items-center justify-center text-base">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="flex gap-4 items-center justify-center">
          <Button variant={"default"} className="">
            Book a Table
          </Button>
          <Link href={"/menu"}>
            <Button variant={"outline"} className="">
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
