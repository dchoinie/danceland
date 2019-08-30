import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Hr from "../components/Hr"

export default ({ data }) => (
  <Layout>
    <PageTitle title="1954" />
    <>
      <p className="container mx-auto max-w-4xl pb-6">
        National acts that played at Danceland in 1954 include - Wayne King
        &amp; His Orchestra, “Whoopee” John Wilfahrt &amp; His Orchestra, WNAX
        Bohemian Band, Fezz Fritsche &amp; His Goosetown Band, Six Fat Dutchmen,
        Frank Yankovic &amp; His Yanks.
      </p>
      {data.allData1954Json.edges.map(({ node }) => (
        <div key={node.id} className="text-center px-6 lg:px-0">
          <p style={{ fontFamily: "Hepta Slab" }}>
            {node.fullDate}, {node.weekday}
          </p>
          <p
            className="text-3xl font-bold"
            style={{ fontFamily: "Hepta Slab" }}
          >
            {node.artist}
          </p>
          <p style={{ fontFamily: "Hepta Slab" }}>{node.price}</p>
          <div
            className="lg:flex lg:items-center lg:justify-center lg:mx-auto flex-wrap lg:no-wrap"
            // style={{ border: "1px solid red" }}
          >
            <img
              src={node.img1}
              alt=""
              className="mx-1"
              style={{
                // border: "1px solid blue",
                maxHeight: "500px",
                maxWidth: "500px",
              }}
            />
            <img
              src={node.img2}
              alt=""
              className="mx-1"
              style={{
                // border: "1px solid blue",
                maxHeight: "500px",
                maxWidth: "500px",
              }}
            />
            <img
              src={node.img3}
              alt=""
              className="mx-1"
              style={{
                // border: "1px solid blue",
                maxHeight: "500px",
                maxWidth: "500px",
              }}
            />
            <img
              src={node.img4}
              alt=""
              className="mx-1"
              style={{
                // border: "1px solid blue",
                maxHeight: "500px",
                maxWidth: "500px",
              }}
            />
          </div>
          <div id="spotifyDiv" className="flex justify-center">
            <iframe
              src={node.spotify}
              width={node.iwidth}
              height={node.iheight}
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <Hr />
        </div>
      ))}
    </>
  </Layout>
)

export const query = graphql`
  query {
    allData1954Json {
      edges {
        node {
          artist
          caption
          comment1
          comment2
          fullDate
          id
          price
          weekday
          img1
          img2
          img3
          img4
          spotify
          iwidth
          iheight
        }
      }
    }
  }
`
