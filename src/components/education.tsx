type EducationItem = {
  startDate: string;
  endDate: string;
  collegeName?: string;
  schoolName?: string;
  course: string;
  address: string;
};

const educationData: EducationItem[] = [
  {
    startDate: "Fevereiro 2024",
    endDate: "Atual",
    collegeName: "Centro Universitário Senac - Santo Amaro",
    course: "Graduação em Análise e Desenvolvimento de Sistemas",
    address: "São Paulo, SP",
  },
  {
    startDate: "Fevereiro 2020",
    endDate: "Dezembro 2022",
    collegeName: "UNASP - Centro Universitário Adventista de São Paulo",
    course: "Ensino Médio Técnico em Tecnologia da Informação",
    address: "São Paulo, SP",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold capitalize">formação acadêmica </h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {educationData.map((item, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.course} - {item?.collegeName || item?.schoolName}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-500">
              {item.address}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
