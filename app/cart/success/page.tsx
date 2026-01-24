"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Bistro Bliss | Order Success",
  description:
    "Your order was placed successfully. Thank you for choosing Bistro Bliss!",
};

const SuccessPage = () => {
  const router = useRouter();
  return (
    <div className=" pt-25 h-screen">
      <div className="mb-5 ps-5 lg:ps-25 max-sm:pb-8">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => router.push("/menu")}
        >
          <ArrowLeft />
        </Button>
      </div>
      <div className="flex  flex-col w-full items-center justify-center">
        <h1 className="text-5xl text-center font-semibold text-primary">
          Order Placed Successfully
        </h1>
        <img
          src="/assets/successPage.gif"
          alt="loading"
          className="w-100! h-100!"
        />
      </div>
    </div>
  );
};

export default SuccessPage;
