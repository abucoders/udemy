import { getTranslations } from "next-intl/server";

const HomePage = async () => {
  const t = await getTranslations("HomePage");

  return (
    <div className="font-spaceGrotesk m-1 mt-24 p-2 text-xl">{t("title")}</div>
  );
};

export default HomePage;
