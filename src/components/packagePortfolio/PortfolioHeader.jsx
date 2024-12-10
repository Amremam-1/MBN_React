import React from "react"
import Image from "../Image"

const PortfolioHeader = ({ linksPortfolio }) => {
  return (
    <div className="text-center mb-10 relative">
      <Image
        src={"../../../images/starbg.webp"}
        alt="star"
        className="absolute left-0 w-[30px] h-[30px]"
      />

      <Image
        src={"../../../images/starbg.webp"}
        alt="star"
        className="absolute right-[20%] w-[30px] h-[30px]"
      />
      <h1 className="text-5xl font-bold text-orange-500 text-unlock">
        Portfolio
      </h1>

      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {linksPortfolio.map((link) => (
          <button key={link.id} className="text-gray-300 hover:text-orange-500">
            {link.linkEn}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PortfolioHeader
