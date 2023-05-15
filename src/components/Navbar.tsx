import { useState, useEffect } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  setGlobalDarkMode,
  setGlobalLanguage,
} from "../features/settings/settingSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [darkMode, setDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const darkModeSetting = useAppSelector((state) => state.setting.darkMode);
  const languageSetting = useAppSelector((state) => state.setting.language);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    if (darkMode) {
      htmlEl?.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      dispatch(setGlobalDarkMode({ darkMode: true }));
    } else {
      htmlEl?.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      dispatch(setGlobalDarkMode({ darkMode: false }));
    }
  }, [darkMode]);

  useEffect(() => {
    if (isEnglish) {
      console.log("aku inglis", isEnglish);
      i18n.changeLanguage("en");
      dispatch(setGlobalLanguage({ language: "en" }));
      localStorage.setItem("language", "en");
    } else {
      console.log("aku indo", isEnglish);
      i18n.changeLanguage("id");
      dispatch(setGlobalLanguage({ language: "id" }));
      localStorage.setItem("language", "id");
    }
  }, [isEnglish]);

  useEffect(() => {
    setDarkMode(!darkModeSetting);
    if (languageSetting === "en") {
      setIsEnglish(false);
    } else {
      setIsEnglish(true);
    }
  }, []);

  return (
    <div className="px-[10%] bg-white dark:bg-dark-black">
      <div className="relative flex justify-between items-center py-4 h-16 lg:h-20 ">
        <div>
          <p className="font-league font-black text-2xl uppercase">NR </p>
        </div>
        <div className="hidden lg:block font-league text-lg">
          <div className="flex flex-row items-center gap-6">
            <p className="hover:cursor-pointer hover:text-primary">
              {t("about me")}
            </p>
            <p className="hover:cursor-pointer hover:text-primary">
              {t("project")}
            </p>
            <p className="hover:cursor-pointer hover:text-primary">
              {t("experience")}
            </p>
            <p className="hover:cursor-pointer hover:text-primary">
              {t("education")}
            </p>
            <p className="hover:cursor-pointer hover:text-primary">
              {t("contact me")}
            </p>
            <p className="hover:cursor-pointer hover:text-primary">|</p>
            <div>
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="rounded-lg w-9 flex justify-center items-center"
              >
                {isEnglish ? (
                  <div className="grid grid-cols-2 place-items-center gap-2 hover:cursor-pointer hover:text-primary">
                    <img src="https://flagcdn.com/56x42/id.png" />
                    <p className=" font-semibold mt-1">ID</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 place-items-center gap-2 hover:cursor-pointer hover:text-primary">
                    <img src="https://flagcdn.com/56x42/gb.png" />
                    <p className=" font-semibold mt-1">EN</p>
                  </div>
                )}
              </button>
            </div>
            <label
              htmlFor="toggle"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="relative inline-flex items-center cursor-pointer">
                <input
                  id="toggle"
                  type="checkbox"
                  className="hidden"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div className="toggle__line relative w-14 h-7 bg-blue-950 rounded-full shadow-inner dark:bg-white" />
                <div
                  className={`toggle__icon absolute inset-y-0 left-0 flex items-center justify-center w-7 h-7 transition-transform transform ${
                    darkMode ? "translate-x-full" : "translate-x-0"
                  }`}
                >
                  {darkMode ? (
                    <div className="rounded-full border-2 border-dark-black">
                      <FaSun
                        className="text-yellow-400 opacity-80"
                        size="18px"
                      />
                    </div>
                  ) : (
                    <div className="rounded-full bg-gray-500 border-2 border-dark-white">
                      <FaMoon className="text-yellow-300" size="18px" />
                    </div>
                  )}
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            className="text-dark-black border-none pt-1 hover:text-primary"
            onClick={toggleMenu}
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          isOpen ? "left-0" : "-left-full"
        } h-screen absolute top-0 z-100 bg-white w-full dark:bg-dark-black transition-all duration-300 ease-in-out`}
      >
        <div className="flex h-screen flex-col justify-between p-14">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center ">
              <p className="font-extrabold text-3xl">Nadhif Rafifaiz </p>
              <button
                className="text-dark-black border-none pt-1 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>
            <p className="font-extrabold text-xl hover:cursor-pointer hover:text-primary">
              {t("about me")}
            </p>
            <p className="font-extrabold text-xl hover:cursor-pointer hover:text-primary">
              {t("project")}
            </p>
            <p className="font-extrabold text-xl hover:cursor-pointer hover:text-primary">
              {t("experience")}
            </p>
            <p className="font-extrabold text-xl hover:cursor-pointer hover:text-primary">
              {t("education")}
            </p>
            <p className="font-extrabold text-xl hover:cursor-pointer hover:text-primary">
              {t("contact me")}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-base">{t("language")}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEnglish(true)}
                  className={`${
                    isEnglish
                      ? "border-[3px] border-yellow-400 font-semibold"
                      : "opacity-75"
                  } rounded-3xl w-10 flex justify-center items-center border-2 border-dark-black px-4 py-1 dark:border-white font-semibold text-xs hover:text-primary hover:font-bold hover:border-yellow-400`}
                >
                  <p>EN</p>
                </button>
                <button
                  onClick={() => setIsEnglish(false)}
                  className={`${
                    !isEnglish
                      ? "border-[3px] font-semibold border-yellow-400"
                      : "opacity-75"
                  } rounded-3xl w-10 flex justify-center items-center border-2 border-dark-black px-4 py-1 dark:border-white font-semibold text-xs hover:text-primary hover:font-bold hover:border-yellow-400`}
                >
                  <p>ID</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-base">{t("theme")}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(true)}
                  className="rounded-lg "
                >
                  <div
                    className={`${
                      darkMode
                        ? "border-[3px] font-semibold border-yellow-400 "
                        : "opacity-75"
                    } flex justify-evenly items-end rounded-3xl w-20 border-2 border-dark-black px-4 py-1 dark:border-white hover:text-primary hover:border-yellow-400`}
                  >
                    <p>{t("dark")}</p>
                  </div>
                </button>
                <button
                  onClick={() => setDarkMode(false)}
                  className="rounded-lg"
                >
                  <div
                    className={`${
                      !darkMode
                        ? "border-[3px] font-semibold border-yellow-400"
                        : "opacity-75 border-dark-black dark:border-white hover:text-primary hover:border-yellow-400"
                    } flex justify-evenly items-center rounded-3xl w-20 border-2 px-4 py-1 `}
                  >
                    <p>{t("light")}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
