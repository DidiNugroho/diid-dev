import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Link } from "lucide-react";

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
          <div className="mt-4">
            <Image src={project.imageUrl} width={500} height={500} alt="Project Image" />
          </div>
        </CardContent>
        <CardFooter className="flex space-x-4">
          <a
            href={project.githubUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href={project.liveUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Link className="h-8 w-8" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
