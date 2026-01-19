  "use client";
  import Image from "next/image";
  import { useMemo, useState, useEffect } from "react";
  import { CameraIcon } from "lucide-react";
  import { useFormikContext } from "formik";
  import { AddProductFormValues } from "@/validations/types";

  type Props = {
    userImage?: string | null;
    productImage?: string;
    onFileSelected?: (file: File | null) => void;
  };

  const UploadImage = ({ userImage, productImage, onFileSelected }: Props) => {
    const { setFieldValue, errors } = useFormikContext<AddProductFormValues>();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const src = useMemo(() => {
      return (
        previewUrl ?? productImage ?? userImage ?? "/assets/placholderIamge.jpg"
      );
    }, [previewUrl, productImage, userImage]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] ?? null;

      onFileSelected?.(file);
      setFieldValue("file", file);

      if (previewUrl) URL.revokeObjectURL(previewUrl);

      if (file) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    };

    useEffect(() => {
      return () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
      };
    }, [previewUrl]);

    const isBlob = src.startsWith("blob:");

    return (
      <div className="relative flex flex-col gap-3 items-center justify-start">
        <div className="group relative w-50! h-50! rounded-full overflow-hidden">
          <Image
            src={src}
            alt="Product"
            fill
            sizes="200px"
            className="object-cover w-50! rounded-full! h-50! border! border-black!"
            unoptimized={isBlob}
          />
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="image-upload"
              onChange={handleImageChange}
            />
            <label
              htmlFor="image-upload"
              className="border rounded-full p-3 cursor-pointer"
            >
              <CameraIcon className="w-8 h-8 text-accent" />
            </label>
          </div>
        </div>

        {errors.file ? (
          <p className="text-red-500">{String(errors.file)}</p>
        ) : null}
      </div>
    );
  };

  export default UploadImage;
