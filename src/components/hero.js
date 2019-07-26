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
        backgroundImage: `radial-gradient(rgba(255,255,255,0.8),rgba(0,0,0,0.8)), url(${HeroImg})`,
        backgroundPosition: "0% 90%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh)",
        marginTop: "-88px",
      }}
    >
      <div
        id="heroContainer"
        className="text-center w-auto mx-auto p-6 rounded"
        style={{
          backgroundColor: "rgba(0,0,0, 0)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          id="heroTitle"
          style={{ fontWeight: "700" }}
          className="text-gray-900 xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold"
        >
          {data.site.siteMetadata.title}
        </h1>
        <h4
          id="heroDescription"
          className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-800"
        >
          <em>{data.site.siteMetadata.description}</em>
        </h4>
      </div>
    </div>
  )
}
