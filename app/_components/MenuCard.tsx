import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
type MenuCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};
const MenuCard = ({ description, imageSrc, title }: MenuCardProps) => {
  return (
    <div className="w-full hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer max-w-76.5  border border-gray-300 rounded-md  gap-7.5 flex flex-col items-center pt-10 pb-5 px-8">
      <div className="rounded-full w-25 h-25 bg-gray-200 items-center justify-center flex">
        <Image width={48} height={50} src={imageSrc} alt={`${title} icon`} />
      </div>
      <div className="gap-4 flex items-center justify-center flex-col">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-center text-[12px] opacity-75">{description}</p>
      </div>
      <Link href={"/menu"}>
        <Button variant={"link"}>Explore Menu</Button>
      </Link>
    </div>
  );
};

export default MenuCard;
