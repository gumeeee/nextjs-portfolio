import { Moon, Sun } from "lucide-react";

const IconThemes = ({
  resolvedTheme,
  setTheme
}: {
  resolvedTheme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      {resolvedTheme === "light" ? (
        <Sun className="size-4" onClick={() => setTheme("dark")} />
      ) : (
        <Moon className="size-4" onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

export default IconThemes;
