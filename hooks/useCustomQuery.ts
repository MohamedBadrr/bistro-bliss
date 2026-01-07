import { CustomError } from "@/types";
import {
  type QueryFunction,
  type QueryKey,
  type UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type CustomQueryOptions<TData> = Omit<
  UseQueryOptions<TData, CustomError>,
  "queryKey" | "queryFn"
> & {
  queryKey: QueryKey;
  queryFn: QueryFunction<TData, QueryKey>;
};

export function useCustomQuery<TData>({
  queryKey,
  queryFn,
  ...queryOptions
}: CustomQueryOptions<TData>) {
  const queryResult = useQuery<TData, CustomError>({
    queryKey,
    queryFn,
    ...queryOptions,
  });

  return queryResult;
}
