"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatter";
import { ProductExtra } from "@/types/Products";
import { useFormikContext } from "formik";
type FormValues = {
  extras?: ProductExtra[];
};
const Extras = ({ extras }: { extras: ProductExtra[] }) => {
  const { values, setFieldValue } = useFormikContext<FormValues>();
  const selectedExtras = values.extras || [];

  const handleExtra = (extra: ProductExtra) => {
    const existExtra = selectedExtras.find((ex) => ex.id === extra.id);

    if (existExtra) {
      setFieldValue(
        "extras",
        selectedExtras.filter((e) => e.id !== extra.id)
      );
    } else {
      setFieldValue("extras", [...selectedExtras, extra]);
    }
  };
  return (
    <div>
      <p className="text-primary mx-auto text-center font-bold">Extras ?</p>
      {extras.map((extra) => (
        <div
          key={extra.id}
          className="flex items-center space-x-2 my-3 border border-gray-100 rounded-md p-4"
        >
          <Checkbox
            id={extra.id.toString()}
            onClick={() => handleExtra(extra)}
            checked={Boolean(selectedExtras.find((e) => e.id === extra.id))}
          />
          <Label
            htmlFor={extra.id.toString()}
            className="text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {extra.name} {formatCurrency(extra.price)}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default Extras;
