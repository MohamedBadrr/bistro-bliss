"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getMyOrders } from "@/services/orders/getMyOrders";
import TableSKeleton from "@/skeletons/TableSKeleton";
import DetailsOrderModal from "./DetailsOrderModal";
import NoData from "@/components/shared/NoData";

const MyOrdersTable = ({ userId }: { userId: string }) => {
  const { data, isLoading, isError } = useCustomQuery({
    queryFn: () => getMyOrders(userId),
    queryKey: QUERY_KEYS.MY_ORDERS,
  });

  return (
    <div>
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
            {data?.length ?? 0 > 0 ? (
              data?.map((item, index) => (
                <TableRow
                  className="hover:bg-gray-200 transition-all duration-300"
                  key={index + 1}
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
                  <NoData message="No Orders Found" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </WithLoadingAndErrors>
    </div>
  );
};

export default MyOrdersTable;
