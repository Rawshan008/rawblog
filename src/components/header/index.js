import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Header = () => {
  const header = useStaticQuery(graphql`
    query Header {
      sanityHeader {
        siteName
        logo {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        navigation {
          navigationTitle
          navItem {
            link {
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  const { siteName, logo, navigation } = header.sanityHeader

  const logoUrl = getImage(logo?.asset)

  return (
    <header className="bg-slate-600 py-3">
      <div className="container flex flex-row justify-between items-center mx-auto">
        <div className="logo">
          <Link to="/">
            {logo ? <GatsbyImage image={logoUrl} alt={siteName} /> : siteName}
          </Link>
        </div>
        <ul className="flex flex-row">
          {navigation.map(item => {
            return item?.navItem.map((navItem, index) => {
              return (
                <li key={index}>
                  <Link
                    className="block text-white py-2 px-2 transition-all hover:text-teal-500"
                    to={navItem?.link?.slug?.current}
                  >
                    {navItem?.link?.title}
                  </Link>
                </li>
              )
            })
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
