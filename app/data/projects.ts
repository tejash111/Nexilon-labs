export interface Project {
  title: string;
  techStack: string[];
  description: string;
  image: string;
  link: {
    label: string;
    href: string;
  };
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    title: "Loopex",
    techStack: ["Next.js", "Node.js", "TypeScript", "Motion", "MongoDB", "Langgraph", "socket.io"],
    description: "Ai based Hireing platform",
    image: "/loopex.png",
    link: {
      label: "github.com",
      href: "https://github.com/tejash111/Resume-builder",
    },
    github: "https://github.com/tejash111/resumae/",
    live: "https://loopex.vercel.app/auth",
  },
  {
    title: "TruelyCoded",
    techStack: ["React.js", "TypeScript", "Motion"],
    description: "Agency website",
    image: "/truely.png",
    link: {
      label: "github.com",
      href: "https://github.com/tejash111/Resume-builder",
    },
    github: "https://github.com/tejash111/resumae/",
    live: "https://www.trulycoded.agency/",
  },
  {
    title: "SYNCFLIX",
    techStack: ["Next.js", "Node.js", "TypeScript", "Socket.io", "Motion"],
    description: "Watch Movies with friends remotely",
    image: "/movie.png",
    link: {
      label: "github.com",
      href: "https://github.com/tejash111/Resume-builder",
    },
    github: "https://github.com/tejash111/resumae/",
    live: "https://syncflix-six.vercel.app/",
  },
  {
    title: "AI Resume Builder",
    techStack: ["React.js", "Node.js", "TypeScript", "MongoDB", "Langchain"],
    description: "Ai based resume Builder",
    image: "/res.png",
    link: {
      label: "github.com",
      href: "https://github.com/tejash111/Resume-builder",
    },
    github: "https://github.com/tejash111/resumae/",
    live: "https://www.resumae.in/",
  },
  {
    title: "DonkeyType",
    techStack: ["React.js", "Node.js", "TypeScript", "Socket.io"],
    description: "Multiplayer Monkeytype",
    image: "/type.png",
    link: {
      label: "github.com",
      href: "https://github.com/tejash111/Resume-builder",
    },
    github: "https://github.com/tejash111/resumae/",
    live: "https://donkeytype-alpha.vercel.app/",
  },
  {
    title: "Twiggle",
    techStack: ["React.js", "django.js", "TypeScript", "Postgressql", "Langchain"],
    description: "Traveliing webiste",
    image: "/twiggle.png",
    link: {
      label: "github.com",
      href: "https://github.com/tejash111/Resume-builder",
    },
    github: "https://github.com/tejash111/resumae/",
    live: "https://www.twiggle.co.in/",
  },
  {
    title: "Rental App",
    techStack: [
      "Next.js",
      "Node.js",
      "typescript",
      "Postgres",
      "drizzle-orm",
      "cloudinary",
      "Better-auth",
      "Paypal",
    ],
    description: "A rental app where someone",
    image: "/noknok.png",
    link: {
      label: "github.com",
      href: "https://github.com/tejash111/rentalapp/",
    },
    github: "https://github.com/tejash111/rentalapp/",
    live: "https://nok-nok-phi.vercel.app/",
  },
];
