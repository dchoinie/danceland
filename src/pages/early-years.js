import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Hr from "../components/Hr"

export const earlyYearsQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "earlyYears" } }
      sort: { fields: data___Id }
    ) {
      nodes {
        recordId
        data {
          artist
          full_date
          Id
          img1
          img2
          img3
          img4
          img5
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <PageTitle title="Early Years" />
    {data.allAirtable.nodes.map(node => (
      <div key={node.recordId} className="px-6 lg:px-0">
        <ul className="container mx-auto">
          <li className="flex-col justify-center text-center">
            <h4 className="text-3xl font-bold">{node.data.artist}</h4>
            <p className="text-2xl pb-2">{node.data.full_date}</p>
            <div className="flex flex-wrap justify-center">
              <img
                src={node.data.img1}
                alt=""
                className="self-center"
                style={{ maxHeight: "400px" }}
              />
              <img
                src={node.data.img2}
                alt=""
                className="self-center"
                style={{ maxHeight: "400px" }}
              />
              <img
                src={node.data.img3}
                alt=""
                className="self-center"
                style={{ maxHeight: "400px" }}
              />
              <img
                src={node.data.img4}
                alt=""
                className="self-center"
                style={{ maxHeight: "400px" }}
              />
              <img
                src={node.data.img5}
                alt=""
                className="self-center"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <Hr />
          </li>
        </ul>
      </div>
    ))}
  </Layout>
)
