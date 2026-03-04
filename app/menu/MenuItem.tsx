"use client";
import Image from "next/image";
import AddToCardButton from "./AddToCardButton";
import { Product } from "@/types/Product";
import { motion } from "framer-motion";

const MenuItem = (props: Product) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl
                 bg-white border border-neutral-200 shadow-md
                 hover:shadow-2xl hover:border-primary/30
                 transition-shadow duration-300 w-full md:max-w-76.5 h-full"
    >
      {/* Image wrapper with overlay */}
      <div className="relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <Image
            alt={props.name ?? "menu image"}
            src={props.image ?? "/assets/placholderIamge.jpg"}
            className="w-full! h-56! object-cover"
            width={400}
            height={224}
          />
        </motion.div>

        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        />

        {/* Price badge */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="absolute top-3 right-3 bg-primary text-white text-sm font-bold
                       px-3 py-1 rounded-full shadow-lg font-playfair"
        >
          ${props.price}
        </motion.div>
      </div>

      {/* Card body */}
      <div className="flex flex-col items-center gap-2 px-4 py-4 flex-1">
        {/* Name */}
        <p className="text-lg font-bold text-neutral-800 group-hover:text-primary
                      font-playfair transition-colors duration-300 text-center leading-tight">
          {props.name}
        </p>

        {/* Divider */}
        <motion.div
          className="h-0.5 bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "2rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Description */}
        <p className="text-xs text-neutral-500 text-center leading-relaxed line-clamp-2">
          {props.description}
        </p>

        {/* Add to cart button */}
        <div className="w-full mt-auto pt-2">
          <AddToCardButton
            description={props.description}
            id={props.id}
            image={props.image ?? "/assets/placholderIamge.jpg"}
            price={props.price}
            name={props.name}
            key={props.id}
            created_at={props.created_at}
            product_extras={props.product_extras}
            product_sizes={props.product_sizes}
            category_id={props.category_id}
            categories={props.categories}
            updated_at={props.updated_at}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
