import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Skeleton from "react-loading-skeleton";

const TableSKeleton = () => {
  return (
    <div className="w-full border rounded-md!">
      <Table className="w-full! rounded-md!">
        <TableHeader className="p-8! bg-gray-200 font-semibold italic">
          <TableRow className="p-8!">
            <TableHead className="">
              <Skeleton className="mt-5 w-25! h-2" />
            </TableHead>
            <TableHead>
              {" "}
              <Skeleton className="mt-5 w-25! h-2" />
            </TableHead>
            <TableHead>
              {" "}
              <Skeleton className="mt-5 w-25! h-2" />
            </TableHead>
            <TableHead className=" ">
              {" "}
              <Skeleton className="mt-5 w-25! h-2" />
            </TableHead>
            <TableHead className=" ">
              {" "}
              <Skeleton className="mt-5 w-25! h-2" />
            </TableHead>
            <TableHead className=" text-right">
              {" "}
              <Skeleton className="mt-5 w-25! h-2" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }, (index: number) => (
            <TableRow
              key={index}
              className="hover:bg-gray-200 transition-all duration-300"
            >
              <TableCell className="font-medium">
                {" "}
                <Skeleton className="mt-5 w-25! h-2" />
              </TableCell>
              <TableCell>
                <div className="space-y-2 ">
                  <Skeleton className="mt-5 w-25! h-2" />
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="mt-5 w-25! h-2" />
              </TableCell>
              <TableCell className=" ">
                <Skeleton className="mt-5 w-25! h-2" />
              </TableCell>
              <TableCell className=" ">
                <Skeleton className="mt-5 w-25! h-2" />
              </TableCell>
              <TableCell className=" ">
                <Skeleton className="mt-5 w-25! h-2" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableSKeleton;
