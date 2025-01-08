"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useRenderContext } from '@/contexts/RenderContext';

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { shouldRender, triggerRender } = useRenderContext();
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleUpdateProfile = () => {
    setIsDropdownOpen(false);
    router.push("/update-profile");
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    let allCokies = Cookies.get();
    for (const cookie in allCokies) {
      Cookies.remove(cookie);
    }
    triggerRender();
    setLogin(false);

    router.push("/");
  };

  
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleToggleDropdown}
        className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Profile
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <button
            onClick={handleUpdateProfile}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Update Profile
          </button>
          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
