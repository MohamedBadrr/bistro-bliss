"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { PickSize } from "./PickSize";
import Divider from "@/components/shared/Divider";
import Extras from "./Extras";
import { Form, Formik } from "formik";
import { useCart } from "@/store/cart.store";
import { useState } from "react";
import { formatCurrency } from "@/lib/formatter";
import { toast } from "sonner";
import { Product, ProductExtra, ProductSize } from "@/types/Product";

type AddToCartFormValues = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size?: ProductSize;
  extras?: ProductExtra[];
};

const AddToCardButton = (item: Product) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { cart, addToCart } = useCart();
  const existItem = cart.find((i) => i.id === item.id);
  const initialValues: AddToCartFormValues = {
    basePrice: existItem?.basePrice ?? item.price,
    id: existItem?.id ?? item.id,
    image: existItem?.image ?? item.image,
    name: item.name,
    extras: existItem?.extras ?? [],
    size: existItem?.size ?? item.product_sizes[0],
  };
  // let totalPrice = item.price;

  const handleAddToCart = (item: AddToCartFormValues) => {
    addToCart(item);
    setOpenDialog(false);
    toast.success("Dish added to your Cart.")
  };
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild className="">
        <Button
          className="rounded-full w-full! my-2
      hover:bg-white/90 hover:text-primary
      group-hover:bg-white group-hover:text-primary "
          size="sm"
        >
          Add Dish
        </Button>
      </DialogTrigger>
      <Formik initialValues={initialValues} onSubmit={handleAddToCart}>
        {({ values }) => (
          <DialogContent className="sm:max-w-106.25 bg-white max-h-[80vh] overflow-y-auto">
            <Form>
              <DialogHeader className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="mb-2"
                />
                <DialogTitle>{item.name}</DialogTitle>
                <DialogDescription className="text-center">
                  {item.description}
                </DialogDescription>
              </DialogHeader>
              <div className="">
                <Divider />

                <PickSize itemPrice={item.price} sizes={item.product_sizes} />
                <Divider />
                <Extras extras={item.product_extras} />
              </div>
              <DialogFooter className="flex flex-col">
                <Button
                  type="submit"
                  size={"sm"}
                  className="rounded-full px-4 py-4 w-full"
                >
                  Add Dish To Basket{" "}
                  {formatCurrency(
                    item.price +
                      (values.size?.price ?? 0) +
                      (values.extras?.reduce(
                        (sum, extra) => sum + (extra.price ?? 0),
                        0
                      ) ?? 0)
                  )}
                </Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddToCardButton;
