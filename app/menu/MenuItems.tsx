"use client";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { getProducts } from "@/services/products/getProducts";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import MenuPageLoading from "@/skeletons/product/MenuPageLoading";
import { useState } from "react";
import MenuFilters from "./MenuFilters";

const MenuItems = () => {
  const [filter, setFilter] = useState("");
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: getProducts,
  });
  const filteredData =
    filter === "" ? data : data?.filter((item) => item.category_id === filter);

  return (
    <>
      <MenuFilters setFilter={setFilter} />
      <WithLoadingAndErrors
        LoadingComponent={<MenuPageLoading />}
        isError={isError}
        isLoading={isLoading}
        lengthOfData={filteredData?.length as number}
        noDataMessage="No items for now, coming soon."
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredData?.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
            >
              <MenuItem
                description={item.description}
                id={item.id}
                image={item.image}
                price={item.price}
                created_at={item.created_at}
                name={item.name}
                product_extras={item.product_extras}
                product_sizes={item.product_sizes}
                category_id={item.category_id}
                categories={item.categories}
                updated_at={item.updated_at}
              />
            </motion.div>
          ))}
        </motion.div>
      </WithLoadingAndErrors>
    </>
  );
};

export default MenuItems;
