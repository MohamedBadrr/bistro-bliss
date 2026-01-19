"use client";

import { QUERY_KEYS } from "@/constants/QueryKeies";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getProducts } from "@/services/products/getProducts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import ProductActions from "./_Components/Product/ProductActions";
import TableSKeleton from "@/skeletons/TableSKeleton";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
const ProductsTab = () => {
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: getProducts,
  });

  const [search, setSearch] = useState("");
  const filteredCategories = useMemo(() => {
    if (!data) return [];
    return data?.filter((cate) => cate.name.includes(search));
  }, [data, search]);

  return (
    <WithLoadingAndErrors
      LoadingComponent={<TableSKeleton />}
      isError={isError}
      isLoading={isLoading}
      lengthOfData={data?.length as number}
      noDataMessage="No items for now, coming soon."
    >
      <div className=" mb-10 flex flex-col lg:flex-row max-md:gap-5 items-center justify-between w-full">
        <h1 className="text-[35px] font-playfair font-bold text-primary">
          All Products
        </h1>
        <Button>
          <Link href={"/dashboard/add"}>Add New Product</Link>
        </Button>
      </div>
      <div className="-mt-5!">
        <Input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-hidden rounded-lg my-5 border">
        <Table className="" style={{ borderRadius: 5 }}>
          <TableHeader className="p-8! bg-gray-200 font-semibold italic">
            <TableRow className="p-8!">
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className=" ">price</TableHead>
              <TableHead className=" ">Extras</TableHead>
              <TableHead className=" text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCategories?.map((item, index) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-200 transition-all duration-300"
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="space-y-2 ">
                    <Image
                      alt={item.name}
                      src={item.image ?? "/assets/placholderIamge.jpg"}
                      width={40}
                      height={40}
                      className="w-10! h-10! rounded-full"
                    />
                    <p>{item.name}</p>
                  </div>
                </TableCell>
                <TableCell>{item.categories?.name}</TableCell>
                <TableCell className=" ">{item.price}$</TableCell>
                <TableCell className=" ">
                  {item.product_extras.map((extra) => (
                    <span key={extra.id} className="me-2">
                      {extra.name},
                    </span>
                  ))}
                </TableCell>
                <TableCell className=" ">
                  <ProductActions product={item} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </WithLoadingAndErrors>
  );
};

export default ProductsTab;
