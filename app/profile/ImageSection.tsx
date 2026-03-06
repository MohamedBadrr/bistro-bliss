"use client";
import Image from "next/image";
import { useState } from "react";
import { CameraIcon } from "lucide-react";

type Props = {
  userImage?: string | null;
  onFileSelected?: (file: File | null) => void;
};

const ImageSection = ({ userImage, onFileSelected }: Props) => {
  const [selectedImage, setSelectedImage] = useState(
    userImage || "/assets/profileIamge.png",
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    onFileSelected?.(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };

  const isBlob = selectedImage.startsWith("blob:");

  return (
    <div className="group relative w-[200px] h-[200px] rounded-full overflow-hidden">
      <Image
        src={selectedImage}
        alt="profile image"
        fill
        sizes="200px"
        className="object-cover"
        unoptimized={isBlob}
      />

      <div className="absolute inset-0 flex lg:hidden group-hover:flex items-center justify-center bg-black/40">
        {" "}
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
  );
};

export default ImageSection;
