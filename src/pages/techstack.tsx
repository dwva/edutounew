import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiDocker,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiFirebase,
  SiKubernetes,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiCplusplus,
} from "react-icons/si";

const TechStackAnimation = () => {
  // Define the tech logos as icons with brand colors
  const techIcons = [
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS", color: "#1572B6" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
    { icon: <SiPython />, name: "Python", color: "#3776AB" },
    { icon: <SiGo />, name: "Go", color: "#00ADD8" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <SiGit />, name: "Git", color: "#F05032" },
    { icon: <SiGithub />, name: "GitHub", color: "#181717" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },

    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiVuedotjs />, name: "Vue.js", color: "#42b883" },
    { icon: <SiAngular />, name: "Angular", color: "#dd0031" },
    { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
  ];

  // Shuffle function to create variation
  const shuffleArray = (array: typeof techIcons) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Rows with shuffled icons
  const row1Icons = shuffleArray(techIcons);
  const row2Icons = shuffleArray(techIcons);
  const row3Icons = shuffleArray(techIcons);
  const row4Icons = shuffleArray(techIcons);

  // Icon component
  const IconCard = ({ icon, color }: { icon: JSX.Element; color: string }) => (
    <div
      className="flex-shrink-0 mx-3 sm:mx-4 md:mx-5 my-3 
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 
        flex items-center justify-center rounded-xl transition-all duration-300"
      style={{ color }}
    >
      <div
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-md"
      >
        {icon}
      </div>
    </div>
  );

  // Row component
  const IconRow = ({
    icons,
    direction,
  }: {
    icons: typeof techIcons;
    direction: "left" | "right";
  }) => {
    const duplicatedIcons = [...icons, ...icons];
    return (
      <div
        className="relative overflow-hidden mb-1 sm:mb-2 md:mb-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div
          className={`flex ${
            direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          }`}
        >
          {duplicatedIcons.map((logo, index) => (
            <IconCard key={index} icon={logo.icon} color={logo.color} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-2 sm:p-4 bg-transparent">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4 md:mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Technologies to <span className="text-orange-500">build</span> powerful
        </h1>
      </div>

      {/* Icon Rows */}
      <div className="flex items-center justify-center py-2 md:py-4">
        <div className="w-full max-w-5xl lg:max-w-7xl px-2 sm:px-4">
          <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <IconRow icons={row1Icons} direction="right" />
            <IconRow icons={row2Icons} direction="left" />
            <IconRow icons={row3Icons} direction="right" />
            <IconRow icons={row4Icons} direction="left" />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default TechStackAnimation;
