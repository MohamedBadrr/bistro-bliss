"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/bg.png')] bg-full bg-center h-screen w-full flex items-center justify-center flex-col overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="items-center flex justify-center flex-col w-full max-w-166.75 gap-8"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="leading-24 px-5 text-[80px] md:text-[100px] text-center font-playfair"
        >
          Best food for your taste
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center max-w-100.25  flex items-center justify-center text-base"
        >
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex gap-4 items-center justify-center"
        >
          <Link href={"/reservation"}>
            <Button className="" variant={"default"}>
              Book A Table
            </Button>
          </Link>
          <Link href={"/menu"}>
            <Button variant={"outline"} className="">
              Explore Menu
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
