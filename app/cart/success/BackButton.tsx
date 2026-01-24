"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={() => router.push("/menu")}
    >
      <ArrowLeft />
    </Button>
  );
};

export default BackButton;
