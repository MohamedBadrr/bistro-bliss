"use client";

import { QUERY_KEYS } from "@/constants/QueryKeies";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { getCategories } from "@/services/categories/getCategories";
import DeleteCategoryButton from "./_Components/Category/DeleteCategoryButton";
import { AddUpdateCategoryModal } from "./_Components/Category/AddUpdateCategoryModal";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import NoData from "@/components/shared/NoData";
import TableSKeleton from "@/skeletons/TableSKeleton";
const CategoriesTab = () => {
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: QUERY_KEYS.CATEGORIES,
    queryFn: getCategories,
  });

  const [search, setSearch] = useState("");
  const filteredCategories = useMemo(() => {
    if (!data) return [];
    return data?.filter((cate) => cate.name.includes(search));
  }, [data, search]);

  return (
    <div>
      <div className="mb-10 flex-col flex lg:flex-row max-md:gap-6 items-center  justify-center lg:justify-between w-full">
        <h1 className="text-[35px] font-playfair font-bold text-primary">
          All Categories
        </h1>
        <AddUpdateCategoryModal Children={<Button>Add New Category</Button>} />
      </div>
      <div>
        <Input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <WithLoadingAndErrors
        LoadingComponent={<TableSKeleton />}
        isError={isError}
        isLoading={isLoading}
        lengthOfData={data?.length as number}
      >
        <div className="overflow-hidden rounded-lg my-5 border">
          <Table className="" style={{ borderRadius: 5 }}>
            <TableHeader className="p-8! bg-gray-200 font-semibold italic">
              <TableRow className="p-8!">
                <TableHead className="w-25">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Number of Products</TableHead>
                <TableHead className=" ">Products</TableHead>
                <TableHead className=" text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.length > 0 ? (
                filteredCategories?.map((item, index) => (
                  <TableRow
                    className="hover:bg-gray-200 transition-all duration-300"
                    key={item.id}
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="space-y-2 ">
                        <p>{item.name}</p>
                      </div>
                    </TableCell>
                    <TableCell>{item.products.length}</TableCell>
                    <TableCell className=" ">
                      {item.products.length > 0 ? (
                        item.products.map((product) => (
                          <span key={product.id} className="me-2">
                            {product.name},
                          </span>
                        ))
                      ) : (
                        <span>No products found</span>
                      )}
                    </TableCell>
                    <TableCell className=" ">
                      <div className="flex items-center justify-end gap-2">
                        <AddUpdateCategoryModal
                          Children={
                            <Button variant={"outline"} size={"icon"}>
                              <Edit />
                            </Button>
                          }
                          CategoryId={item.id}
                          CategoryName={item.name}
                        />

                        <DeleteCategoryButton id={item.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    <NoData message="No Categories Found" />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </WithLoadingAndErrors>
    </div>
  );
};

export default CategoriesTab;
