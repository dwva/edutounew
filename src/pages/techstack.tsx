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
  SiFirebase,
  SiKubernetes,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiCplusplus,
  SiExpress,
  SiFlask,
  SiDjango,
  SiLaravel,
  SiPhp,
  SiRust,
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiRedis,
  SiElasticsearch,
  SiGraphql,
  SiApollographql,
  SiWebpack,
  SiVite,
  SiEslint,
  SiJest,
  SiCypress,
  SiStorybook,
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiLinux,
  SiUbuntu,
  SiNginx,
  SiApache,
  SiJenkins,
  SiGitlab,
  SiBitbucket,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiSupabase,
  SiPlanetscale,
  SiPrisma,
  SiSequelize,
  SiMysql,
  SiSqlite,
  SiSass,
  SiStyledcomponents,
  SiChakraui,
  SiMui,
  SiBootstrap,
  SiBulma,
  SiVuetify,
  SiQuasar,
  SiNuxtdotjs,
  SiGatsby,
  SiSvelte,
  SiSolid,
  SiAlpinedotjs,
  SiThreedotjs,
  SiD3Dotjs,
  SiFramer,
} from "react-icons/si";

const TechStackAnimation = () => {
  const allTechIcons = [
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiVuedotjs />, name: "Vue.js", color: "#4FC08D" },
    { icon: <SiAngular />, name: "Angular", color: "#DD0031" },
    { icon: <SiSvelte />, name: "Svelte", color: "#FF3E00" },
    { icon: <SiSolid />, name: "Solid", color: "#2C4F7C" },
    { icon: <SiAlpinedotjs />, name: "Alpine.js", color: "#8BC34A" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiPython />, name: "Python", color: "#3776AB" },
    { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
    { icon: <SiRust />, name: "Rust", color: "#000000" },
    { icon: <SiGo />, name: "Go", color: "#00ADD8" },
    { icon: <SiPhp />, name: "PHP", color: "#777BB4" },
    { icon: <SiSwift />, name: "Swift", color: "#FA7343" },
    { icon: <SiKotlin />, name: "Kotlin", color: "#0095D5" },
    { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <SiSass />, name: "Sass", color: "#CC6699" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
    { icon: <SiMui />, name: "Material-UI", color: "#0081CB" },
    { icon: <SiChakraui />, name: "Chakra UI", color: "#319795" },
    { icon: <SiStyledcomponents />, name: "Styled Components", color: "#DB7093" },
    { icon: <SiBulma />, name: "Bulma", color: "#00D1B2" },
    { icon: <SiVuetify />, name: "Vuetify", color: "#1867C0" },
    { icon: <SiQuasar />, name: "Quasar", color: "#1976D2" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiNuxtdotjs />, name: "Nuxt.js", color: "#00DC82" },
    { icon: <SiGatsby />, name: "Gatsby", color: "#663399" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
    { icon: <SiDjango />, name: "Django", color: "#092E20" },
    { icon: <SiFlask />, name: "Flask", color: "#000000" },
    { icon: <SiLaravel />, name: "Laravel", color: "#FF2D20" },
    { icon: <SiFlutter />, name: "Flutter", color: "#02569B" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <SiSqlite />, name: "SQLite", color: "#003B57" },
    { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
    { icon: <SiElasticsearch />, name: "Elasticsearch", color: "#005571" },
    { icon: <SiSupabase />, name: "Supabase", color: "#3ECF8E" },
    { icon: <SiPlanetscale />, name: "PlanetScale", color: "#000000" },
    { icon: <SiPrisma />, name: "Prisma", color: "#2D3748" },
    { icon: <SiSequelize />, name: "Sequelize", color: "#52B0E7" },
    { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
    { icon: <SiApollographql />, name: "Apollo GraphQL", color: "#311C87" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <SiNetlify />, name: "Netlify", color: "#00AD9F" },
    { icon: <SiHeroku />, name: "Heroku", color: "#430098" },
    { icon: <SiGit />, name: "Git", color: "#F05032" },
    { icon: <SiGithub />, name: "GitHub", color: "#181717" },
    { icon: <SiGitlab />, name: "GitLab", color: "#FCA326" },
    { icon: <SiBitbucket />, name: "Bitbucket", color: "#0052CC" },
    { icon: <SiJenkins />, name: "Jenkins", color: "#D33833" },
    { icon: <SiWebpack />, name: "Webpack", color: "#8DD6F9" },
    { icon: <SiVite />, name: "Vite", color: "#646CFF" },
    { icon: <SiEslint />, name: "ESLint", color: "#4B32C3" },
    { icon: <SiJest />, name: "Jest", color: "#C21325" },
    { icon: <SiCypress />, name: "Cypress", color: "#17202C" },
    { icon: <SiStorybook />, name: "Storybook", color: "#FF4785" },
    { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
    { icon: <SiSketch />, name: "Sketch", color: "#F7B500" },
    { icon: <SiAdobexd />, name: "Adobe XD", color: "#FF61F6" },
    { icon: <SiThreedotjs />, name: "Three.js", color: "#000000" },
    { icon: <SiD3Dotjs />, name: "D3.js", color: "#F9A03C" },
    { icon: <SiFramer />, name: "Framer Motion", color: "#0055FF" },
    { icon: <SiLinux />, name: "Linux", color: "#FCC624" },
    { icon: <SiUbuntu />, name: "Ubuntu", color: "#E95420" },
    { icon: <SiNginx />, name: "Nginx", color: "#009639" },
    { icon: <SiApache />, name: "Apache", color: "#D22128" },
  ];

  const iconsPerRow = Math.ceil(allTechIcons.length / 4);

  const row1Icons = allTechIcons.slice(0, iconsPerRow);
  const row2Icons = allTechIcons.slice(iconsPerRow, iconsPerRow * 2);
 

  const IconCard = ({ icon, color }: { icon: React.ReactNode; color: string }) => (
    <div
      className="flex-shrink-0 mx-2 my-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl transition-all duration-300"
      style={{ color }}
    >
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-md">
        {icon}
      </div>
    </div>
  );

  const IconRow = ({ icons, direction, speed }: { icons: typeof allTechIcons; direction: 'left' | 'right'; speed: string }) => {
    const multipliedIcons = [...icons, ...icons]; // duplicate for seamless scroll

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
          className={`flex whitespace-nowrap ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
          style={{
            animationDuration: speed,
          }}
        >
          {multipliedIcons.map((logo, index) => (
            <IconCard key={`${logo.name}-${index}`} icon={logo.icon} color={logo.color} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-2 sm:p-4 bg-transparent">
      <div className="text-center mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4 md:mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl section-heading text-black">
          Technologies to <span className="text-orange-500">build</span> powerful
        </h1>
      </div>

      <div className="flex items-center justify-center py-2 md:py-4">
        <div className="w-full max-w-5xl lg:max-w-7xl px-2 sm:px-4">
          <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <IconRow icons={row1Icons} direction="right" speed="30s" />
            <IconRow icons={row2Icons} direction="left" speed="40s" />
         
          </div>
        </div>
      </div>

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
          animation: scroll-left linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll-left, .animate-scroll-right {
            animation-duration: 25s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TechStackAnimation;
