import Image from "next/image";
import BackButton from "./BackButton";

export const metadata = {
  title: "Bistro Bliss | Order Success",
  description:
    "Your order was placed successfully. Thank you for choosing Bistro Bliss!",
};

const SuccessPage = async ({
  searchParams,
}: {
  searchParams: { message?: Promise<string> };
}) => {
  const params = await searchParams;
  const message = params?.message;
  return (
    <div className=" pt-25 h-screen">
      <div className="mb-5 ps-5 lg:ps-25 max-sm:pb-8"></div>
      <div className="flex  flex-col w-full items-center justify-center">
        <div className="flex items-center justify-center gap-4 mb-8 container">
          <BackButton />
          <h1 className="text-5xl text-center font-semibold text-primary w-3/4 ">
            {message}
          </h1>
        </div>
        <Image
          src="/assets/successPage.gif"
          alt="loading"
          className="w-100! h-100!"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default SuccessPage;
