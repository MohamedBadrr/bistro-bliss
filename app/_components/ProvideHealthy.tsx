"use client";

import { Button } from "@/components/ui/button";
import { LocationEdit, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProvideHealthy = () => {
  return (
    <div className="bg-neutral-50 overflow-hidden">
      <div className="container py-30 ">
        <div className="flex gap-20 flex-wrap items-start ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              width={599}
              height={566}
              src={"/assets/providedImage.png"}
              alt="food image"
            />
            <div className="p-6.5 bg-[#474747] rounded-lg flex flex-col gap-10.5 max-w-102.75 h-fit absolute bottom-[-65] right-0 md:bottom-[-35] md:right-[-40]">
              <p className="text-semi-bold text-white">Come and visit us</p>
              <div className=" flex flex-col gap-6">
                <div className="flex flex-wrap gap-5">
                  <Phone className="w-4 h-4 text-white" />
                  <p className="text-white text-[12px] max-w-67">
                    (414) 857 - 0107
                  </p>
                </div>
                <div className="flex flex-wrap gap-5">
                  <Mail className="w-4 h-4 text-white" />
                  <p className="text-white text-[12px] max-w-67">
                    happytummy@restaurant.com
                  </p>
                </div>
                <div className="flex flex-wrap gap-5">
                  <LocationEdit className="w-4 h-4 text-white" />
                  <p className="text-white text-[12px] max-w-67">
                    837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gap-10 w-full max-w-85.25 flex items-start justify-start"
          >
            <div className="flex items-center w-full flex-wrap justify-start gap-6">
              <h2 className="text-[35px] font-semi-bold font-playfair  ">
                We provide healthy food for your family.
              </h2>
              <p className="text-sm opacity-90">
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in city&apos;s rich culinary culture,
                we aim to honor our local roots while infusing a global palate.
              </p>
              <p className="text-[12px] opacity-90">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
              <Button variant={"outline"}>More About Us</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProvideHealthy;
