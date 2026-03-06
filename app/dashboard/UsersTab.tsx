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
    return data?.filter((cate) =>
      cate.name.toLowerCase().includes(search.toLowerCase())
    );
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
        <div className="overflow-x-auto my-5">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Admin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.length > 0 ? (
                filteredCategories?.map((user, index) => (
                  <TableRow className="w-full" key={index}>
                    <TableCell className="w-full whitespace-normal min-w-[200px]">
                      <div className="flex items-center gap-3">
                        <Image
                          width={50}
                          height={50}
                          className="rounded-full object-cover"
                          src={user.image ?? "/assets/profileIamge.png"}
                          alt={user.name}
                        />
                        <p className="font-medium text-foreground">
                          {user.name}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-normal">
                      {user.email}
                    </TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
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
