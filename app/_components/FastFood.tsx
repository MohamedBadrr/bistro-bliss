"use client";

import HeadingWithTitle from "@/components/shared/HeadingWithTitle";
import { Clock, Shell, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const FastFood = () => {
  return (
    <div className="bg-neutral-50 overflow-hidden">
      <div className="container py-30 ">
        <div className="flex items-center justify-center gap-20 flex-wrap md:flex-nowrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex gap-2"
          >
            <div>
              <Image
                src={"/assets/mid-fast.png"}
                alt="Fast Food"
                width={430}
                height={600}
                className="hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="mt-8 flex-col flex  gap-2 ">
              <Image
                src={"/assets/item-1fast.png"}
                alt="item-1fast.png"
                width={290}
                height={333}
                className="hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <Image
                src={"/assets/item-2fast.png"}
                alt="item-2fast.png"
                width={290}
                height={240}
                className="hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" flex flex-col items-center justify-center md:items-start md:justify-start gap-12"
          >
            <HeadingWithTitle
              subTitle="                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop."
              title="Fastest Food Delivery in City"
            />
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#AD343E] rounded-full">
                  <Clock size={16} color="white" />
                </div>
                <p>Delivery within 30 minutes</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#AD343E] rounded-full">
                  <Shell size={16} color="white" />
                </div>
                <p>Best Offer & Prices</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#AD343E] rounded-full">
                  <ShoppingCart size={16} color="white" />
                </div>
                <p>Online Services Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FastFood;
