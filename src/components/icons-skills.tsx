import { SkillItem } from "./skills";

const IconsSkills = ({
  skillsData,
  theme,
}: {
  skillsData: SkillItem[];
  theme: string | undefined;
}) => {
  return (
    <div>
      {" "}
      {skillsData.map((skillItem, index) => (
        <div key={index}>
          <div>
            <h1 className="text-xl">Linguagens</h1>
            <img
              src={`https://skillicons.dev/icons?i=${skillItem.languages}&theme=${theme}`}
              alt="Skills"
              className="mt-4"
            />
          </div>

          <div>
            <h1 className="text-xl my-4">Frameworks</h1>
            <img
              src={`https://skillicons.dev/icons?i=${skillItem.frameworks}&theme=${theme}`}
              alt="Skills"
            />
          </div>

          <div>
            <h1 className="text-xl my-4">ORMs</h1>
            <img
              src={`https://skillicons.dev/icons?i=${skillItem.orms}&theme=${theme}`}
              alt="Skills"
            />
          </div>

          <div>
            <h1 className="text-xl my-4">DB</h1>
            <img
              src={`https://skillicons.dev/icons?i=${skillItem.db}&theme=${theme}`}
              alt="Skills"
            />
          </div>

          <div>
            <h1 className="text-xl my-4">Ferramentas</h1>
            <img
              src={`https://skillicons.dev/icons?i=${skillItem.tools}&theme=${theme}`}
              alt="Skills"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconsSkills;
