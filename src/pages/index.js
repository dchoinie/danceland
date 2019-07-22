import React from "react"
import Texture from "../images/interlaced.png"
import Hero from "../components/hero"
import HomeTitle from "../components/homeTitle"
import Welcome from "../components/welcome"
import YearSelector from "../components/yearSelector"

import Layout from "../components/layout"

const IndexPage = props => (
  <Layout>
    <Hero />
    {/* <HomeTitle /> */}
    <Welcome />
    <YearSelector />
  </Layout>
)

export default IndexPage
