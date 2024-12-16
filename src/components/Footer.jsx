import React from "react"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { i18n } = useTranslation()
  return (
    <div className="p-2 mt-10 bg-main w-full  flex items-center justify-center">
      <p className="text-[#E8E8E8]">
        {i18n.language === "ar"
          ? "© 2023 MBN جميع الحقوق محفوظة"
          : "© 2023 MBN All rights reserved"}
      </p>
    </div>
  )
}

export default Footer
