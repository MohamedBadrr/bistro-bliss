import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useFormikContext } from "formik";
import { Label } from "../ui/label";

export function SelectField({
  placeholder,
  options,
  name,
  Title,
  labelClassName,
  label,
}: {
  placeholder: string;
  name: string;
  Title: string;
  label: string;
  options: { label: string; value: string }[];
  labelClassName?: string;
}) {
  const { values, setFieldValue, errors } =
    useFormikContext<Record<string, unknown>>();

  return (
    <>
      <Label className={cn("mb-0 ms-1", labelClassName)}>{label}</Label>
      <Select
        onValueChange={(value) => setFieldValue(name, value)}
        value={(values[name] as string) || ""}
      >
        <SelectTrigger className="w-full bg-white  mt-0!    border-neutral-200 rounded-full">
          <SelectValue className="rounded-md! " placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper" className="bg-white">
          <SelectGroup>
            <SelectLabel className="font-bold text-primary">
              {Title}
            </SelectLabel>
            {options.map((option) => (
              <SelectItem
                className="hover:bg-gray-200!"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errors[name] && <p className="text-red-500 mb-1 -mt-3"> {errors[name]}</p>}
    </>
  );
}
