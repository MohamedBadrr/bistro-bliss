"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatter";
import { ProductSize } from "@/types/Products";
import { useFormikContext } from "formik";

export function PickSize({
  sizes,
  itemPrice,
}: {
  sizes: ProductSize[];
  itemPrice: number;
}) {
  const { values, setFieldValue } = useFormikContext<{ size: ProductSize }>();
  const selectedSize = values.size;;
    const handelSelect = (value: ProductSize) => {
      setFieldValue("size", value);
    };
  return (
    <RadioGroup defaultValue="comfortable" className="mb-5">
      <p className="text-primary mx-auto font-bold">Pick your Size</p>
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem
            value={selectedSize.size}
            checked={selectedSize.id === size.id}
            onClick={() => handelSelect(size)}
            id={size.id.toString()}
          />
          <Label htmlFor={size.id.toString()}>
            {size.size} {formatCurrency(size.price + itemPrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
