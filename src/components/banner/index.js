import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Banner = props => {
  const {
    bannerHeading,
    bannerDescription,
    bannerButtonText,
    bannerButtonLink,
    bannerImage,
  } = props?.bannerSection

  const imageUrl = getImage(bannerImage?.asset)
  return (
    <div className="bg-gray-200 py-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center -m-4">
          <div className="w-full md:w-6/12 p-4">
            <h2 className="text-4xl mb-4">{bannerHeading}</h2>
            <p className="mb-4">{bannerDescription}</p>
            <a
              className="inline-block bg-black text-white py-3 px-5 transition-all hover:bg-cyan-400 hover:text-black"
              href={bannerButtonLink}
            >
              {bannerButtonText}
            </a>
          </div>
          <div className="w-full md:w-6/12 p-4">
            <GatsbyImage image={imageUrl} alt={bannerHeading} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
