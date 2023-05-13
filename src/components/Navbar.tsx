import { useState, useEffect } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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
      <div className="relative flex justify-between items-center py-4 h-16 lg:h-20 bg-gray-300">
        <div>
          <p className="font-league font-black text-2xl uppercase">NR </p>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row items-center gap-4">
            <p>{t("home")}</p>
            <p>{t("about me")}</p>
            <p>{t("project")}</p>
            <p>{t("contact")}</p>
            <div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 m-0 rounded-lg w-9 h-9"
              >
                {!darkMode ? <FaMoon fill="#ccc" /> : <FaSun fill="yellow" />}
              </button>
            </div>
            <div>
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="rounded-lg w-9 h-9 flex justify-center items-center"
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
        <div className="lg:hidden">
          <button className="text-black border-none pt-1" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          isOpen ? "left-0" : "-left-full"
        } h-screen absolute top-0 z-100 bg-white w-full dark:bg-slate-800 transition-all duration-300 ease-in-out `}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center ">
            <p className="font-extrabold text-3xl">Nadhif Rafifaiz </p>
            <button
              className="text-black border-none pt-1"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>
          </div>
          <p className="font-extrabold text-xl">{t("home")}</p>
          <p className="font-extrabold text-xl">{t("about me")}</p>
          <p className="font-extrabold text-xl">{t("project")}</p>
          <p className="font-extrabold text-xl">{t("contact")}</p>
          <div className="flex flex-col gap-2 mt-8">
            <p className="font-bold text-base">{t("language")}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEnglish(true)}
                className={`${
                  isEnglish ? "border-[3px] font-semibold" : "opacity-75"
                } rounded-3xl w-10 flex justify-center items-center border-2 border-black px-4 py-1 dark:border-white`}
              >
                <p className="font-semibold text-xs">EN</p>
              </button>
              <button
                onClick={() => setIsEnglish(false)}
                className={`${
                  !isEnglish ? "border-[3px] font-semibold" : "opacity-75"
                } rounded-3xl w-10 flex justify-center items-center border-2 border-black px-4 py-1 dark:border-white`}
              >
                <p className="font-semibold text-xs">ID</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-base">{t("theme")}</p>
            <div className="flex gap-2">
              <button onClick={() => setDarkMode(true)} className="rounded-lg ">
                <div
                  className={`${
                    darkMode ? "border-[3px] font-semibold " : "opacity-75"
                  } flex justify-evenly items-end rounded-3xl w-20 border-2 border-black px-4 py-1 dark:border-white`}
                >
                  <p className="dark:text-white">{t("dark")}</p>
                </div>
              </button>
              <button onClick={() => setDarkMode(false)} className="rounded-lg">
                <div
                  className={`${
                    !darkMode ? "border-[3px] font-semibold" : "opacity-75"
                  } flex justify-evenly items-center rounded-3xl w-20 border-2 border-black px-4 py-1 dark:border-white`}
                >
                  <p className="dark:text-white">{t("light")}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
