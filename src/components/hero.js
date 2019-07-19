import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroImg from "../images/Front_Wider.jpg"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
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
          backgroundColor: "rgba(80, 26, 64, 0.5)",
        }}
      >
        <h1 className="text-6xl font-bold">{data.site.siteMetadata.title}</h1>
        <h4 className="text-4xl">{data.site.siteMetadata.description}</h4>
      </div>
    </div>
  )
}
