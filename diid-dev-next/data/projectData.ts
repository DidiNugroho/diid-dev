// Define a type for your portfolio items
export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
  
  // Sample data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "AniTrackr.",
      description: "This is a description of Project One.",
      imageUrl: "/images/project1.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://example.com/project-one",
      githubUrl: "https://github.com/username/project-one",
    },
    {
      id: 2,
      title: "Gamerce",
      description: "This is a description of Project Two.",
      imageUrl: "/images/project2.png",
      technologies: ["Next.js", "Node.js", "GraphQL"],
      liveUrl: "https://example.com/project-two",
      githubUrl: "https://github.com/username/project-two",
    },
  ];
  
  export default projectsData;
  