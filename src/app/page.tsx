import { ExperienceWork } from "@/components/experience-work";
import Intro from "@/components/intro";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {
  return (
    <div className="relative w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Meteors number={30} />
        <Intro />
        <ExperienceWork />
      </main>
    </div>
  );
}
