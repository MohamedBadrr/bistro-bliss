import Link from "next/link";
import BlogCard from "../_components/BlogCard";
import { BLOGS } from "@/constants/blogs";

const Page = () => {
  return (
    <div className="container mt-10 md:mt-2">
      <div className="flex flex-col gap-10 ">
        <div className="items-center flex flex-col justify-center gap-3">
          <h1 className="text-[55px] font-playfair text-center">
            Our Blog & Articles
          </h1>
          <p className="w-[90%] md:w-1/2 text-center">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
          <div className=" w-full  px-8 md:px-0 mt-3 grid grid-col-1 md:grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-4 mb-22 gap-8">
            {BLOGS.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} className="w-full">
                <BlogCard
                  date={blog.date}
                  src={blog.coverImage}
                  desc={blog.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
