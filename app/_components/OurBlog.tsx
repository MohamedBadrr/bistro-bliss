"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const OurBlog = () => {
  return (
    <div className="bg-neutral-50 overflow-hidden">
      <div className="container py-30 items-center justify-center  flex flex-col gap-15 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center md:justify-between w-full flex-wrap  gap-3"
        >
          <h1 className="font-playfair text-[40px] font-semibold text-center ">
            Our Blog & Articles{" "}
          </h1>
          <div className="flex items-center justify-center gap-4 w-full md:w-fit">
            {" "}
            <Button>Read All Articles</Button>
          </div>
        </motion.div>
        <div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="flex gap-6 flex-wrap items-center justify-center  md:flex-nowrap"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0 }
              }}
              className="bg-white shadow-md rounded-lg w-full max-w-119 hover:scale-105 transition-all duration-400 cursor-pointer "
            >
              <Image
                height={456}
                width={636}
                alt="burger Image"
                src={"/assets/burgerImage.png"}
              />
              <div className="flex flex-col gap-4 px-9 pt-3 pb-2">
                <p className="text-[12px] opacity-60">January 3, 2023</p>
                <p>
                  The secret tips & tricks to prepare a perfect burger & pizza
                  for our customers
                </p>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet consectetur of a adipiscing
                  elitilmim semper adipiscing massa gravida nisi cras enim quis
                  nibholm varius amet gravida ut facilisis neque egestas.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                show: { opacity: 1, x: 0 }
              }}
              className="flex flex-col gap-5"
            >
              <div className="flex gap-4">
                <BlogCard
                  date="January 3, 2023"
                  src="/assets/fires.png"
                  desc="How to prepare the perfect french fries in an air fryer"
                />
                <BlogCard
                  date="January 3, 2023"
                  src="/assets/stre.png"
                  desc="How to prepare delicious chicken tenders"
                />
              </div>

              <div className="flex gap-4">
                <BlogCard
                  date="January 3, 2023"
                  src="/assets/cupcakes.png"
                  desc="7 delicious cheesecake recipes you can prepare"
                />

                <BlogCard
                  date="January 3, 2023"
                  src="/assets/pizza.png"
                  desc="5 great pizza restaurants you should visit this city"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
