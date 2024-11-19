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
      description: "A web-based anime bookmarking application featuring an interactive chatbot to ask for anime recommendations powered by Gemini AI",
      imageUrl: "https://i.imgur.com/3UG2tv9.png",
      technologies: ["React.js", "Sequelize", "Express", "Postgres", "Material UI", "Gemini AI", "Oauth", "JWT"],
      liveUrl: "https://anitrackr-b40d6.web.app/",
      githubUrl: "https://github.com/DidiNugroho/Anitrackr",
    },
    {
      id: 2,
      title: "Gamerce",
      description: "A web-based e-commerce application that allows users to find gaming-related products and add them to their wishlist",
      imageUrl: "https://i.imgur.com/Fqa4qaa.png",
      technologies: ["Next.js", "Typescript", "MongoDB", "TailwindCSS", "JWT"],
      liveUrl: "https://h8-gamerce.vercel.app/",
      githubUrl: "https://github.com/DidiNugroho/Gamerce",
    },
  ];
  
  export default projectsData;
  