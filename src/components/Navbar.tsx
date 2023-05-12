import { useState, useEffect } from "react";
import { MdDarkMode, MdBrightnessLow } from "react-icons/md";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    if (darkMode) {
      htmlEl?.classList.add("dark");
    } else {
      htmlEl?.classList.remove("dark");
    }
  }, [darkMode]);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  }

  return (
    <div className="flex justify-between items-center py-4 h-8">
      <p>Navbar</p>
      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 m-0 text-xl rounded-md"
        >
          {darkMode ? <MdDarkMode /> : <MdBrightnessLow />}
        </button>
      </div>
      <select onChange={handleChange}>
        <option value="en">{t("english")}</option>
        <option value="id">{t("indonesia")}</option>
      </select>
    </div>
  );
};

export default Navbar;
