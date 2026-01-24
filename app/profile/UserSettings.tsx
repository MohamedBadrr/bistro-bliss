"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UserProfile } from "../../services/user/getMe";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

export function UserSettings({ profile }: { profile: UserProfile | null }) {
  const router = useRouter();
  console.log("profile in user setting", profile);
  
  const queryClient = useQueryClient();
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
    }
  };

  const { mutate } = useCustomMutation({
    mutationFn: handleLogout,
    onSuccess: () => {
      queryClient.clear();
      toast.success("Logged out Successfully");
    },
    onError: (error) => {
      toast.success(error.message ? error.message : "Error Logout");
    },
  });
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User
          size={32}
          className="hover:text-primary transition-all duration-300 cursor-pointer "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 border-none shadow-2xl bg-white!"
        align="start"
      >
        <DropdownMenuLabel className="items-center flex justify-start gap-2">
          {" "}
          <Image
            alt="profileIMage"
            src={profile?.image ?? "/assets/profileIamge.png"}
            width={50}
            height={50}
            className="rounded-full w-12! h-12!"
          />
          <h1>{profile?.name ?? ""}</h1>
        </DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem
            className="hover:bg-gray-100!"
            onClick={() => {
              router.push("/profile");
            }}
          >
            Profile Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-gray-100!"
            onClick={() => {
              router.push("/orders");
            }}
          >
            My Orders
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-black!" />
        <DropdownMenuItem
          className="hover:bg-red-100! text-red-500"
          onClick={mutate}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
