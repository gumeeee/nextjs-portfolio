type WorkExperienceItem = {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string[];
  location: string;
};

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "Agosto 2024",
    endDate: "Atual",
    company: "Secretária Municipal de Urbanismo e Licenciamento - SMUL",
    position: "Estário em Desenvolvimento",
    description: [
      "Desenvolvimento de sistemas internos utilizando Next.js, Nestjs, Docker, ShadcnUi, NextAuth, Prisma",
    ],
    location: "São Paulo, SP",
  },
];

export const ExperienceWork = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Experiência</h1>

      <ol className="relative border-s border-gray-200  dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.position} - {item.company}
            </h3>
            <ol className="text-base text-gray-600 dark:text-gray-300">
              {item.description.map((desc, index) => (
                <li key={index} className="mt-2 ">
                  {desc}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};
