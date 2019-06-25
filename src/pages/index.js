import React from "react"
import { Link, graphql } from "gatsby"
import Welcome from "../components/welcome"
import marquee from "../images/marquee.jpg"
import YearSelector from "../components/yearSelector"

import Layout from "../components/layout"

const IndexPage = props => (
  <Layout>
    <div className="flex justify-center">
      <img
        src={marquee}
        alt="marquee"
        className="my-16"
        style={{ boxShadow: "2px 2px 10px #333" }}
      />
    </div>
    <Welcome />
    <YearSelector />
  </Layout>
)

export default IndexPage
