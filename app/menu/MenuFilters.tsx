"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const MenuFilters = () => {
  const [selectedFilter, setSelcetedFilters] = useState("All");
  const filters = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];
  const handleClickFilter = (filter: string) => {
    setSelcetedFilters(filter);
  };
  return (
    <div className="flex items-center justify-center flex-wrap gap-1 md:gap-5">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => handleClickFilter(filter)}
          variant={selectedFilter === filter ? "default" : "outline"}
          className="my-2 md:my-0"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default MenuFilters;
