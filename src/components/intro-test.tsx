"use client";

import Image from "next/image";
import { TextAnimate } from "./magicui/text-animate";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

const IntroTest = () => {
  return (
    <div className="grid grid-col-1 gap-2 items-center lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
        <TextAnimate
          animation="blurIn"
          as={"h1"}
          className="font-bold text-4xl text-center lg:text-left"
        >
          Olá! Me chamo Guilherme Moura
        </TextAnimate>

        <div className="w-full p-8 overflow-hidden">
          <Image
            src="/images/profile-dark-mode.jpeg"
            alt="Profile"
            width={144}
            height={144}
            className="rounded-3xl border h-48 lg:w-48"
          />
        </div>
      </div>

      <div>
        <Terminal className="mt-16 max-h-64 overflow-y-auto break-words no-scrollbar">
          <TypingAnimation className="font-bold capitalize">
            sobre mim
          </TypingAnimation>
          <AnimatedSpan delay={2000} className="text-gray-600 mt-2 text-wrap">
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

export default IntroTest;
