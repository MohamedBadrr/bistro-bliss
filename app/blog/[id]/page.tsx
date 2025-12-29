import { BLOGS } from "@/constants/blogs";
import Image from "next/image";

interface props {
  params: Promise<{ id: string }>;
}
const OneBlog = async ({ params }: props) => {
  const { id } = await params;
  console.log("params", id);
  const SelectedBLog = BLOGS.find((blog) => blog.id === id);
  return (
    <div className="container pb-10">
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="font-playfair text-[45px] text-center w-full pt-10 md:w-3/4 ">
          {SelectedBLog?.title}
        </h1>
        <Image
          width={800}
          className="w-full! "
          height={300}
          src={SelectedBLog?.coverImage ?? ""}
          alt={SelectedBLog?.title ?? ""}
        />
      </div>
      <div className="flex mt-10  items-start justify-start flex-col gap-2">
        <div className="space-y-2">
          {" "}
          <h2 className="font-bold">{SelectedBLog?.sections[0].heading}</h2>
          <p className="text-[13px]">{SelectedBLog?.sections[0].intro}</p>
        </div>
        <ol>
          {SelectedBLog?.sections[0].tips.map((tip, index) => (
            <li key={tip.label}>
              <span className="text-[13px]">
                <span className="font-semibold">
                  {index + 1}. {tip.label}:
                </span>{" "}
                {tip.text}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex mt-10  items-start justify-start flex-col gap-2">
        <div className="space-y-2">
          {" "}
          <h2 className="font-bold">{SelectedBLog?.sections[1].heading}</h2>
          <p className="text-[13px]">{SelectedBLog?.sections[1].intro}</p>
        </div>
        <ol>
          {SelectedBLog?.sections[1].tips.map((tip, index) => (
            <li key={tip.label}>
              <span className="text-[13px]">
                <span className="font-semibold">
                  {index + 1}. {tip.label}:
                </span>{" "}
                {tip.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default OneBlog;
