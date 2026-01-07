"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import { getCategories } from "@/services/categories/getCategories";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";

const MenuFilters = ({ setFilter }: { setFilter: (value: string) => void }) => {
  const [selectedFilter, setSelectedFilters] = useState("All");
  const { data, isLoading, isError } = useCustomQuery({
    queryFn: getCategories,
    queryKey: QUERY_KEYS.CATEGORIES,
  });
  console.log("data category", data);

  const handleClickFilter = (filter: string) => {
    setSelectedFilters(filter);
  };
  return (
    <WithLoadingAndErrors
      LoadingComponent={<></>}
      isError={isError}
      isLoading={isLoading}
      lengthOfData={data?.length as number}
      noDataMessage="No Categories found now, Coming soon."
    >
      <div className="flex items-center justify-center flex-wrap gap-1 md:gap-5">
        <Button
          key={"All"}
          onClick={() => {
            handleClickFilter("All");
            setFilter("");
          }}
          variant={selectedFilter === "All" ? "default" : "outline"}
          className="mt-2 md:my-0 py-0! rounded-md!"
        >
          All
        </Button>
        {data?.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => {
              handleClickFilter(filter.name);
              setFilter(filter.id);
            }}
            variant={selectedFilter === filter.name ? "default" : "outline"}
            className="mt-2 md:my-0 py-0! rounded-md!"
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </WithLoadingAndErrors>
  );
};

export default MenuFilters;
