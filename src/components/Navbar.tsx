import { useState, useEffect } from "react";
import { MdDarkMode, MdBrightnessLow } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    if (darkMode) {
      htmlEl?.classList.add("dark");
    } else {
      htmlEl?.classList.remove("dark");
    }
  }, [darkMode]);

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
    </div>
  );
};

export default Navbar;
