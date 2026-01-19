"use client";
import { DeleteComfermation } from "@/components/shared/DeleteComfermation";
import { Button } from "@/components/ui/button";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteProduct } from "@/services/products/deleteProduct";
import { Product } from "@/types/Product";
import { useQueryClient } from "@tanstack/react-query";
import { Edit, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProductActions = ({ product }: { product: Product }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useCustomMutation({
    mutationFn: () => deleteProduct(product.id),
    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PRODUCTS,
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CATEGORIES,
      });
    },
    onError: () => {
      toast.error("Some thing went wrong");
    },
  });
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => router.push(`/dashboard/add?id=${product.id}`)}
      >
        <Edit />
      </Button>
      <DeleteComfermation
        ActionButton={
          <Button onClick={mutate} size={"default"} isLoading={isPending}>
            Delete
          </Button>
        }
        Dilaogdesc="Are you sure to delete this product?"
        trigger={
          <Button size={"icon"}>
            <TrashIcon />
          </Button>
        }
      />
    </div>
  );
};

export default ProductActions;
