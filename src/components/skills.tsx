"use client";

import { useTheme } from "next-themes";
import IconsSkills from "./icons-skills";

export type SkillItem = {
  languages: string[];
  frameworks: string[];
  orms: string[];
  db: string[];
  tools: string[];
};

const skillsData: SkillItem[] = [
  {
    languages: ["java", "ts", "go"],
    frameworks: [
      "react",
      "nextjs",
      "angular",
      "express",
      "spring",
      "tailwind",
      "jest",
    ],
    orms: ["prisma", "hibernate"],
    db: ["mysql", "postgres", "mongodb", "firebase"],
    tools: ["docker", "git", "github", "supabase", "figma"],
  },
];

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Habilidades</h1>

      <IconsSkills skillsData={skillsData} theme={theme} />
    </div>
  );
};

export default Skills;
