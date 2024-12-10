import clsx from "clsx"
import React, { useEffect, useMemo, useState } from "react"
import { FiArrowDownRight } from "react-icons/fi"
import { FaMousePointer } from "react-icons/fa"
import useFetchData from "../hooks/useFetchData"
import Skeleton from "../components/Skeleton" // Adjust the path if necessary

const Services = () => {
  const { data, isLoading } = useFetchData("services")

  // const services = data?.status === "Success" ? data.data : [] // Changed naming to avoid conflict with import
  const services = useMemo(() => {
    return data?.status === "Success" ? data.data : []
  }, [data])

  const [toggles, setToggles] = useState({})

  useEffect(() => {
    if (services.length > 0) {
      const initialToggles = services.reduce(
        (acc, service) => ({
          ...acc,
          [service.id]: false,
        }),
        {}
      )
      initialToggles[services[0].id] = true // Default toggle logic
      setToggles(initialToggles)
    }
  }, [services])

  const handleToggle = (id) => {
    setToggles((prevToggles) => ({
      [id]: !prevToggles[id],
    }))
  }

  return (
    <section
      id="service"
      className="bg-main pb-20"
      style={{
        backgroundImage: "url('/images/servicebg.png')",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="py-16 container flex justify-between min-[769px]:items-center
       max-[768px]:flex-col items-start"
      >
        <div className="w-[35%] max-[991px]:w-[45%] max-md:w-full">
          <h1
            className="mb-6 flex items-center gap-4 text-unlock 
          text-5xl text-[#F28C1E] max-sm:text-4xl"
          >
            Our Service
            <span
              className="w-6 h-6 flex items-center justify-center 
            rounded-md -rotate-12 bg-[#F28C1E]"
            >
              <FiArrowDownRight className="text-2xl text-black" />
            </span>
          </h1>

          <div className="w-full">
            {isLoading ? (
              <Skeleton />
            ) : (
              services.map((item) => (
                <div key={item.id} className="flex items-center gap-3 mb-6">
                  <span className="white font-light text-xl">{item.id}</span>
                  <div
                    className="w-full border border-[#A0A0A0] rounded-2xl p-3 
                  flex items-center text-xl font-light white justify-between"
                  >
                    <span
                      className={clsx(
                        toggles[item.id] ? "opacity-100" : "opacity-50"
                      )}
                    >
                      {item.ar_name}
                    </span>
                    <button
                      onClick={() => handleToggle(item.id)}
                      className={clsx(
                        "relative inline-flex items-center h-6 w-12 rounded-full p-1 transition-colors duration-300",
                        toggles[item.id] ? "bg-[#F28C1E]" : ""
                      )}
                      style={{ border: "1px solid #F28C1E" }}
                    >
                      <span
                        className={`inline-block w-4 h-4 transform rounded-full bg-[#F28C1E] transition-transform ${
                          toggles[item.id]
                            ? "translate-x-6 bg-white"
                            : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="w-[50%] p-4 max-md:w-full">
          {isLoading ? (
            <div className="pt-12">
              <Skeleton />
            </div>
          ) : (
            services.map(
              (item) =>
                toggles[item.id] && (
                  <div key={item.id}>
                    <h2 className="text-3xl white mb-2">{item.ar_name}</h2>
                    <p className="text-[#A0A0A0] font-light w-3/4 max-[991px]:w-full">
                      {item.ar_description}
                    </p>

                    <div className="w-3/5 max-[991px]:w-full">
                      <h4 className="text-base white my-3">The Tools</h4>
                      <div className="flex flex-row gap-4 flex-wrap">
                        {JSON.parse(item.tools).map((tool, index) => (
                          <p
                            key={index}
                            className="p-2 border border-[#F28C1E] text-sm opacity-55 rounded-xl text-[#F28C1E]"
                          >
                            {tool}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )
          )}
        </div>
      </div>

      <div className="m-auto w-fit rounded-full border border-[#1C1C1B] px-5 py-3 flex items-center justify-between gap-2 cursor-pointer">
        <button className="text-l text-[#E8E8E8] font-medium">View More</button>
        <span>
          <FaMousePointer className="text-xl text-[#E8E8E8] -rotate-12" />
        </span>
      </div>
    </section>
  )
}

export default Services
