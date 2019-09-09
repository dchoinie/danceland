import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Hr from "../components/Hr"

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "data1955" } }
      sort: { fields: data___orderId }
    ) {
      nodes {
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
          img4
          img5
          img6
          img7
          iwidth
          orderId
          price
          spotify1
          spotify2
          spotify3
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
    <p className="text-center max-w-5xl mx-auto pb-12">
      National acts that played at Danceland in 1954 include - Wayne King &amp;
      His Orchestra, “Whoopee” John Wilfahrt &amp; His Orchestra, WNAX Bohemian
      Band, Fezz Fritsche &amp; His Goosetown Band, Six Fat Dutchmen, Frank
      Yankovic &amp; His Yanks
    </p>
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
