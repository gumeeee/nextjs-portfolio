import ContactMe from "@/components/contact-me";
import CustomDock from "@/components/custom-dock";
import Education from "@/components/education";
import { ExperienceWork } from "@/components/experience-work";
import Intro from "@/components/intro";
import IntroTest from "@/components/intro-test";
import { Meteors } from "@/components/magicui/meteors";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="relative lg:w-8/12 wd:7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-12 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Meteors number={30} />
        <IntroTest />
        <ExperienceWork />
        <Education />
        <Skills />
        <Projects />
        <ContactMe />
        <CustomDock orientation="vertical" />
      </main>
    </div>
  );
}
