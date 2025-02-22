import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button"

import React from "react";
import { Project } from "../../data/projectData";
import Image from "next/image";

export default function PortfolioCard(project: Project) {
  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>{project.description}</p>
          </CardDescription>
          <div className="mt-4 flex justify-center items-center">
            <Image src={project.imageUrl} width={500} height={500} className="w-96 h-60 object-cover rounded-lg" alt="Project Image" />
          </div>
          <div className="mt-4">
            <p>Tech Stack:</p>
            {project.technologies.map((tech, index) => (
              <Button key={index} className="mr-2 mb-2 mt-2 bg-slate-300">{tech}</Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex space-x-4">
          <a
            href={project.githubUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={project.liveUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Link className="h-6 w-6" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
