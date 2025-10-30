import {
  SiGo,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiAdobephotoshop,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Skill } from "../types";

export const skills: Record<string, Skill[]> = {
  "Languages & Frameworks": [
    { name: "Go", color: "bg-gradient-to-br from-teal-500 to-cyan-600", icon: SiGo },
    { name: "JavaScript", color: "bg-gradient-to-br from-teal-400 to-cyan-500", icon: SiJavascript },
    { name: "TypeScript", color: "bg-gradient-to-br from-teal-600 to-cyan-700", icon: SiTypescript },
    { name: "Python", color: "bg-gradient-to-br from-teal-500 to-cyan-600", icon: SiPython },
    { name: "Java", color: "bg-gradient-to-br from-teal-400 to-cyan-500", icon: FaJava },
    {name:"C++", color:"bg-gradient-to-br from-teal-600 to-cyan-700", icon: SiCplusplus},
    { name: "React", color: "bg-gradient-to-br from-teal-500 to-cyan-600", icon: SiReact },
    { name: "Next.js", color: "bg-gradient-to-br from-teal-700 to-cyan-800", icon: SiNextdotjs },
    { name: "Express", color: "bg-gradient-to-br from-teal-600 to-cyan-700", icon: SiExpress },
    { name: "Node.js", color: "bg-gradient-to-br from-teal-400 to-cyan-500", icon: SiNodedotjs },
  ],
  "Tools & Design": [
    { name: "Git", color: "bg-gradient-to-br from-teal-500 to-cyan-600", icon: SiGit },
    { name: "Docker", color: "bg-gradient-to-br from-teal-600 to-cyan-700", icon: SiDocker },
    {name: "Postman", color: "bg-gradient-to-br from-teal-400 to-cyan-500", icon: SiPostman},
    { name: "Figma", color: "bg-gradient-to-br from-teal-500 to-cyan-600", icon: SiFigma },
    { name: "Photoshop", color: "bg-gradient-to-br from-teal-600 to-cyan-700", icon: SiAdobephotoshop },
  ],
  Database: [
    { name: "MySQL", color: "bg-gradient-to-br from-teal-500 to-cyan-600", icon: SiMysql },
  ],
};
