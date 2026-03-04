"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import MenuCard from "./MenuCard";
import { motion } from "framer-motion";

const BrowseOurMenu = () => {
  return (
    <div className="container my-23 mp-30">
      <div className="flex items-center justify-center flex-col gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-[50px] text-primary"
        >
          Browse Our Menu
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center items-center place-items-center"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <MenuCard
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrowseOurMenu;

const menuItems = [
  {
    title: "Breakfast",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/teaIcon.svg",
  },
  {
    title: "Main Dishes",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/DishesIcon.svg",
  },
  {
    title: "Drinks",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/DrinkIcon.svg",
  },
  {
    title: "Desserts",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    imageSrc: "/assets/icons/DesertIcon.svg",
  },
];
