import { cn } from "@/lib/utils";
import React from "react";

const HeadingWithTitle = ({
  subTitle,
  title,
  containerClassName,
  subTitleClassName,
  titleClassName,
}: {
  subTitle: string;
  title: string;
  containerClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-4", containerClassName)}>
      <h2
        className={cn(
          "text-[50px] font-playfair text-center md:text-start",
          titleClassName
        )}
      >
        {title}
      </h2>
      <p className={cn("text-[12px] md:w-75", subTitleClassName)}>{subTitle}</p>
    </div>
  );
};

export default HeadingWithTitle;
