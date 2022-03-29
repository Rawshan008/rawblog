import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const IconCard = props => {
  const boxItems = props?.boxItems

  return (
    <div className="bg-transparent">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap -m-4">
          {boxItems.map((item, index) => {
            const imgUrl = getImage(item?.icon?.asset)
            return (
              <div key={index} className="p-4 w-full md:w-4/12">
                <GatsbyImage
                  image={imgUrl}
                  alt={item?.title}
                  className="mb-4"
                />
                <h1 className="text-xl mb-4">{item?.title}</h1>
                <p>{item?.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default IconCard
