"use client";
import { Button } from "@/components/ui/button";
import { useFormikContext } from "formik";
import { Plus, TrashIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { AddProductFormValues } from "@/validations/types";
type ItemOptions = {
  ButtonText: string;
  field: "sizes" | "extras";
};
const ItemOptions = ({ ButtonText, field }: ItemOptions) => {
  const SIZE_OPTIONS = ["SMALL", "MEDIUM", "LARGE"];
  const { values, setFieldValue } = useFormikContext<AddProductFormValues>();
  const items = values[field] ?? [];

  const addItem = () => {
    setFieldValue(field, [...items, { name: "", price: 0 }]);
  };

  const updateItem = (index: number, key: "name" | "price", value: string) => {
    const updateItems = [...items];
    updateItems[index] = {
      ...updateItems[index],
      [key]: key === "price" ? Number(value) : value,
    };
    setFieldValue(field, updateItems);
  };

  const deleteItem = (index: number) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setFieldValue(field, filteredItems);
  };
  
  const selectedSizes = items.map((i) => i.name);
  return (
    <div className="">
      {" "}
      {
        <div className="flex items-center justify-center flex-col gap-2">
          {items &&
            items.map((item, index) => (
              <div
                className="flex flex-col lg:flex-row items-center justify-center gap-3 mt-2 mb-4"
                key={index}
              >
                {field === "sizes" ? (
                  <div className=" w-full">
                    <p>Name :</p>
                    <Select
                      value={item.name}
                      onValueChange={(value) =>
                        updateItem(index, "name", value)
                      }
                    >
                      <SelectTrigger className="w-full!">
                        <SelectValue
                          placeholder="Choose size"
                          className="w-full"
                        />
                      </SelectTrigger>

                      <SelectContent position="popper" className="bg-white">
                        {SIZE_OPTIONS.filter(
                          (size) =>
                            size === item.name || !selectedSizes.includes(size)
                        ).map((size, index) => (
                          <SelectItem key={index} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <div>
                    <p>Name :</p>
                    <Input
                      value={item.name}
                      onChange={(e) =>
                        updateItem(index, "name", e.target.value)
                      }
                    />
                  </div>
                )}
                <div>
                  <p>Price :</p>
                  <Input
                    value={item.price}
                    onChange={(e) => updateItem(index, "price", e.target.value)}
                  />
                </div>
                <Button
                  onClick={() => deleteItem(index)}
                  size={"icon"}
                  type="button"
                  className="mt-3"
                >
                  <TrashIcon />
                </Button>
              </div>
            ))}
        </div>
      }
      {field === "sizes" && selectedSizes.length >= 3 ? (
        <></>
      ) : (
        <Button
          type="button"
          variant={"outline"}
          onClick={addItem}
          className="py-2! rounded-md! w-full"
        >
          <Plus />
          {ButtonText}
        </Button>
      )}
    </div>
  );
};

export default ItemOptions;
