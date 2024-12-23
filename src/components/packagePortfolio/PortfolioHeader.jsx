import React, { useContext } from "react"
import Image from "../Image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import ThemeContext from "../ThemeContext"

const PortfolioHeader = ({ linksPortfolio }) => {
  const { t, i18n } = useTranslation()
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className="text-center mb-10 relative">
      <Image
        src={
          darkMode ? "../../images/starwhite.png" : "../../images/starbg.webp"
        }
        alt="star"
        className="absolute left-0 w-[30px] h-[30px]"
      />

      <Image
        src={
          darkMode ? "../../images/starwhite.png" : "../../images/starbg.webp"
        }
        alt="star"
        className="absolute right-[20%] w-[30px] h-[30px]"
      />
      <h1
        className={clsx(
          "text-5xl font-bold text-orange-500 dark:text-orangeText text-unlock",
          i18n.language === "ar" && "text-unlock-arbic"
        )}
      >
        {t("portfolio-title")}
      </h1>

      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {linksPortfolio.map((link) => (
          <button
            key={link.id}
            className={clsx(
              "text-gray-300 hover:text-orange-500 dark:text-lightText dark:font-normal dark:hover:text-orangeText",
              i18n.language === "ar" && "text-unlock-arbic"
            )}
          >
            {i18n.language === "en" ? link.linkEn : link.linkAr}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PortfolioHeader
