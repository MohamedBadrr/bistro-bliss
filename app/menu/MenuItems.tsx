"use client";
import MenuItem from "./MenuItem";
import { getProducts } from "@/services/products/getProducts";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { useCustomQuery } from "../hooks/useCustomQuery";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData?.map((item) => (
            <MenuItem
              description={item.description}
              id={item.id}
              image={item.image}
              price={item.price}
              key={item.id}
              created_at={item.created_at}
              name={item.name}
              product_extras={item.product_extras}
              product_sizes={item.product_sizes}
              category_id={item.category_id}
            />
          ))}
        </div>
      </WithLoadingAndErrors>
    </>
  );
};

export default MenuItems;
