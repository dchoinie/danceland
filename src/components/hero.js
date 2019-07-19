import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroImg from "../images/front_wider.jpg"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "front_wider.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixelss
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "calc(100vh - 104px)",
      }}
    >
      <div
        className="text-white px-12 ml-12 rounded"
        style={{
          position: "absolute",
          top: "65%",
          backgroundColor: "rgba(112, 36, 89, 0.5)",
        }}
      >
        <h1 className="text-6xl font-bold">{data.site.siteMetadata.title}</h1>
        <h4 className="text-4xl">{data.site.siteMetadata.description}</h4>
      </div>
    </div>
  )
}
