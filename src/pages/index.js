import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

// markup
const IndexPage = ({ data }) => {
  console.log(data)
  return <Layout>Hello</Layout>
}

export default IndexPage

export const query = graphql`
  query homePage {
    sanityPage(slug: { current: { eq: "home" } }) {
      pageContent {
        __typename
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
