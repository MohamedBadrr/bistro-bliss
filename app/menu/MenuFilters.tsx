"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import { getCategories } from "@/services/categories/getCategories";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MenuFilters = ({ setFilter }: { setFilter: (value: string) => void }) => {
  const [selectedFilter, setSelectedFilters] = useState("All");

  const { data, isLoading, isError } = useCustomQuery({
    queryFn: getCategories,
    queryKey: QUERY_KEYS.CATEGORIES,
  });

  const handleSelect = (label: string, value: string) => {
    setSelectedFilters(label);
    setFilter(value);
  };

  const allOptions = [
    { id: "", name: "All" },
    ...(data ?? []),
  ];

  return (
    <WithLoadingAndErrors
      LoadingComponent={<></>}
      isError={isError}
      isLoading={isLoading}
      lengthOfData={data?.length as number}
      noDataMessage="No Categories found now, Coming soon."
    >
      <div className="md:hidden w-full px-4">
        <Select

          value={selectedFilter}
          onValueChange={(val) => {
            const option = allOptions.find((o) => o.name === val);
            if (option) handleSelect(option.name, option.id);
          }}
        >
          <SelectTrigger
            className="w-full rounded-full bg-white border-2 border-primary/30
                       bg-white text-neutral-700 font-semibold shadow-sm
                        transition-all"
          >
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent className="rounded-xl shadow-xl bg-white">
            {allOptions.map((option) => (
              <SelectItem
                key={option.id || "all"}
                value={option.name}
                className="font-medium cursor-pointer"
              >
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="hidden md:flex items-center 
      justify-center flex-wrap gap-2 py-2 px-2">
        {allOptions.map((option) => {
          const isActive = selectedFilter === option.name;
          return (
            <button
              key={option.id || "all"}
              onClick={() => handleSelect(option.name, option.id)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold
                         transition-colors duration-200 cursor-pointer outline-none
                         focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary shadow-md"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
              </AnimatePresence>

              <span
                className={`relative z-10 transition-colors duration-200 ${isActive ? "text-white" : "text-neutral-600 hover:text-primary"
                  }`}
              >
                {option.name}
              </span>
            </button>
          );
        })}
      </div>
    </WithLoadingAndErrors>
  );
};

export default MenuFilters;
