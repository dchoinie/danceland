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
        height: "calc(100vh - 96px)",
        borderTop: "3px solid grey",
      }}
    >
      <div id="heroContainer" className="text-white px-12 rounded bg-red-800">
        <h1 id="heroTitle" className="text-white font-bold pt-5 tracking-wide">
          {data.site.siteMetadata.title}
        </h1>
        <h4
          id="heroDescription"
          className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white"
        >
          {data.site.siteMetadata.description}
        </h4>
      </div>
    </div>
  )
}
