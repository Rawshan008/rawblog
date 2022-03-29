import { graphql } from "gatsby"
import * as React from "react"
import Banner from "../components/banner"
import IconCard from "../components/icon-card"
import Layout from "../components/layout"
import SectionTitle from "../components/section-title"

// markup
const IndexPage = ({ data }) => {
  const headingArray = data?.sanityPage?.pageContent

  const bannerSection = headingArray.find(e => e._type === "bannerSection")
  const iconBoxSection = headingArray.find(e => e._type === "iconBox")
  const { iconBoxTitle, iconBoxDescription, boxItems } = iconBoxSection
  return (
    <Layout>
      <Banner bannerSection={bannerSection} />
      <SectionTitle title={iconBoxTitle} description={iconBoxDescription} />
      <IconCard boxItems={boxItems} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query homePage {
    sanityPage(slug: { current: { eq: "home" } }) {
      pageContent {
        ... on SanityIconBox {
          _type
          iconBoxTitle
          iconBoxDescription
          boxItems {
            title
            description
            icon {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        ... on SanityBannerSection {
          _type
          bannerHeading
          bannerDescription
          bannerButtonText
          bannerButtonLink
          bannerImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
