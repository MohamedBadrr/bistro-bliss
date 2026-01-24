export const metadata = {
  title: "Bistro Bliss | My Profile",
  description: "View and update your profile information at Bistro Bliss.",
};

import ProfileClient from "./ProfileClient";
import { getMe } from "../../services/user/getMe";

const ProfilePage = async () => {
  const profile = await getMe();

  return (
    <main className="py-20 container">
      <h1 className="text-[55px] font-playfair text-center">My Profile</h1>
      <ProfileClient profile={profile} />
    </main>
  );
};

export default ProfilePage;
