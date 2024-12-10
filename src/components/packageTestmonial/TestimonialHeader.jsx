import React from "react"
import { FiArrowDownRight } from "react-icons/fi"
import Image from "../Image"

const TestimonialHeader = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex gap-4 relative">
          <h1 className="text-unlock text-5xl text-[#F28C1E] max-md:text-3xl">
            What
          </h1>
          <span className="w-6 h-6 flex items-center justify-center rounded-md -rotate-12 bg-[#F28C1E]">
            <FiArrowDownRight className="text-xl text-black" />
          </span>

          <Image
            src={"../../../images/starbg.webp"}
            alt="starbg"
            className="absolute -right-0 -top-6 w-[40px] h-[40]"
          />

          <Image
            src={"../../../images/starbg.webp"}
            alt="starbg"
            className="absolute left-0 -bottom-20 w-[40px] h-[40]"
          />
        </div>
        <h1 className="text-unlock text-5xl text-[#F28C1E] ms-20 max-md:ms-0 max-md:text-3xl">
          Our Clients Say
        </h1>
      </div>

      <Image
        src={"../../../images/shape6.webp"}
        alt="shape6"
        className="max-md:hidden w-[170px] h-[170]"
      />
    </div>
  )
}

export default TestimonialHeader
