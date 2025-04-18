"use client";

import Image from "next/image";
import { TextAnimate } from "./magicui/text-animate";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

const Intro = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center gap-4 sm:flex-row lg:p-8">
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
        <TextAnimate
          animation="blurIn"
          as={"h1"}
          className="font-bold text-4xl text-center lg:text-left"
        >
          Olá! Me chamo Guilherme Moura
        </TextAnimate>

        <div className="md:w-3/12 sm:w-full p-8 overflow-hidden">
          <Image
            src="/images/profile-dark-mode.jpeg"
            alt="Profile"
            width={144}
            height={144}
            className="rounded-full border h-48 lg:w-48"
          />
        </div>
      </div>

      <div>
        <Terminal className="mt-16 max-h-64 overflow-y-auto break-words no-scrollbar">
          <TypingAnimation className="font-bold capitalize">
            sobre mim
          </TypingAnimation>
          <AnimatedSpan delay={2000} className="text-gray-400  mt-2 text-wrap">
            <span>
              ✔ Sou Dev fullstack, atualmente estagiando na área de
              Desenvolvimento na Secretária Municipal de urbanismo e
              Licenciamento, totalmente apaixonado por tecnologia e programação,
              atualmente Desenvolvendo com Spring Boot, Next.js, Nestjs,
              PostgreSQL e MongoDB no intuito de me desenvolver como um
              desenvolvedor fullstack e praticando minhas soft skills, tenho um
              aprendizado rápido e eficiente, adaptabilidade e proatividade são
              habilidades que estou sempre exercendo.
            </span>
          </AnimatedSpan>
        </Terminal>
      </div>
    </div>
  );
};

export default Intro;
