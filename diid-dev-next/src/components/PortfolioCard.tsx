import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { Project } from "../../data/projectData";

export default function PortfolioCard(project: Project) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>{project.description}</p>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <a href="/portfolio">View Portfolio</a>
        </CardFooter>
      </Card>
    </div>
  );
}
