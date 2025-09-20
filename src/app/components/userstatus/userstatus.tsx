"use client";
import React from "react";
import Link from "next/link";

interface UserStatusProps {
  name: string;
  status: string;
}

const UserStatus: React.FC<UserStatusProps> = ({ name, status }) => {
  return (
    <div className="bg-white shadow rounded-xl p-3 sm:p-4 md:p-5 mb-6 flex items-center justify-between">
      {/* Kiri: Name + Status */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
          Selamat Datang {name}
        </h2>
        <span className="flex items-center justify-center bg-green-100 text-green-600 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full leading-none">
          {status}
        </span>
      </div>

      {/* Kanan: Profile Icon */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <Link href="/dashboard/profile" className="block">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2a6 6 0 016 6c0 3.313-2.687 6-6 6s-6-2.687-6-6a6 6 0 016-6zm0 14c-4.418 0-8 2.015-8 4.5V22h16v-1.5c0-2.485-3.582-4.5-8-4.5z"
            clipRule="evenodd"
          />
        </svg>
        </Link>
      </div>
    </div>
  );
};

export default UserStatus;
