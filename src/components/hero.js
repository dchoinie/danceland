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
        backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0) , rgba(255, 255, 255, 1) 70%), url(${HeroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "calc(100vh - 96px)",
        borderTop: "3px solid grey",
      }}
    >
      <div id="heroContainer" className="text-white px-12 rounded">
        <h1
          id="heroTitle"
          className="text-gray-700 font-bold pt-5 tracking-wide"
        >
          {data.site.siteMetadata.title}
        </h1>
        <h4
          id="heroDescription"
          className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-pink-500"
        >
          {data.site.siteMetadata.description}
        </h4>
      </div>
    </div>
  )
}
