// "use client";
import { useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";

interface InputFieldProps<T extends FormikValues> {
  label: string;
  name: keyof T;
  placeholder: string;
  type?: "input" | "textarea" | "password" | "email" | "number" | "date" | "time";
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
}

const InputField = <T extends FormikValues>({
  label,
  name,
  placeholder,
  type = "input",
  className = "",
  labelClassName = "",
  disabled = false,
}: InputFieldProps<T>) => {
  const { values, handleBlur, errors, touched, handleChange } =
    useFormikContext<T>();

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type === "input"
      ? "text"
      : type;

  return (
    <div className="w-full relative">
      <Label className={cn("mb-3 ms-1", labelClassName)}>{label}</Label>

      {type === "textarea" ? (
        <Textarea
          name={name as string}
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
      ) : (
        <>
          <Input
            name={name as string}
            type={inputType}
            placeholder={placeholder}
            className={className + (type === "password" ? " pr-10" : "")}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[40px]! right-3 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          )}
        </>
      )}

      {errors[name] && touched[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name] as string}</p>
      )}
    </div>
  );
};

export default InputField;
