import { MdOutlineMailOutline } from "react-icons/md"
import { MdOutlineLocalPhone } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Image from "./Image"
import Form from "./Form"

const ContactForm = () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      id="contact"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="bg-main text-white py-12 relative"
    >
      <div
        className={clsx(
          "absolute top-0 right-0 z-20 overflow-visible",
          i18n.language === "ar" && "absolute top-0 left-0"
        )}
      >
        <Image
          src={"/public/images/241.svg"}
          alt="icon"
          className="h-[580px] opacity-30"
        />
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div>
          <div className="flex justify-between items-center">
            <h2
              className={clsx(
                "text-4xl font-bold text-orange-500 mb-4 text-unlock",
                i18n.language === "ar" && "text-unlock-arbic"
              )}
            >
              {t("contact-title-one")}
            </h2>

            <Image src={"/images/Frame.svg"} alt={"icon"} />
          </div>
          <h2
            className={clsx(
              "text-4xl font-bold text-orange-500 mb-8 text-unlock",
              i18n.language === "ar" && "text-unlock-arbic"
            )}
          >
            {t("contact-title-two")}
          </h2>
          <p
            className={clsx(
              "text-gray-300 mb-6",
              i18n.language === "ar" && "text-unlock-arbic"
            )}
          >
            {t("contact-subtitle")}
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center">
              <MdOutlineLocalPhone className="text-xl me-4" />
              <span>+922 001 126 900</span>
            </li>
            <li className="flex items-center">
              <MdOutlineMailOutline className="text-xl me-4" />
              <span>info@momentummix.com</span>
            </li>
            <li className="flex items-center">
              <IoLocationOutline className="text-xl me-4" />
              <span>Saudi Arabia</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative">
          <Form />
        </div>
      </div>
      <footer className="bg-main mt-10 text-white text-center py-4">
        <p className="text-sm">&copy; 2023 MBN All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default ContactForm
