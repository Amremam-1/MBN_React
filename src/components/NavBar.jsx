import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { links } from "../constants"
import { IoMoonOutline } from "react-icons/io5"
import { IoIosSearch } from "react-icons/io"
import { FiGlobe } from "react-icons/fi"
import { IoSunnySharp } from "react-icons/io5"
import clsx from "clsx"
import Image from "./Image"
import { useTranslation } from "react-i18next"

const NavBar = () => {
  const { i18n } = useTranslation()

  const [activeLink, setActiveLink] = useState("#home")

  const [open, setOpen] = useState(false)

  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // useEffect(() => {
  //   // Apply dark mode class to body
  //   if (darkMode) {
  //     document.body.classList.add("dark")
  //   } else {
  //     document.body.classList.remove("dark")
  //   }
  // }, [darkMode])

  const handlelanguage = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.6 }
    )

    links.forEach((item) => {
      const section = document.querySelector(item.link)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      links.forEach((item) => {
        const section = document.querySelector(item.link)
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const handleClick = (value) => {
    const section = document.querySelector(value)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveLink(value)
    }
  }

  return (
    <header
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="container w-full bg-[#1c1c1b] sticky top-0 left-0 z-50"
    >
      <div className="flex flex-row justify-between items-center py-4">
        <Link to="/">
          <Image src={"../../images/logo.webp"} alt="Logo" />
        </Link>

        <ul className="flex gap-10 max-md:hidden">
          {links.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.link)}
              className={clsx(
                "flex items-center cursor-pointer",
                activeLink === item.link
                  ? "text-orange-400 shape"
                  : "text-white",

                i18n.language === "ar" && "text-unlock-arbic"
              )}
            >
              <Link to={item.link} className="text-base">
                {i18n.language === "en" ? item.titleEn : item.titleAr}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <div onClick={toggleDarkMode} className="border_linear p-1">
            {darkMode ? (
              <IoMoonOutline className="white text-xl" />
            ) : (
              <IoSunnySharp className="white text-xl" />
            )}
          </div>

          <div>
            <IoIosSearch className="white text-xl cursor-pointer" />
          </div>

          <div className="relative">
            <div className="flex gap-1 items-center">
              <FiGlobe
                onClick={handlelanguage}
                className="white text-xl cursor-pointer"
              />
              <span className="text-sm text-[#E8E8E8]">
                {i18n.language === "ar" ? "AR" : "EN"}
              </span>
            </div>

            {open && (
              <div className="absolute top-7 right-50 z-100">
                <div className="px-3 bg-gray-900/80 text-white flex flex-col cursor-pointer font-mono">
                  <span
                    onClick={() => {
                      i18n.changeLanguage("en")
                      setOpen(false)
                    }}
                  >
                    EN
                  </span>
                  <span
                    onClick={() => {
                      i18n.changeLanguage("ar")
                      setOpen(false)
                    }}
                  >
                    AR
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
