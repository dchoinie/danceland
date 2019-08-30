import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Hr from "../components/Hr"

export default ({ data }) => (
  <Layout>
    <PageTitle title="1955" />
    <>
      <p className="container mx-auto max-w-4xl pb-6">
        1955 was the year live rock and roll came to Cedar Rapids. The date was
        October 6th and the band was Bill Haley &amp; His Comets. That would
        signal the beginning of Danceland being the place for eastern Iowans to
        witness live rock and roll. Later that month Boyd Bennett &amp; His
        Rockets, became the second rock and rollers to make an appearance. Also
        gracing the Danceland stage in 1955 were the innovating orchestra of
        Sauter-Finegan, polka great “Whoopee” John Wilfahrt &amp; His Orchestra
        and Yankton South Dakota’s popular WNAX Bohemian Band. Major country
        acts include Pee Wee King &amp; His Golden West Cowboys and Bob Wills
        &amp; His Texas Playboys.
      </p>
      {data.allData1955Json.edges.map(({ node }) => (
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
            {/* <iframe
              src={node.spotify}
              width={node.iwidth}
              height={node.iheight}
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe> */}
          </div>
          <Hr />
        </div>
      ))}
    </>
  </Layout>
)

export const query = graphql`
  query {
    allData1955Json {
      edges {
        node {
          artist
          fullDate
          id
          price
          weekday
          img1
          img2
          img3
          img4
        }
      }
    }
  }
`
