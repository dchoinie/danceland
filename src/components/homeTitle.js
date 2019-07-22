import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Texture from "../images/interlaced.png"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          summary
        }
      }
    }
  `)
  return (
    <div
      className="w-2/4 mx-auto text-center py-4 rounded"
      style={{ marginTop: "-175px", backgroundImage: `url(${Texture})` }}
    >
      <h1 className="text-6xl font-bold">{data.site.siteMetadata.title}</h1>
      <h4 className="text-4xl text-pink-600">
        {data.site.siteMetadata.description}
      </h4>
      <p>{data.site.siteMetadata.summary}</p>
    </div>
  )
}
