import { ContactUsFormValues } from "@/types";
import { useFormikContext } from "formik";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface InputFieldProps {
  label: string;
  name: keyof ContactUsFormValues;
  placeholder: string;
  type?: "input" | "textarea";
  className?: string;
}
const InputField = ({
  label,
  name,
  placeholder,
  type = "input",
  className = "",
}: InputFieldProps) => {
  const { values, handleBlur, errors, touched, handleChange } =
    useFormikContext<ContactUsFormValues>();
  return (
    <div className="w-full">
      <Label className="mb-3 ms-1">{label}</Label>
      {type === "input" ? (
        <Input
          name={name}
          placeholder={placeholder}
          className={className}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <Textarea
          name={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {errors[name] && touched[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name] as string}</p>
      )}
    </div>
  );
};

export default InputField;
