import React from "react"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import YearSelector from "../components/yearSelector"
import RecordSpinner from "../components/recordSpinner"

import Layout from "../components/layout"

const IndexPage = props => (
  <Layout>
    <Hero />
    <Welcome />
    <YearSelector />
  </Layout>
)

export default IndexPage
