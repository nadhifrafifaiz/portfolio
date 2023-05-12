import { useState, useEffect } from "react";
import { MdDarkMode, MdBrightnessLow } from "react-icons/md";
import i18n from "i18next";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    if (darkMode) {
      htmlEl?.classList.add("dark");
    } else {
      htmlEl?.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (isEnglish) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("id");
    }
  }, [isEnglish]);

  return (
    <>
      <div className="relative flex justify-between items-center py-4 h-8">
        <div>
          <p className="font-extrabold text-2xl">Nadhif Rafifaiz </p>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-4">
            <p>Home</p>
            <p>About Me</p>
            <p>Project</p>
            <p>Contact</p>
            <div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 m-0 rounded-md w-9 h-9"
              >
                {!darkMode ? (
                  <MdDarkMode fill="#ccc" />
                ) : (
                  <MdBrightnessLow fill="yellow" />
                )}
              </button>
            </div>
            <div>
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="rounded-md w-9 h-9 flex justify-center items-center"
              >
                {isEnglish ? (
                  <img width={25} src="https://flagcdn.com/id.svg" />
                ) : (
                  <img width={25} src="https://flagcdn.com/gb.svg" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-black border-none" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "left-0" : "-left-full"
        } h-screen absolute top-0 z-100 bg-white w-full dark:bg-slate-800 transition-all duration-300 ease-in-out `}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <p className="font-extrabold text-4xl">Nadhif Rafifaiz </p>
            <button
              className="text-black border-none"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>
          </div>
          <p className="font-extrabold text-xl">Home</p>
          <p className="font-extrabold text-xl">About Me</p>
          <p className="font-extrabold text-xl">Project</p>
          <p className="font-extrabold text-xl">Contact</p>
          <div className="flex flex-col gap-2 mt-8">
            <p className="font-bold text-base">Language</p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEnglish(true)}
                className="rounded-3xl w-12 flex justify-center items-center border-2 border-black px-4 py-1"
              >
                <p className="font-semibold text-xs">EN</p>
              </button>
              <button
                onClick={() => setIsEnglish(false)}
                className="rounded-3xl w-12 flex justify-center items-center border-2 border-black px-4 py-1"
              >
                <p className="font-semibold text-xs">ID</p>
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 m-0 rounded-md w-9 h-9"
              >
                {!darkMode ? (
                  <MdDarkMode fill="#ccc" />
                ) : (
                  <MdBrightnessLow fill="yellow" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
