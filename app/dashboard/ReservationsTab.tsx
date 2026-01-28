"use client";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllReservations } from "@/services/reservations/getAllReservations";
import TableSkeleton from "@/skeletons/TableSKeleton";
import Error from "@/components/shared/Error";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import TableSKeleton from "@/skeletons/TableSKeleton";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import NoData from "@/components/shared/NoData";

const ReservationsTab = () => {
  const { data, isLoading, isError, error } = useCustomQuery({
    queryKey: ["reservations"],
    queryFn: getAllReservations,
  });
  const [search, setSearch] = useState("");
  const filteredCategories = useMemo(() => {
    if (!data) return [];
    return data?.filter((cate) =>
      cate.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [data, search]);
  if (isLoading) return <TableSkeleton />;
  if (isError)
    return <Error message={error?.message || "Failed to load reservations."} />;

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
              <TableHead>Phone</TableHead>
              <TableHead className=" ">Date</TableHead>
              <TableHead className=" ">Time</TableHead>
              <TableHead className=" text-right">Total Persons</TableHead>
              <TableHead className=" text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((reservation, index) => (
                <TableRow
                  key={reservation.id}
                  className="hover:bg-gray-200 transition-all duration-300"
                >
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell className=" ">{reservation.phone}</TableCell>
                  <TableCell className=" ">
                    {reservation.reservation_date}
                  </TableCell>
                  <TableCell className=" ">
                    {reservation.reservation_time}
                  </TableCell>
                  <TableCell className=" ">
                    {reservation.total_persons}
                  </TableCell>
                  <TableCell className=" ">{reservation.created_at}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  <NoData message="No Reservations Found" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </WithLoadingAndErrors>
  );
};

export default ReservationsTab;
