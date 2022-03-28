import { graphql, Link, useStaticQuery } from "gatsby"
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
  console.log(footerSocial)
  return (
    <footer className="bg-slate-600 py-3">
      <div className="container flex flex-row items-center justify-between">
        <div className="text-white">{copywrite}</div>
        <div className="text-white">
          {footerSocial.map(item => {
            const socialImg = getImage(item?.icon?.asset)
            return (
              <Link to={item?.url}>
                <GatsbyImage image={socialImg} alt={item?.title} />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
