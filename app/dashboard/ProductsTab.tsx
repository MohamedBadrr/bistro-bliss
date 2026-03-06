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
    return data?.filter((cate) =>
      cate.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [data, search]);

  return (
    <div>
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
      <WithLoadingAndErrors
        LoadingComponent={<TableSKeleton />}
        isError={isError}
        isLoading={isLoading}
        lengthOfData={data?.length as number}
        noDataMessage="No items for now, coming soon."
      >
        <div className="my-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Extras</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories?.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center span gap-3">
                      <Image
                        alt={item.name}
                        src={item.image ?? "/assets/placholderIamge.jpg"}
                        width={40}
                        height={40}
                        className="rounded-full w-7! h-7! object-cover"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-foreground">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.categories?.name}</TableCell>
                  <TableCell>{item.price}$</TableCell>
                  <TableCell>
                    {item.product_extras.map((extra) => (
                      <span
                        key={extra.id}
                        className="me-2 text-muted-foreground"
                      >
                        {extra.name},
                      </span>
                    ))}
                  </TableCell>
                  <TableCell>
                    <ProductActions product={item} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </WithLoadingAndErrors>
    </div>
  );
};

export default ProductsTab;
