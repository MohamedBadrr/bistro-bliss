import { CustomError } from "@/types";
import { type UseMutationOptions, useMutation } from "@tanstack/react-query";

type CustomMutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, CustomError, TVariables>,
  "mutationFn"
> & {
  mutationFn: (variables: TVariables) => Promise<TData>;
};

export function useCustomMutation<TData = unknown, TVariables = unknown>({
  mutationFn,
  ...mutationOptions
}: CustomMutationOptions<TData, TVariables>) {
  const mutationResult = useMutation({
    ...mutationOptions,
    mutationFn: mutationFn,
  });

  return mutationResult;
}
