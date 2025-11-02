
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(false);

    return (
      <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
        {/* 左侧 Logo 方块（悬停变文字） */}
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
              bg-gray-400 text-white px-4 py-2 rounded-lg 
              text-lg font-bold cursor-pointer transition-all duration-300
              hover:scale-110 hover:-translate-y-1
            "
          >
            {hovered ? "Dental AI — watt&bit" : "Dental AI"}
      </div>


        {/* 右侧导航 */}
        <div className="flex space-x-4">
          <Link
            href="/"
            className="
              bg-gray-400 text-white px-4 py-2 rounded-lg 
              transition-all duration-300 hover:scale-110 hover:-translate-y-1
            "
          >
            Home
          </Link>

          <Link
            href="/upload"
            className="
              bg-gray-400 text-white px-4 py-2 rounded-lg 
              transition-all duration-300 hover:scale-110 hover:-translate-y-1
            "
          >
            Upload
          </Link>
        </div>
      </nav>
    );
  }
