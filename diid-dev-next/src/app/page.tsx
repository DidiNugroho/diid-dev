import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen mt-64">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 mr-8">
        <Image
          src="https://i.imgur.com/0nKPyCw.png"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col space-y-2">
        {/* Name */}
        <span className="text-2xl font-bold">Muhammad Didi Nugroho</span>
        {/* Role */}
        <span className="text-lg">I&apos;m a</span>
        <span className="text-lg">Fullstack Developer</span>
      </div>
    </div>
  );
}
