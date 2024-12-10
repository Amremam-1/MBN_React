import { counter } from "../constants"
import React from "react"
import Image from "./Image"

const Counter = () => {
  return (
    <section id="about" className="container bg-main w-full py-10 pb-20 pt-10">
      <div className="py-16 px-15 border border-[#1C1C1B] rounded-[50px] relative overflow-hidden">
        <Image
          src={"../../images/shape2.webp"}
          alt="shape"
          className="absolute top-[-100px] 
        left-[-50px] w-[236px] h-[239px]"
        />

        <div
          className="grid grid-cols-4 max-md:grid-cols-2 
        max-sm:grid-cols-1 gap-4 text-center"
        >
          {counter.map((item) => (
            <div className="flex flex-col gap-8" key={item.id}>
              <h1 className="text-[50px] font-semibold custom-outline">
                {item.count}
              </h1>
              <p className="text-xl white">{item.titleEn}</p>
            </div>
          ))}
        </div>

        <Image
          src={"../../images/shape3.webp"}
          alt="shape"
          className="absolute bottom-[-100px] right-[-50px]
          w-[236px] h-[236px]"
        />
      </div>
    </section>
  )
}

export default Counter
