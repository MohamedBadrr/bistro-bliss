"use client";
import InputField from "@/components/fields/InputField";
import UploadImage from "./components/UploadImage";
import { Form, Formik } from "formik";
import { Category } from "@/types/Category";
import { SelectField } from "@/components/fields/SelectField";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ItemOptions from "./components/ItemOptions";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { addProduct } from "@/services/products/addNewProduct";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { useState } from "react";
import { AddProductValidationSchema } from "@/validations";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getProductById } from "@/services/products/getProductById";
import {
  AddProductFormValues,
  ProductSizeFormValues,
} from "@/validations/types";
import {
  updateProduct,
  UpdateProductFormValues,
} from "@/services/products/updateProduct";

const AddUpdateProductForm = ({
  categories,
  productId,
}: {
  categories: Category[];
  productId: string;
}) => {
  const [imageKey, setImageKey] = useState(0);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: product } = useCustomQuery({
    queryKey: QUERY_KEYS.PRODUCT_BY_ID(productId),
    queryFn: () => getProductById(productId!),
    enabled: !!productId,
  });
  const isEdit = !!productId;

  const { mutate, isPending } = useCustomMutation({
    mutationFn: (values: ProductSizeFormValues | UpdateProductFormValues) =>
      isEdit
        ? updateProduct({
            ...(values as UpdateProductFormValues),
            id: productId,
          })
        : addProduct(values as AddProductFormValues),
    onError: (error) => toast.error(error.message ?? "Some thing went wrong."),
    onSuccess: () => {
      if (isEdit)
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.PRODUCT_BY_ID(productId),
        });
      toast.success(
        isEdit ? "Product Updated Successfully" : "Product Added Successfully"
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PRODUCTS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CATEGORIES });
    },
  });
  return (
    <div className="pt-25 pb-15 container min-h-screen">
      <div className="flex items-center gap-2 lg:gap-50">
        <Button size={"icon"} variant={"outline"} onClick={() => router.back()}>
          <ArrowLeft />
        </Button>
        <h1 className="my-8 text-[30px] lg:text-[35px]  text-center font-semibold text-primary italic ">
          {productId ? `Update ${product?.name}` : "Add New Product"}
        </h1>
      </div>
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            name: product?.name ?? "",
            description: product?.description ?? "",
            price: product?.price ?? 0,
            category: product?.category_id ?? "",
            sizes:
              product?.product_sizes.map((size) => ({
                name: size.size,
                price: size.price,
              })) ?? [],
            extras:
              product?.product_extras.map((extra) => ({
                name: extra.name,
                price: extra.price,
              })) ?? [],
            file: null,
          }}
          validationSchema={AddProductValidationSchema(
            productId ? true : false
          )}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess: () => {
                resetForm();
                setImageKey((k) => k + 1);
              },
            });
          }}
        >
          {({ isValid }) => (
            <Form className="flex gap-5 flex-col lg:flex-row">
              <UploadImage key={imageKey} productImage={product?.image} />

              <div className="w-full flex flex-col gap-5">
                <InputField
                  name={"name"}
                  label="Product name"
                  placeholder="Product Name"
                  type="input"
                />
                <InputField
                  name={"description"}
                  label="Product Description"
                  placeholder="Product Description"
                  type="input"
                />
                <InputField
                  name={"price"}
                  label="Base Price"
                  placeholder="Product Base Price"
                  type="input"
                />
                <SelectField
                  Title="Category"
                  name="category"
                  label="Category"
                  options={categories.map((category) => ({
                    value: category.id,
                    label: category.name,
                  }))}
                  placeholder="Select Your Category"
                />
                <div className="flex gap-5">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Sizes</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <ItemOptions ButtonText="Add Item Size" field="sizes" />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Extras</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <ItemOptions
                          ButtonText="Add Item Extra"
                          field="extras"
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex w-full gap-2 items-center justify-center">
                  <Button
                    type="submit"
                    className="w-1/2"
                    isLoading={isPending}
                    disabled={!isValid}
                  >
                    {productId ? `Update Product` : "Add New Product"}
                  </Button>
                  <Button
                    variant={"outline"}
                    type="reset"
                    className="w-1/2"
                    isLoading={isPending}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddUpdateProductForm;
