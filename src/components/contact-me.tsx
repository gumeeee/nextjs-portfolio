import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Contato</h1>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Quer conversar? Mande uma mensagem diretamente para mim com uma pergunta
        no{" "}
        <Link
          className="text-blue-500"
          href="https://www.linkedin.com/in/guilherme-moura-13a991259/"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        ou envie um e-mail diretamente para{" "}
        <Link
          className="text-blue-500"
          target="_blank"
          href="emailto:guibr406@gmail.com"
        >
          guibr406@gmail.com
        </Link>
      </p>
    </div>
  );
};

export default ContactMe;
