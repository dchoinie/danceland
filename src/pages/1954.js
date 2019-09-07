import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Hr from "../components/Hr"
import Marquee from "../components/marquee"

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "data1954" } }
      sort: { fields: data___orderId }
    ) {
      nodes {
        recordId
        data {
          artist
          comment1
          comment2
          fullDate
          iheight
          img1
          img1caption
          img2
          img3
          iwidth
          price
          spotify1
          weekday
          year
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <PageTitle title="1954" />
    <Marquee title="National acts that played at Danceland in 1954 include:" />
    <div className="container mx-auto text-center px-6 lg:px-0">
      {data.allAirtable.nodes.map(node => (
        <div key={node.recordId}>
          <p>
            {node.data.fullDate}, {node.data.weekday}
          </p>
          <p className="text-3xl font-bold">{node.data.artist}</p>
          <p>{node.data.price}</p>
          <p>{node.data.comment1}</p>
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mx-auto flex-wrap lg:no-wrap">
            <figure>
              <img
                src={node.data.img1}
                alt=""
                style={{ maxWidth: "500px", maxHeight: "500px" }}
                className="w-full"
              />
              <figcaption>{node.data.img1caption}</figcaption>
            </figure>
            <figure>
              <img
                src={node.data.img2}
                alt=""
                style={{ maxWidth: "500px", maxHeight: "500px" }}
                className="w-full"
              />
            </figure>
            <figure>
              <img
                src={node.data.img3}
                alt=""
                style={{ maxWidth: "500px", maxHeight: "500px" }}
                className="w-full"
              />
            </figure>
          </div>
          <p>{node.data.comment2}</p>
          <div className="spotify flex justify-center my-4">
            <iframe
              src={node.data.spotify1}
              width={node.data.iwidth}
              height={node.data.iheight}
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <Hr />
        </div>
      ))}
    </div>
  </Layout>
)
