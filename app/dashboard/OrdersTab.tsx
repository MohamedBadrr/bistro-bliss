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
import TableSKeleton from "@/skeletons/TableSKeleton";
import { getAllOrders } from "@/services/orders/getAllOrders";
import DetailsOrderModal from "../orders/_components/DetailsOrderModal";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
const OrdersTab = () => {
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: QUERY_KEYS.ALL_ORDERS,
    queryFn: getAllOrders,
  });

  const [search, setSearch] = useState("");
  const filteredOrders = useMemo(() => {
    if (!data) return [];
    return data?.filter((order) => order.id.includes(search));
  }, [data, search]);

  return (
    <div>
      <div className="mb-10 flex-col flex lg:flex-row max-md:gap-6 items-center  justify-center lg:justify-between w-full">
        <h1 className="text-[35px] font-playfair font-bold text-primary">
          All Orders
        </h1>
      </div>
      <div className="mb-6">
        <Input
          placeholder="Search by orderID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="border rounded">
        <WithLoadingAndErrors
          LoadingComponent={<TableSKeleton />}
          isError={isError}
          isLoading={isLoading}
          lengthOfData={data?.length || 0}
          noDataMessage="No orders found."
        >
          <Table className="" style={{ borderRadius: 5 }}>
            <TableHeader className="p-8! bg-gray-200 font-semibold italic">
              <TableRow className="p-8!">
                <TableHead className="w-25">#</TableHead>
                <TableHead>OrderID</TableHead>
                <TableHead>Number of Products</TableHead>
                <TableHead className=" ">Total</TableHead>
                <TableHead className=" text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders?.length ?? 0 > 0 ? (
                filteredOrders?.map((item, index) => (
                  <TableRow
                    className="hover:bg-gray-200 transition-all duration-300"
                    key={index}
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="space-y-2 ">
                        <p>{item.id}</p>
                      </div>
                    </TableCell>
                    {/* <TableCell>{item.products.length}</TableCell> */}
                    <TableCell className=" ">
                      {item.order_products.length > 0 ? (
                        <p>{item.order_products.length}</p>
                      ) : (
                        <span>No products found</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2 ">
                        <p className="">{item.total}</p>
                      </div>
                    </TableCell>
                    <TableCell className=" ">
                      <div className="flex items-center justify-end gap-2">
                        <DetailsOrderModal OrderItem={item} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    {/* <NoData message="No Categories Found" /> */}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </WithLoadingAndErrors>
      </div>
    </div>
  );
};

export default OrdersTab;
