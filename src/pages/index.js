import React from "react"
import Texture from "../images/interlaced.png"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import YearSelector from "../components/yearSelector"

import Layout from "../components/layout"

const IndexPage = props => (
  <Layout>
    <div style={{ backgroundImage: `url(${Texture})` }}>
      <Hero />
      <Welcome />
      <YearSelector />
    </div>
  </Layout>
)

export default IndexPage
