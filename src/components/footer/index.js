import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Footer = () => {
  const footer = useStaticQuery(graphql`
    query Footer {
      sanityFooter {
        copywrite
        footerSocial {
          title
          icon {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          url
        }
      }
    }
  `)

  const { copywrite, footerSocial } = footer.sanityFooter
  return (
    <footer className="bg-slate-600 py-3">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="text-white">{copywrite}</div>
        <div className="text-white">
          {footerSocial.map((item, index) => {
            const socialImg = getImage(item?.icon?.asset)
            return (
              <a key={index} className="mx-2" href={item?.url}>
                <GatsbyImage
                  className="w-8"
                  image={socialImg}
                  alt={item?.title}
                />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
