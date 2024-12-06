"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineGlobe } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

const UserMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // Stores user data (name, role)
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        setUser({ role: payload.role }); // Extract user role from token
      } catch {
        localStorage.removeItem("token"); // Remove invalid token
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-6 text-gray-700">
        <span
          className="hover:text-purple-500 transition cursor-pointer"
          onClick={() => router.push("/")}
        >
          Your home
        </span>
        <HiOutlineGlobe className="text-gray-700 hover:text-purple-500 cursor-pointer transition" size={20} />
        <div
          className="flex items-center border border-gray-300 rounded-full p-2 space-x-2 bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FiMenu className="text-gray-700" />
          <FaUserCircle className="text-gray-900" size={20} />
        </div>
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 bg-slate-50 shadow-lg rounded-lg w-48 py-2 text-sm text-gray-700 z-10">
          {!user ? (
            <>
              <button
                onClick={() => router.push("/login")}
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push("/signup")}
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/profile")}
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Profile
              </button>
              {user.role === "admin" && (
                <button
                  onClick={() => router.push("/admin")}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Admin Panel
                </button>
              )}
              {user.role === "host" && (
                <button
                  onClick={() => router.push("/host")}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Host Panel
                </button>
              )}
              <button
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
