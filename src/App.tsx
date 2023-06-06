import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useAppDispatch } from "./app/hook";
import {
  setGlobalDarkMode,
  setGlobalLanguage,
} from "./features/settings/settingSlice";
import i18n from "i18next";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const htmlEl = document.querySelector("html");
    const darkMode = localStorage.getItem("darkMode");
    const language = localStorage.getItem("language");
    console.log(darkMode);
    if (darkMode === "true") {
      dispatch(setGlobalDarkMode({ darkMode: true }));
      htmlEl?.classList.add("dark");
    } else if (darkMode === "false") {
      dispatch(setGlobalDarkMode({ darkMode: false }));
      htmlEl?.classList.remove("dark");
    } else {
      dispatch(setGlobalDarkMode({ darkMode: false }));
      htmlEl?.classList.remove("dark");
    }
    if (language === "en") {
      dispatch(setGlobalLanguage({ language: "en" }));
      i18n.changeLanguage("en");
    } else if (language === "id") {
      dispatch(setGlobalLanguage({ language: "id" }));
      i18n.changeLanguage("id");
    } else {
      dispatch(setGlobalLanguage({ language: "en" }));
      i18n.changeLanguage("en");
    }
  }, []);

  return (
    <div className="block">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
