import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-4xl font-bold">{t("hello")}</h1>
      <h1 className="text-4xl font-bold">{t("welcome")}</h1>
    </div>
  );
};

export default Home;
