"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen mt-32">
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 mr-12">
        <Image
          src="https://i.imgur.com/0nKPyCw.png"
          alt="Profile Picture"
          fill={true}
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className="flex flex-col space-y-4">
        {/* Name */}
        <span className="text-4xl font-bold">Muhammad Didi Nugroho</span>
        {/* Role */}
        <span className="text-xl">I&apos;m a</span>
        <span className="text-xl">Fullstack Developer</span>
      </div>
    </div>
  );
}
