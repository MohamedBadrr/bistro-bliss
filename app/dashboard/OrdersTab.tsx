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
      <div className="">
        <WithLoadingAndErrors
          LoadingComponent={<TableSKeleton />}
          isError={isError}
          isLoading={isLoading}
          lengthOfData={data?.length || 0}
          noDataMessage="No orders found."
        >
          <div className="my-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">#</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Number of Products</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders?.length ?? 0 > 0 ? (
                  filteredOrders?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        <p className="font-medium text-foreground">
                          {item.id}
                        </p>
                      </TableCell>
                      <TableCell>
                        {item.order_products.length > 0 ? (
                          <p>{item.order_products.length}</p>
                        ) : (
                          <span className="text-muted-foreground">
                            No products found
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold text-foreground">
                          {item.total}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <DetailsOrderModal OrderItem={item} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      No orders found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </WithLoadingAndErrors>
      </div>
    </div>
  );
};

export default OrdersTab;
