import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

const skills = [
  { name: 'javascript', backgroundColor: '#eab308', color: '#FFF' },
  { name: 'typescript', backgroundColor: '#2F74C0', color: '#FFF' },
  { name: 'react', backgroundColor: '#111827', color: '#FFF' },
  { name: 'next.js', backgroundColor: '#000000', color: '#FFF' },
  { name: 'Tailwindcss', backgroundColor: '#0ea5e9', color: '#FFF' },
  { name: 'Bootstrap', backgroundColor: '#5b21b6', color: '#FFF' },
  { name: 'Java', backgroundColor: '#f97316', color: '#FFF' },
];

export const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
          Olá, sou&nbsp;
          <strong className="font-bold ">Marcos</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`} >
            Desenvolvedor Front-end apaixonado por criar interfaces!
          </h2>
          <Link
            href="/contatos"
            className="p-3 bg-h-gray-500 text-white w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            Converse comigo!
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 xl:w-fit gap-3 text-xl">
          {skills.map((skill) => (
            <li
              key={skill.name}
              style={{ backgroundColor: skill.backgroundColor, color: skill.color }}
              className="w-fit p-2 rounded-md"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <Image
          src="https://avatars.githubusercontent.com/u/105993860?v=4"
          alt="Foto de Perfil de marcos"
          unoptimized
          width={400}
          height={400}
          className="rounded-full"
          priority={true}
        />
      </div>
    </main>
  );
};
