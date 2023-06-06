import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import vite from "../assets/skills/Vitejs.svg";
import typescript from "../assets/skills/typescript.svg";
import html from "../assets/skills/html-5.svg";
import css from "../assets/skills/css3.svg";
import javascript from "../assets/skills/javascript.svg";
import vue from "../assets/skills/vue.svg";
import nuxt from "../assets/skills/nuxt.svg";

const About = () => {
  const skills = [
    { name: "HTML", src: html },
    { name: "CSS", src: css },
    { name: "Javascript", src: javascript },
    { name: "React JS", src: react },
    { name: "Vue JS", src: vue },
    { name: "Nuxt JS", src: nuxt },
    { name: "Typescript", src: typescript },
    { name: "Tailwind CSS", src: tailwind },
    { name: "Vite JS", src: vite },
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-center ">
            <p className="font-league font-bold uppercase text-3xl">About Me</p>
          </div>
          <div>
            <div className="flex flex-row justify-center ">
              <p className="font-league font-bold capitalize text-2xl">
                Nadhif Rafifaiz K
              </p>
            </div>
            <div className="flex flex-row justify-center ">
              <p className="font-openSans font-normal capitalize text-sm text-dark-white ">
                24 April, Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center ">
          <p className="font-openSans font-light capitalize text-base text-center">
            Software engineer that is passionate about website development,
            design, and technology. Highly committed, optimistic, and sociable
            person. Excel in public speaking, presenting, and team management.
            Proficient in Javascript, ReactJS, VueJS, NuxtJs, NodeJS, and
            relational databases (SQL). I aspire to be a tech lead that creates
            well design applications and a healthy work environment for
            developers
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-row justify-center ">
          <p className="font-league font-bold uppercase text-2xl">Skills</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
          {skills.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-transform duration-500 hover:-translate-y-4"
            >
              <img src={item.src} className="h-28 sm:h-32" />
              <p className="font-league text-sm font-bold md:opacity-0 group-hover:opacity-100">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
