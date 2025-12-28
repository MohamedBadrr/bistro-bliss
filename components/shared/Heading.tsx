const Heading = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[50px] font-playfair text-center md:text-start">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
