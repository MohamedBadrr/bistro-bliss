import Image from "next/image";

type Props = { date: string; src: string; desc: string; onClick?: () => void };
const BlogCard = ({ date, desc, src, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="hover:scale-105 transition-all duration-400 cursor-pointer  shadow-md! h-[50%] rounded-lg! w-full md:max-w-51.5"
    >
      <Image
        height={100}
        width={206}
        alt="blog card image"
        src={src}
        className="rounded-lg! w-full! md:w-51.5!"
      />
      <div className="flex flex-col gap-4 p-5 bg-white shadow-md! rounded-lg!">
        <p className="text-[12px] opacity-60">{date}</p>

        <p className="text-[12px]">{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
