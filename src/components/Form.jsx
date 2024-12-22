import React from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { GrSend } from "react-icons/gr"

const Form = () => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
    // Handle form submission here
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-name")}
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border-style dark:text-lightText"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-email")}
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email",
              },
            })}
            className="border-style dark:text-lightText"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-phone")}
          </label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="border-style dark:text-lightText"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-service")}
          </label>
          <select
            {...register("services", {
              required: "Please select a service",
            })}
            className="mt-1 p-2 mb-3 w-full bg-darkBg dark:bg-lightBg dark:text-grayText opacity-60 border-b border-gray-600 focus:outline-none"
          >
            <option value="">Select a service</option>
            <option value="webDevelopment">Web Development</option>
            <option value="graphicDesign">Graphic Design</option>
            <option value="marketing">Marketing</option>
          </select>
          {errors.services && (
            <p className="text-red-500 text-sm mt-1">
              {errors.services.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-lightText">
            {t("contact-form-message")}
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="border-style focus:outline-none dark:text-lightText"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="style-button flex items-center gap-3 justify-between dark:text-lightText"
          >
            {t("contact-form-send")}
            <span>
              <GrSend className="text-xl text-[#e65c00] dark:text-orangeText" />
            </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
