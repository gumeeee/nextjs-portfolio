"use client";

import Link from "next/link";
import { Particles } from "./magicui/particles";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

type Project = {
  title: string;
  description: string;
  link?: string;
  code: string;
  preview: string;
  technologies: string[];
};

const projectsData: Project[] = [
  {
    title: "Flowboard",
    description:
      "Plataforma de gestão de tarefas e projetos para equipes como um KanbanBoard.",
    code: "https://github.com/gumeeee/flowboard",
    preview:
      "https://raw.githubusercontent.com/gumeeee/flowboard/refs/heads/main/public/projex-light.png",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Supabase",
      "zod",
      "Zustand",
      "React Query",
      "Resend",
      "Framer Motion",
    ],
  },
  {
    title: "SmartStore",
    description: "Ecommerce sustentável.",
    link: "https://smart-store-next.vercel.app/",
    code: "https://github.com/gumeeee/smart-store",
    preview:
      "https://github.com/gumeeee/smart-store/raw/main/public/project-image.png",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Supabase",
      "zod",
      "Clerk",
      "Prisma",
      "Pnpm",
    ],
  },
  {
    title: "InovaVerde",
    description: "Ecommerce sustentável. (BackEnd Possivelmente Fora do ar)",
    link: "https://inova-verde.vercel.app/home",
    code: "https://github.com/orgs/Inova-Verde/repositories",
    preview:
      "https://private-user-images.githubusercontent.com/91639335/325399662-06c9dc05-b7c3-459c-9bda-12450669629a.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQyMjc3MDAsIm5iZiI6MTc0NDIyNzQwMCwicGF0aCI6Ii85MTYzOTMzNS8zMjUzOTk2NjItMDZjOWRjMDUtYjdjMy00NTljLTliZGEtMTI0NTA2Njk2MjlhLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwOVQxOTM2NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYmE4Yzk0ODYxMDA0OGQ3NWI0M2M3YzAyNmIwZjAwNzUyZWY3MDlhMmNkNzVjZjIxNDNjMGIzNDQ0ZmM2NTkzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KLMt4vNEnqwawPpvceFC5Gpn8O6P8CBZbqDnjjrNU40",
    technologies: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Vite",
      "Java",
      "Spring Boot",
      "Axios",
      "PostgreSQL",
    ],
  },
];

const Projects = () => {
  const { theme } = useTheme();
  return (
    <div className="flex relative  flex-col gap-4">
      <h1 className="text-2xl font-bold">Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-100 rounded-md"
          >
            <img
              src={project.preview}
              alt={project.title}
              className="w-full h-full rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-base text-gray-500">{project.description}</p>
              <div className="flex gap-1 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-3">
                <Link href={project.link || ""} target="_blank">
                  <Button variant="default">Link</Button>
                </Link>
                <Link href={project.code} target="_blank">
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={50}
        color={ theme === "dark" ? "#ffffff" : "#000000"}
        refresh
      />
    </div>
  );
};

export default Projects;
