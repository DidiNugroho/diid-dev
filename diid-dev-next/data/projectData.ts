// Define a type for your portfolio items
export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    role?: string;
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
      role:"Fullstack Developer",
      technologies: ["React.js", "Sequelize", "Express", "Postgres", "Material UI", "Gemini AI", "Oauth", "JWT"],
      liveUrl: "https://anitrackr-b40d6.web.app/",
      githubUrl: "https://github.com/DidiNugroho/Anitrackr",
    },
    {
      id: 2,
      title: "Gamerce",
      description: "A web-based e-commerce application that allows users to find gaming-related products and add them to their wishlist",
      imageUrl: "https://i.imgur.com/Fqa4qaa.png",
      role:"Fullstack Developer",
      technologies: ["Next.js", "Typescript", "MongoDB", "TailwindCSS", "JWT"],
      liveUrl: "https://h8-gamerce.vercel.app/",
      githubUrl: "https://github.com/DidiNugroho/Gamerce",
    },
    {
      id: 3,
      title: "Yutube",
      description: " A mobile-based social media application that allows users to read other user's posts and have a following and followers feature",
      imageUrl: "https://i.imgur.com/JL8zMXb.png",
      role:"Fullstack Developer",
      technologies: ["React Native, MongoDB, Apollo, GraphQL, Redis, JWT, Expo"],
      liveUrl: "https://i.imgur.com/JL8zMXb.png",
      githubUrl: "https://github.com/DidiNugroho/Yutube",
    },
    {
      id: 4,
      title: "JobHut",
      description: "JobHut is a user-friendly app that simplifies job hunting, helping users quickly find opportunities. It allows them to track their application progress, stay organized, and manage their job searcheffectively.",
      imageUrl: "https://i.imgur.com/YuVngyb.png",
      role:"Back-end Developer",
      technologies: ["MERN", "Typescript", "Mongoose", "Shadcn/ui", "Redis", "JWT", "WebSocket", "GraphQL", "Apollo"],
      liveUrl: "https://jobhutt.vercel.app/",
      githubUrl: "https://github.com/Job-Hut",
    },
    {
      id: 5,
      title: "Chatterly",
      description: "A real-time messaging apps that allows users to chat with each other by creating a chat room. created using React.js and Firebase",
      imageUrl: "https://i.imgur.com/GsdnEvF.png",
      role:"Fullstack Developer",
      technologies: ["React", "Shadcn/ui", "Firebase"],
      liveUrl: "https://chatterly-81179.web.app/",
      githubUrl: "https://github.com/Chatterly-RMT53/Client",
    },
  ];
  
  export default projectsData;
  