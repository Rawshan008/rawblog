import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

// markup
const IndexPage = ({ data }) => {
  const headingArray = data?.sanityPage?.pageContent

  const bannerSection = headingArray.find(a => a._type === "bannerSection")

  console.log(bannerSection)
  return <Layout>Hello</Layout>
}

export default IndexPage

export const query = graphql`
  query homePage {
    sanityPage(slug: { current: { eq: "home" } }) {
      pageContent {
        ... on SanityBannerSection {
          _type
          bannerHeading
          bannerDescription
          bannerButtonText
          bannerButtonLink
        }
        ... on SanityIconBox {
          _type
          iconBoxTitle
          iconBoxDescription
          boxItems {
            title
            description
          }
        }
      }
    }
  }
`
