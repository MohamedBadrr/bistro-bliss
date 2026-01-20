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
import { getAllUsers } from "@/services/user/getAllUsers";
import Image from "next/image";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { UpdateUserRole } from "@/services/user/UpdateUserRole";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { useQueryClient } from "@tanstack/react-query";
const UsersTab = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: getAllUsers,
  });

  const [search, setSearch] = useState("");
  const filteredCategories = useMemo(() => {
    if (!data) return [];
    return data?.filter((cate) => cate.name.includes(search));
  }, [data, search]);

  const { mutate } = useCustomMutation({
    mutationFn: UpdateUserRole,
    onError: () => {
      toast.error("some this went wrong.");
    },
    onSuccess: () => {
      toast.success("user Role Updated Successfully");
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USERS,
      });
    },
  });

  return (
    <div>
      <div className="mb-10 flex-col flex lg:flex-row max-md:gap-6 items-center  justify-center lg:justify-between w-full">
        <h1 className="text-[35px] font-playfair font-bold text-primary">
          All Users
        </h1>
      </div>
      <div>
        <Input
          placeholder="Search by user name..."
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
                {/* <TableHead className="w-25">#</TableHead> */}
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className=" ">Country</TableHead>
                {/* <TableHead className="">Number of Orders</TableHead> */}
                <TableHead className="">Admin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.length > 0 ? (
                filteredCategories?.map((user, index) => (
                  <TableRow
                    className="hover:bg-gray-200 transition-all duration-300"
                    key={index}
                  >
                    {/* <TableCell className="font-medium">{index + 1}</TableCell> */}
                    <TableCell>
                      <div className="space-x-2 flex items-center justify-start">
                        <Image
                          width={50}
                          height={50}
                          className="rounded-full w-12.5! h-12.5! "
                          src={user.image ?? "/assets/profileIamge.png"}
                          alt={user.name}
                        />
                        <p>{user.name}</p>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    {/* <TableCell className=" ">
                      {item.products.length > 0 ? (
                        item.products.map((product) => (
                          <span key={product.id} className="me-2">
                            {product.name},
                          </span>
                        ))
                      ) : (
                        <span>No products found</span>
                      )} 
                    </TableCell>*/}
                    <TableCell className=" ">
                      <div className="flex items-center justify.between ">
                        <div className="flex items-center ">
                          <Checkbox
                            checked={user.role === "ADMIN"}
                            onCheckedChange={() =>
                              mutate({
                                currentRole: user.role,
                                userId: user.id,
                              })
                            }
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    <NoData message="No Users Found" />
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

export default UsersTab;
