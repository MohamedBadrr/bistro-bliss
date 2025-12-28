import React from "react";

const HeadingWithTitle = ({
  subTitle,
  title,
}: {
  subTitle: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[50px] font-playfair text-center md:text-start">
        {title}
      </h2>
      <p className="text-[12px] md:w-75">{subTitle}</p>
    </div>
  );
};

export default HeadingWithTitle;
