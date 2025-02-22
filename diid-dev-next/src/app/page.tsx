"use client";
import Image from "next/image";
import projectsData, { Project } from "../../data/projectData";
import PortfolioCard from "@/components/PortfolioCard";

export default function Home() {
  return (
    <div>
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 mr-12">
        <Image
          src="https://i.imgur.com/0nKPyCw.png"
          alt="Profile Picture"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col space-y-4 mb-12">
        {/* Name */}
        <span className="text-4xl font-bold mt-12">Muhammad Didi Nugroho</span>
        {/* Role */}
        <span className="text-xl mr-96">
          Graduated from Gunadarma University with a degree in Informatics
          Engineering. An energetic and passionate individual with a strong
          interest in technology and programming, particularly in native and web
          development. Excellent at collaborating with others to achieve
          specific objectives on time and understanding of foreign languages
          such as English and Japanese.
        </span>
      </div>
      <span className="text-4xl">Portfolio / Projects</span>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project: Project) => (
        <div key={project.id}>
          <PortfolioCard {...project} />
        </div>
      ))}
    </div>
    </div>
  );
}
