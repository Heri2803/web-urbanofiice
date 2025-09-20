"use client";

import { useEffect, useState } from "react";

export default function InvoiceBar() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setDate(formatted);
  }, []);

  return (
    <div className="w-full bg-white shadow-md rounded-2xl px-4 sm:px-6 md:px-8 py-3 flex flex-row items-center justify-between">
      {/* Left Side (Title + Divider + Date) */}
      <div className="flex items-center space-x-3">
        <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 tracking-wide">
          Calls
        </h1>
        <span className="w-[2px] h-4 sm:h-5 bg-orange-500"></span>
        <span className="text-xs sm:text-sm md:text-base text-gray-500">{date}</span>
      </div>
    </div>
  );
}