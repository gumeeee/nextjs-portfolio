"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-9/12">
        <h1 className="font-bold text-4xl">Olá! Me chamo Guilherme Moura</h1>
        <p className="text-base text-gray-500">
          Sou Dev fullstack, atualmente estagiando na área de Desenvolvimento na
          Secretária Municipal de urbanismo e Licenciamento, totalmente
          apaixonado por tecnologia e programação, atualmente Desenvolvendo com
          Spring Boot, Next.js, Nestjs, PostgreSQL e MongoDB no intuito de me
          desenvolver como um desenvolvedor fullstack e praticando minhas soft
          skills, tenho um aprendizado rápido e eficiente, adaptabilidade e
          proatividade são habilidades que estou sempre exercendo.
        </p>
      </div>
      <div className="w-5/12 flex-1 relative overflow-hidden">
        <Image
          src="/images/profile-dark-mode.jpeg"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full border h-36 w-36"
        ></Image>
      </div>
    </div>
  );
};

export default Intro;
