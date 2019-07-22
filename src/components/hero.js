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
      <div
        className="text-white px-12 rounded"
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
        }}
      >
        <h1 className="text-gray-700 font-bold pt-5 tracking-wide" style={{fontSize: "6rem", lineHeight: "1.2"}}>{data.site.siteMetadata.title}</h1>
        <h4 className="text-4xl text-pink-500">{data.site.siteMetadata.description}</h4>
      </div>
    </div>
  )
}
