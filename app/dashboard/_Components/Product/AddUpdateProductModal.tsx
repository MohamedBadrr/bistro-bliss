"use client";
import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { addCategory } from "@/services/categories/addCategory";
import { updateCategory } from "@/services/categories/updateCategory";
import { useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { ReactNode, useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("Category name is Required").min(3),
});
export function AddUpdateCategoryModal({
  CategoryId,
  CategoryName,
  Children,
}: {
  CategoryId?: string;
  CategoryName?: string;
  Children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { mutate: AddCategoryMutate, isPending: AddCategoryPending } =
    useCustomMutation({
      mutationFn: addCategory,
      onError: (error) => {
        toast.error(
          error instanceof Error ? error.message : "Some thing went wrong"
        );
        setOpen(false);
      },
      onSuccess: () => {
        toast.success("Category added successfully.");
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.CATEGORIES,
        });
        setOpen(false);
      },
    });
  const { mutate: UpdateCategoryMutate, isPending: UpdateCategoryPending } =
    useCustomMutation({
      mutationFn: updateCategory,
      onError: (error) => {
        toast.error(
          error instanceof Error ? error.message : "Some thing went wrong"
        );
        setOpen(false);
      },
      onSuccess: () => {
        toast.success("Category Updated successfully.");
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.CATEGORIES,
        });
        setOpen(false);
      },
    });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{Children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <Formik
          enableReinitialize
          initialValues={{
            name: CategoryName ?? "",
          }}
          validationSchema={validationSchema}
          onSubmit={
            CategoryName
              ? (values) =>
                  UpdateCategoryMutate({
                    id: CategoryId ?? "",
                    name: values.name,
                  })
              : (values) =>
                  AddCategoryMutate({
                    name: values.name,
                  })
          }
        >
          {({ isValid }) => (
            <Form>
              <InputField
                label="Name"
                name={"name"}
                placeholder="Category Name"
              />
              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="w-50!"
                  disabled={!isValid}
                  isLoading={AddCategoryPending || UpdateCategoryPending}
                >
                  {CategoryId ? "Update Changes" : "Save Category"}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
